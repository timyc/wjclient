declare class HttpHelper {
    static GetPlayerServerInfo(token: string, callback: Function, thisObject: any): void;
    static GetServerList(page: number, callback: Function, thisObject: any): void;
    static GetRandomName(serverid: number, sex: number, callback: Function, thisObject: any): void;
    static CheckName(serverid: number, name: string, callback: Function, thisObject: any): void;
    static GetNotice(callback: Function, thisObject: any): void;
    private static m_Set;
    static SendPoint(point: number): void;
    private static Error();
}
