# Wyn for VS Code

Syntax highlighting and language server support for [Wyn](https://wynlang.com).

## Features

- **Syntax highlighting** — keywords, built-in modules, types, operators, string interpolation, comments
- **LSP** via `wyn lsp` — live diagnostics (type-check only, never runs your code), completions, hover, go-to-definition, find references, rename
- Auto-closing brackets, quotes, string interpolation `${}`
- Comment toggling (`Ctrl+/`), code folding
- Filetype detection for `.wyn` and `.🐉`

## Install

### From source

```bash
git clone https://github.com/wynlang/vscode-wyn.git
cd vscode-wyn
npm install
npm run compile
```

Then symlink (or copy) into your extensions dir and restart VS Code:

```bash
# macOS/Linux
ln -s "$PWD" ~/.vscode/extensions/wyn
# Windows
xcopy /E . %USERPROFILE%\.vscode\extensions\wyn
```

Open any `.wyn` file. Syntax highlighting works immediately; the LSP starts
automatically if `wyn` is on your `PATH` (install with `wyn install`, or set
`wyn.lsp.path`).

## LSP

The extension starts `wyn lsp` when you open a `.wyn` file. It provides:
- **Diagnostics** — errors/warnings from `wyn check` as you type (type-check only; never runs your program)
- **Completions** — keywords, modules, and symbols (triggered by `.` / `:`)
- **Hover** — symbol info
- **Go to Definition** — jump to function/struct/enum declarations
- **Find References** / **Rename** — across the open files

Settings: `wyn.lsp.enabled` (default `true`), `wyn.lsp.path` (default `"wyn"`).

## Highlighted

| Category | Tokens |
|----------|--------|
| Keywords | `fn var const struct enum impl trait type pub import export from as extern` |
| Flow | `return break continue spawn await await_all parallel select if else match while for in` |
| Operators | `and or not` |
| Modifiers | `mut` |
| Types | `int float string bool void ptr char Option Result HashMap` |
| Modules | `File System Terminal HashMap Math Path DateTime Json Regex Csv Http Net Db Task Gui Audio StringBuilder Crypto Encoding Os Uuid Log Process Test Url` |
| Constants | `true false None Some Ok Err` |

## Example

```wyn
struct Server {
    port: int
    name: string

    fn start(self) -> int {
        var srv = Http.serve(self.port)
        println("${self.name} running on ${self.port.to_string()}")
        return srv
    }
}

fn main() -> int {
    var s = Server{port: 8080, name: "MyApp"}
    s.start()
    return 0
}
```

## Links

- [Wyn Language](https://github.com/wynlang/wyn)
- [Documentation](https://github.com/wynlang/wyn/tree/main/docs)
- [wynlang.com](https://wynlang.com)
