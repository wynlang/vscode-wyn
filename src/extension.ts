import { workspace, ExtensionContext } from 'vscode';
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
    const config = workspace.getConfiguration('wyn');
    if (!config.get('lsp.enabled', true)) return;

    const wynPath = config.get<string>('lsp.path', 'wyn');

    const serverOptions: ServerOptions = {
        command: wynPath,
        args: ['lsp']
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'wyn' }],
        synchronize: {
            fileEvents: workspace.createFileSystemWatcher('**/*.wyn')
        }
    };

    client = new LanguageClient(
        'wynLanguageServer',
        'Wyn Language Server',
        serverOptions,
        clientOptions
    );

    client.start();
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) return undefined;
    return client.stop();
}
