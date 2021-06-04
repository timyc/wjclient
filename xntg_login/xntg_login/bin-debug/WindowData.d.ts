declare class WindowData {
    private static m_IsShow;
    static ShowFps(): void;
    static _LoginToken(callback: Function): void;
    static _GetServerAddr(): string;
    static _GetBGImg(): string;
    static _GetStartType(): number;
    static _GetCenterAddr(): string;
    static _GetResAddr(): string;
    static _GetStartResAddr(): string;
    static _GetPlatformId(): number;
    static _MainCls(): string;
    static _DirectLogin(): boolean;
    static _GetServerName(serverId: number): string;
    private static HasClientConfig(index);
    static StartLoading(): void;
    static RemoveBg(): void;
    static IsHttps(): boolean;
    static HttpsPort(): string;
    static HttpPort(): string;
    private static _IsFullScreen;
    /***是否支持全屏 */
    static IsFullScreen(): boolean;
    static Has(value: number, bit: number): boolean;
    static GetThmType(): number;
    static GetDefaultSel(): number;
}
