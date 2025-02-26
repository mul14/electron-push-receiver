interface ElectronPushReceiver {
    START_NOTIFICATION_SERVICE: string;
    NOTIFICATION_SERVICE_STARTED: string;
    NOTIFICATION_SERVICE_ERROR: string;
    NOTIFICATION_RECEIVED: string;
    TOKEN_UPDATED: string;
    setup: (webContents: Electron.WebContents, electronStore: any) => void;
}

declare const electronPushReceiver: ElectronPushReceiver;
export = electronPushReceiver;
