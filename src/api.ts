import * as vscode from 'vscode';

export class Api {

    constructor(private panel: vscode.WebviewPanel) { }


    public async runCommand(message: any): Promise<void> {
        // Make sure the command is an API command.
        if (!message.command.startsWith('api:')) {
            console.error('runCommand called with a non-api command:', message.command);
            return;
        }

        // Remove the "api:" prefix. For example, "api:getDatabases" becomes "getDatabases".
        const apiCommand = message.command.substring(4);

        (this as any)[apiCommand](message);
    }

    private getDatabases(message: any): void {
        const databases = [
            "admin",
            "ats",
            "staticcontent",
            "web"
        ];
        this.panel.webview.postMessage({
            replyId: message.id,
            data: databases
        });
    }

    private getTables(message: any): void {
        this.panel.webview.postMessage({
            replyId: message.id,
            data: tables
        });
    }
    private getTable(message: any): void {
        this.panel.webview.postMessage({
            replyId: message.id,
            data: abtest
        });
    }

    private getTableRowCount(message: any): void {
        this.panel.webview.postMessage({
            replyId: message.id,
            data: 30
        });
    }
}

