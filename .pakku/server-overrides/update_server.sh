#!/usr/bin/env bash
set -Eeuo pipefail

# ========== Overwrite settings ============
config_overrite=true
defaultconfigs_overrite=true
DiscordIntegrationData_overrite=false
tacz_overrite=true
starting_overrite=false
serverproperties_overrite=false

# == Overwrite settings in First Download ==
starting_overrite_in_install=false

# ============ Server settings =============
REPO="TerraFirmaGreg-Team/Modpack-Modern"
VERSION_FILE="version.txt"
ARCHIVE="serverpack.zip"

# Proxy settings (empty = disabled)
PROXY=""

# ================= Paths ==================
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
TEMP_DIR="$SCRIPT_DIR/temp"
API_URL="https://api.github.com/repos/${REPO}/releases/latest"

cd "$SCRIPT_DIR"

start_server() {
    echo
    echo "Starting Minecraft server..."
    exec java -Xmx6024M -Xms1024M -jar minecraft_server.jar nogui
}

# =============== Helpers =================
CURL_PROXY_ARGS=()

if [[ -n "$PROXY" ]]; then
    CURL_PROXY_ARGS=(--proxy "$PROXY")
fi

TMP_DIR=""

cleanup() {
    if [[ -n "$TMP_DIR" && -d "$TMP_DIR" ]]; then
        rm -rf -- "$TMP_DIR"
    fi
}

trap cleanup EXIT

update_failed() {
    echo
    echo "Update failed. Check the error above."
    echo "Starting server with the currently installed files."
    start_server
}

# ======= Detect server installation =======
INITIAL_INSTALL=false
SERVER_FOUND=false

if [[ -f "$SCRIPT_DIR/minecraft_server.jar" ]]; then
    SERVER_FOUND=true
fi

for dir in \
    config \
    defaultconfigs \
    DiscordIntegration-Data \
    tacz
do
    if [[ -d "$SCRIPT_DIR/$dir" ]]; then
        SERVER_FOUND=true
        break
    fi
done

if [[ "$SERVER_FOUND" == false ]]; then
    echo
    echo "No Minecraft server installation detected in:"
    echo "$SCRIPT_DIR"
    echo
    echo "Is the server installed in this directory?"
    echo "Confirm with [y/N]. You have 10 seconds to answer."

    ANSWER=""

    if ! read -r -t 10 -p "Confirm: " ANSWER; then
        ANSWER=""
    fi

    if [[ ! "$ANSWER" =~ ^[yYдД]$ ]]; then
        echo
        echo "Installation cancelled."
        exit 0
    fi

    INITIAL_INSTALL=true
    echo
    echo "Initial installation confirmed."
    echo "Overwrite settings will be ignored."
fi

echo
echo "Checking for updates..."

if ! VERSION=$(curl "${CURL_PROXY_ARGS[@]}" \
    -fsSL --retry 2 "$API_URL" | jq -er '.tag_name'); then
    echo "Failed to get latest version."
    if [[ "$INITIAL_INSTALL" == true ]]; then
        exit 1
    fi
    start_server
fi

CURRENT_VERSION=""

if [[ -f "$VERSION_FILE" ]]; then
    IFS= read -r CURRENT_VERSION < "$VERSION_FILE" || true
fi

if [[ "$INITIAL_INSTALL" != true &&
      "$VERSION" == "$CURRENT_VERSION" ]]; then
    echo "Already up to date: $VERSION"
    start_server
fi

if [[ "$INITIAL_INSTALL" != true ]]; then
    echo
    echo "New version available: ${CURRENT_VERSION:-none} -> $VERSION"
    echo "Update? [y/N] You have 10 seconds to answer."

    ANSWER=""

    if ! read -r -t 10 -p "Confirm: " ANSWER; then
        ANSWER=""
    fi

    if [[ ! "$ANSWER" =~ ^[yYдД]$ ]]; then
        echo
        echo "Update skipped."
        start_server
    fi
