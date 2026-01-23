# Wyn Language Support for VS Code

Syntax highlighting and language support for the Wyn programming language.

## Features

- **Syntax Highlighting** - Full syntax highlighting for Wyn code
- **Auto-closing** - Automatic closing of brackets, quotes, etc.
- **Comments** - Line and block comment support
- **Code Folding** - Fold functions, structs, and blocks

## Installation

### From Source

1. Copy this directory to your VS Code extensions folder:
   - **macOS/Linux:** `~/.vscode/extensions/`
   - **Windows:** `%USERPROFILE%\.vscode\extensions\`

2. Restart VS Code

### From VSIX (Future)

```bash
code --install-extension wyn-1.4.0.vsix
```

## Usage

Open any `.wyn` file and syntax highlighting will be applied automatically.

## Language Server (Optional)

To enable LSP features:

1. Install Wyn compiler with LSP support
2. Enable in settings:
   ```json
   {
     "wyn.lsp.enabled": true,
     "wyn.lsp.path": "/path/to/wyn"
   }
   ```

3. Restart VS Code

## Supported Features

- ✅ Syntax highlighting
- ✅ Auto-closing pairs
- ✅ Comment toggling
- ✅ Bracket matching
- ⏳ LSP integration (coming soon)
- ⏳ Snippets (coming soon)
- ⏳ Debugging (coming soon)

## Example

```wyn
// Wyn code with syntax highlighting
fn main() {
    var message = "Hello, World!";
    print(message);
    return 0;
}
```

## Links

- [Wyn Language](https://github.com/wyn-lang/wyn)
- [Documentation](https://github.com/wyn-lang/wyn/tree/main/docs)
- [Examples](https://github.com/wyn-lang/wyn/tree/main/examples)

## License

See LICENSE file in the Wyn repository.
