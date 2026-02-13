# Wyn for VS Code

Syntax highlighting and language server support for [Wyn](https://wynlang.com).

## Features

- Syntax highlighting for all keywords, 27 modules, operators, string interpolation
- LSP integration via `wyn lsp` — completions, hover, go-to-definition, references, rename, format
- Auto-closing brackets, quotes, string interpolation `${}`
- Comment toggling (`Ctrl+/`)
- Code folding

## Install

Copy to your extensions directory:

```bash
# macOS/Linux
cp -r vscode-wyn ~/.vscode/extensions/wyn

# Windows
xcopy /E vscode-wyn %USERPROFILE%\.vscode\extensions\wyn
```

Restart VS Code. Open any `.wyn` file.

## LSP

The extension automatically starts `wyn lsp` when you open a `.wyn` file. Make sure `wyn` is in your PATH:

```bash
wyn install    # or add wyn to PATH manually
```

LSP provides:
- **Completions** — all keywords, 27 modules with method hints, triggered by `.`
- **Hover** — type information
- **Go to Definition** — jump to function/struct definitions
- **Find References** — find all usages
- **Rename** — rename symbols across files
- **Format** — format document

## Highlighted

| Category | Tokens |
|----------|--------|
| Keywords | `fn var const struct enum impl trait type pub import export module` |
| Flow | `return break continue spawn await if else match while for in` |
| Modifiers | `mut` |
| Types | `int float string bool void ResultInt OptionInt` |
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