fi

mkdir -p "$TEMP_DIR"

if ! TMP_DIR=$(mktemp -d "$TEMP_DIR/tfg_update.XXXXXX"); then
    echo "Failed to create temporary directory."
    if [[ "$INITIAL_INSTALL" == true ]]; then
        exit 1
    fi
    start_server
fi

EXTRACT_DIR="$TMP_DIR/extracted"
mkdir -p "$EXTRACT_DIR"

URL="https://github.com/${REPO}/releases/download/${VERSION}/TerraFirmaGreg-Modern-${VERSION}-serverpack.zip"

echo
echo "Downloading version $VERSION..."

if ! curl "${CURL_PROXY_ARGS[@]}" \
    -fL --retry 3 "$URL" \
    -o "$TMP_DIR/$ARCHIVE"; then
    if [[ "$INITIAL_INSTALL" == true ]]; then
        echo "Installation failed: download error."
        exit 1
    fi
    update_failed
fi

echo "Extracting archive..."
if ! unzip -q "$TMP_DIR/$ARCHIVE" -d "$EXTRACT_DIR"; then
    if [[ "$INITIAL_INSTALL" == true ]]; then
        echo "Installation failed: extraction error."
        exit 1
    fi
    update_failed
fi

echo "Installing files..."
RSYNC_ARGS=(-a --exclude=/version.txt)
if [[ "$INITIAL_INSTALL" == true ]]; then

    # First installation: only control startup scripts.
    if [[ "$starting_overrite_in_install" != true ]]; then
        for file in start_server.sh update_server.sh start_server.bat update_server.bat; do
            if [[ -e "$SCRIPT_DIR/$file" ]]; then
                RSYNC_ARGS+=(--exclude="/$file")
            fi
        done
    fi

else
    for entry in \
        "config:$config_overrite" \
        "defaultconfigs:$defaultconfigs_overrite" \
        "DiscordIntegration-Data:$DiscordIntegrationData_overrite" \
        "tacz:$tacz_overrite"
    do
        dir="${entry%%:*}"
        overwrite="${entry#*:}"

        if [[ "$overwrite" != true &&
              -e "$SCRIPT_DIR/$dir" ]]; then
            RSYNC_ARGS+=(--exclude="/$dir/")
        fi
    done

    if [[ "$starting_overrite" != true ]]; then
        for file in start_server.sh update_server.sh start_server.bat update_server.bat; do
            if [[ -e "$SCRIPT_DIR/$file" ]]; then
                RSYNC_ARGS+=(--exclude="/$file")
            fi
        done
    fi

    if [[ "$serverproperties_overrite" != true ]]; then
        for file in server.properties; do
            if [[ -e "$SCRIPT_DIR/$file" ]]; then
                RSYNC_ARGS+=(--exclude="/$file")
            fi
        done
    fi

fi

if ! rsync "${RSYNC_ARGS[@]}" "$EXTRACT_DIR/" "$SCRIPT_DIR/"; then
    if [[ "$INITIAL_INSTALL" == true ]]; then
        echo "Installation failed: could not copy server files."
        exit 1
    fi
    update_failed
fi

if ! printf '%s\n' "$VERSION" > "$SCRIPT_DIR/${VERSION_FILE}.tmp"; then
    if [[ "$INITIAL_INSTALL" == true ]]; then
        exit 1
    fi
    update_failed
fi

if ! mv -f -- "$SCRIPT_DIR/${VERSION_FILE}.tmp" \
    "$SCRIPT_DIR/$VERSION_FILE"; then
    if [[ "$INITIAL_INSTALL" == true ]]; then
        exit 1
    fi
    update_failed
fi

echo
if [[ "$INITIAL_INSTALL" == true ]]; then
    echo "Installation completed: $VERSION"
else
    echo "Successfully updated to $VERSION"
fi

start_server