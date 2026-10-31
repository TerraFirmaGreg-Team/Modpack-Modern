@echo off
setlocal EnableExtensions DisableDelayedExpansion
chcp 65001 >nul
title TerraFirmaGreg Server Updater

rem Overwrite settings
set "config_overrite=true"
set "defaultconfigs_overrite=true"
set "DiscordIntegrationData_overrite=false"
set "tacz_overrite=true"
set "starting_overrite=false"
set "serverproperties_overrite=false"

rem Overwrite settings in First Download
set "starting_overrite_in_install=false"

rem Server settings
set "REPO=TerraFirmaGreg-Team/Modpack-Modern"
set "VERSION_FILE=version.txt"
set "ARCHIVE=serverpack.zip"

rem Empty = disabled
set "PROXY="

rem Paths
for %%I in ("%~dp0.") do set "SCRIPT_DIR=%%~fI"

set "TEMP_DIR=%SCRIPT_DIR%\temp"
set "API_URL=https://api.github.com/repos/%REPO%/releases/latest"

cd /d "%SCRIPT_DIR%" || exit /b 1

set "INITIAL_INSTALL=false"
set "SERVER_FOUND=false"
set "TMP_DIR="

rem Detect server installation
if exist "%SCRIPT_DIR%\minecraft_server.jar" set "SERVER_FOUND=true"
if exist "%SCRIPT_DIR%\config\" set "SERVER_FOUND=true"
if exist "%SCRIPT_DIR%\defaultconfigs\" set "SERVER_FOUND=true"
if exist "%SCRIPT_DIR%\DiscordIntegration-Data\" set "SERVER_FOUND=true"
if exist "%SCRIPT_DIR%\tacz\" set "SERVER_FOUND=true"

if "%SERVER_FOUND%"=="true" goto check_updates

echo.
echo No Minecraft server installation detected in:
echo %SCRIPT_DIR%
echo.
echo Is the server installed in this directory?
echo You have 10 seconds to answer.

choice /c YN /n /t 10 /d N /m "Confirm installation? [Y/N] "
if errorlevel 2 goto installation_cancelled

set "INITIAL_INSTALL=true"
echo.
echo Initial installation confirmed.
echo Overwrite settings will be ignored.
goto check_updates

:installation_cancelled
echo.
echo Installation cancelled.
exit /b 0

:check_updates
echo.
echo Checking for updates...

set "VERSION="

if "%PROXY%"=="" goto api_without_proxy

for /f "usebackq delims=" %%V in (`powershell -NoProfile -Command "$ProgressPreference='SilentlyContinue'; try { $r=Invoke-RestMethod -Uri '%API_URL%' -Proxy '%PROXY%' -TimeoutSec 20; if (-not $r.tag_name) { exit 1 }; [Console]::WriteLine($r.tag_name) } catch { exit 1 }"`) do set "VERSION=%%V"
goto api_result

:api_without_proxy
for /f "usebackq delims=" %%V in (`powershell -NoProfile -Command "$ProgressPreference='SilentlyContinue'; try { $r=Invoke-RestMethod -Uri '%API_URL%' -TimeoutSec 20; if (-not $r.tag_name) { exit 1 }; [Console]::WriteLine($r.tag_name) } catch { exit 1 }"`) do set "VERSION=%%V"

:api_result
if not defined VERSION goto version_check_failed

set "CURRENT_VERSION="

if exist "%SCRIPT_DIR%\%VERSION_FILE%" (
    set /p "CURRENT_VERSION="<"%SCRIPT_DIR%\%VERSION_FILE%"
)

if "%INITIAL_INSTALL%"=="true" goto prepare_update
if "%VERSION%"=="%CURRENT_VERSION%" goto already_updated

echo.
if defined CURRENT_VERSION (
    echo New version available: %CURRENT_VERSION% -^> %VERSION%
) else (
    echo New version available: none -^> %VERSION%
)

echo You have 10 seconds to answer.
choice /c YN /n /t 10 /d N /m "Update? [Y/N] "

if errorlevel 2 goto update_skipped
goto prepare_update

:already_updated
echo Already up to date: %VERSION%
goto start_server

:version_check_failed
echo Failed to get latest version.
if "%INITIAL_INSTALL%"=="true" exit /b 1
goto start_server

:update_skipped
echo.
echo Update skipped.
goto start_server

:prepare_update
if not exist "%TEMP_DIR%\" mkdir "%TEMP_DIR%" >nul 2>&1
if not exist "%TEMP_DIR%\" goto temp_error

:make_temp_dir
set "TMP_DIR=%TEMP_DIR%\tfg_update_%RANDOM%_%RANDOM%"

if exist "%TMP_DIR%\" goto make_temp_dir

mkdir "%TMP_DIR%" >nul 2>&1
if errorlevel 1 goto temp_error

set "EXTRACT_DIR=%TMP_DIR%\extracted"
mkdir "%EXTRACT_DIR%" >nul 2>&1
if errorlevel 1 goto temp_error

set "URL=https://github.com/%REPO%/releases/download/%VERSION%/TerraFirmaGreg-Modern-%VERSION%-serverpack.zip"

echo.
echo Downloading version %VERSION%...

if "%PROXY%"=="" goto download_without_proxy

curl.exe -fL --retry 3 --proxy "%PROXY%" "%URL%" -o "%TMP_DIR%\%ARCHIVE%"
if errorlevel 1 goto download_error
goto extract_archive

