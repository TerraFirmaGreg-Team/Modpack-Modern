import json
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[3]
CFG = json.loads((REPO / ".github/config/extract_patchouli.json").read_text(encoding="utf-8"))
ASSETS = REPO / CFG["kubejs_assets"]
TRANS = set(CFG["translatable_keys"])
SKIP = {"en_us", *CFG.get("skip_relpaths", [])}
LOCALES = set(CFG.get("locales", []))
BOOKS = CFG.get("books", [])

if len(sys.argv) > 1:
    roots = [Path(sys.argv[1])]
elif BOOKS:
    roots = [ASSETS / ns / "patchouli_books" / book
             for ns, book in (b.split("/", 1) for b in BOOKS)]
else:
    roots = list(ASSETS.glob("*/patchouli_books/*"))


def str_paths(obj, path=()):
    if isinstance(obj, dict):
        for k, v in obj.items():
            yield from str_paths(v, path + (k,))
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            yield from str_paths(v, path + (i,))
    elif isinstance(obj, str):
        yield path, obj


def setp(obj, path, val):
    for x in path[:-1]:
        obj = obj[x]
    obj[path[-1]] = val


def indent_of(text):
    for line in text.splitlines():
        if line.startswith("\t"):
            return "\t"
        if line.startswith(" "):
            return len(line) - len(line.lstrip())
    return 4


def main():
    changed = 0
    for root in roots:
        for f in sorted(root.rglob("*.json")):
            rel = f.relative_to(root).parts
            if len(rel) < 2:
                continue
            loc, sub = rel[0], Path(*rel[1:])
            if loc in SKIP or loc not in LOCALES or sub.parts[0] in SKIP:
                continue
            en = root / "en_us" / sub
            if not en.is_file():
                continue
            loc_obj = json.loads(f.read_text(encoding="utf-8-sig"))
            en_obj = json.loads(en.read_text(encoding="utf-8-sig"))
            en_strs = dict(str_paths(en_obj))
            for p, lv in str_paths(loc_obj):
                ev = en_strs.get(p)
                if (isinstance(p[-1], str) and p[-1] in TRANS and lv.strip()
                        and isinstance(ev, str) and ev.strip()):
                    setp(en_obj, p, lv)
            if en_obj == loc_obj:
                continue
            text = f.read_text(encoding="utf-8-sig")
            nl = "\n" if text.endswith("\n") else ""
            f.write_text(
                json.dumps(en_obj, indent=indent_of(text), ensure_ascii=False) + nl,
                encoding="utf-8",
            )
            changed += 1
            print(f"normalized {f}")
    print(f"{changed} file(s) normalized")


if __name__ == "__main__":
    main()
