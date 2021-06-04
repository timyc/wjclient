declare class Socket {
    /** 连接中 */
    static STATUS_CONNECTING: number;
    /** 检验中 */
    static STATUS_CHECKING: number;
    /** 连接生效 */
    static STATUS_COMMUNICATION: number;
    /** 关闭连接 */
    static STATUS_DISCONNECT: number;
    UpdateStateEvent: Function;
    private _socketStatus;
    _host: string;
    _port: number;
    private socket_;
    proxy: {
        onSocketConnected: Function;
        onSocketRead: Function;
        onSocketClose: Function;
        onFinishCheck: Function;
    };
    constructor();
    private static _ins;
    static ins: () => Socket;
    readonly connected: boolean;
    newSocket(): void;
    connectError(): void;
    connect(host: string, port: number): void;
    private Connect(host, port);
    close(): void;
    GetSocketState(): number;
    onSocketConnected(e: any): void;
    private recvPack;
    onSocketRead(e: any): void;
    onSocketClose(e: any): void;
    updateStatus(status: any): void;
    onFinishCheck(newStatus: any, oldStatus: any): void;
    private m_PreHeartBeat;
    private m_ServerTimeCounter;
    private m_HeartBeat;
    private _SendHeartBeat(time);
    sendPack(pack: any): void;
}