:download_without_proxy
curl.exe -fL --retry 3 "%URL%" -o "%TMP_DIR%\%ARCHIVE%"
if errorlevel 1 goto download_error

:extract_archive
echo.
echo Extracting archive...

powershell -NoProfile -Command "$ProgressPreference='SilentlyContinue'; try { Expand-Archive -LiteralPath '%TMP_DIR%\%ARCHIVE%' -DestinationPath '%EXTRACT_DIR%' -Force; exit 0 } catch { Write-Error $_; exit 1 }"

if errorlevel 1 goto extraction_error

echo.
echo Installing files...

set "ROBO_ARGS=/E /R:2 /W:2 /XF version.txt"

if "%INITIAL_INSTALL%"=="true" goto configure_start_scripts

if "%config_overrite%"=="false" if exist "%SCRIPT_DIR%\config\" set "ROBO_ARGS=%ROBO_ARGS% /XD config"

:configure_defaultconfigs
if "%defaultconfigs_overrite%"=="false" if exist "%SCRIPT_DIR%\defaultconfigs\" set "ROBO_ARGS=%ROBO_ARGS% /XD defaultconfigs"

:configure_discord
if "%DiscordIntegrationData_overrite%"=="false" if exist "%SCRIPT_DIR%\DiscordIntegration-Data\" set "ROBO_ARGS=%ROBO_ARGS% /XD DiscordIntegration-Data"

:configure_tacz
if "%tacz_overrite%"=="false" if exist "%SCRIPT_DIR%\tacz\" set "ROBO_ARGS=%ROBO_ARGS% /XD tacz"

:configure_serverproperties
if "%serverproperties_overrite%"=="false" if exist "%SCRIPT_DIR%\server.properties" set "ROBO_ARGS=%ROBO_ARGS% /XF server.properties"

:configure_start_scripts
if "%INITIAL_INSTALL%"=="true" goto configure_initial_scripts
if "%starting_overrite%"=="true" goto copy_files

if exist "%SCRIPT_DIR%\start_server.bat" set "ROBO_ARGS=%ROBO_ARGS% /XF start_server.bat"
if exist "%SCRIPT_DIR%\update_server.bat" set "ROBO_ARGS=%ROBO_ARGS% /XF update_server.bat"
if exist "%SCRIPT_DIR%\start_server.sh" set "ROBO_ARGS=%ROBO_ARGS% /XF start_server.sh"
if exist "%SCRIPT_DIR%\update_server.sh" set "ROBO_ARGS=%ROBO_ARGS% /XF update_server.sh"
goto copy_files

:configure_initial_scripts
if "%starting_overrite_in_install%"=="true" goto copy_files

if exist "%SCRIPT_DIR%\start_server.bat" set "ROBO_ARGS=%ROBO_ARGS% /XF start_server.bat"
if exist "%SCRIPT_DIR%\update_server.bat" set "ROBO_ARGS=%ROBO_ARGS% /XF update_server.bat"
if exist "%SCRIPT_DIR%\start_server.sh" set "ROBO_ARGS=%ROBO_ARGS% /XF start_server.sh"
if exist "%SCRIPT_DIR%\update_server.sh" set "ROBO_ARGS=%ROBO_ARGS% /XF update_server.sh"

:copy_files
robocopy "%EXTRACT_DIR%" "%SCRIPT_DIR%" %ROBO_ARGS%
set "COPY_RESULT=%ERRORLEVEL%"

if %COPY_RESULT% GEQ 8 goto copy_error

:save_installed_version
powershell -NoProfile -Command ^
    "[System.IO.File]::WriteAllText('%SCRIPT_DIR%\%VERSION_FILE%.tmp', '%VERSION%')"

if errorlevel 1 goto version_save_error

move /y "%SCRIPT_DIR%\%VERSION_FILE%.tmp" "%SCRIPT_DIR%\%VERSION_FILE%" >nul
if errorlevel 1 goto version_save_error

echo.
if "%INITIAL_INSTALL%"=="true" (
    echo Installation completed: %VERSION%
) else (
    echo Successfully updated to %VERSION%
)

call :cleanup
goto start_server

:temp_error
echo Failed to create temporary directory.
if "%INITIAL_INSTALL%"=="true" (
    call :cleanup
    exit /b 1
)
goto update_failed

:download_error
if "%INITIAL_INSTALL%"=="true" (
    echo Installation failed: download error.
    call :cleanup
    exit /b 1
)
goto update_failed

:extraction_error
if "%INITIAL_INSTALL%"=="true" (
    echo Installation failed: extraction error.
    call :cleanup
    exit /b 1
)
goto update_failed

:copy_error
if "%INITIAL_INSTALL%"=="true" (
    echo Installation failed: could not copy server files.
    call :cleanup
    exit /b 1
)
goto update_failed

:version_save_error
if "%INITIAL_INSTALL%"=="true" (
    echo Installation failed: could not save version.
    call :cleanup
    exit /b 1
)
goto update_failed

:update_failed
echo.
echo Update failed. Check the error above.
echo Starting server with the currently installed files.
call :cleanup
goto start_server

:cleanup
if defined TMP_DIR if exist "%TMP_DIR%\" rmdir /s /q "%TMP_DIR%"
set "TMP_DIR="
exit /b 0

:start_server
echo.
echo Starting Minecraft server...
java -Xmx6024M -Xms1024M -jar minecraft_server.jar nogui
pause
