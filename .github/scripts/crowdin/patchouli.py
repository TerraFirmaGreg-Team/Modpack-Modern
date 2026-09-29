import json
import re
import sys
from pathlib import Path

ROOT = Path(sys.argv[1] if len(sys.argv) > 1 else "kubejs/assets/tfg/patchouli_books")
TRANS = {"name", "title", "text", "description", "header", "landing_text"}
LOCALE = re.compile(r".._..")
SKIP = {"en_us", "templates"}


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
    units = []
    for m in re.finditer(r"(?m)^(\s+)\S", text):
        ws = m.group(1)
        if "\t" in ws:
            return "\t"
        units.append(len(ws))
    return min(units) if units else 4


def main():
    changed = 0
    for f in sorted(ROOT.rglob("*.json")):
        rel = f.relative_to(ROOT).parts
        if len(rel) < 3:
            continue
        book, loc, sub = rel[0], rel[1], Path(*rel[2:])
        if loc in SKIP or not LOCALE.fullmatch(loc) or sub.parts[0] in SKIP:
            continue
        en = ROOT / book / "en_us" / sub
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
