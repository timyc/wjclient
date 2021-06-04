declare class GameServerData {
    static readonly PAGE_COUNT: number;
    static MaxId: number;
    static PageData: GameServerPageData[];
    static SelectData: GameServerDescData;
    static Callback: Function;
    static ThisObject: any;
    static HasRecentSvr(): boolean;
    static Init(maxId: number, datas: GameServerDescData[], lastList: GameServerDescData[]): void;
    static GetPageData(page: number): void;
    private static _DoPageData(page, event);
}
declare class GameServerPageData {
    index: number;
    name: string;
    datas: GameServerDescData[];
}
declare class GameServerDescData {
    id: number;
    name: string;
    ip: string;
    status: number;
    version: number;
    GetStatus(): number;
    CanEnter(): boolean;
    static Get(obj: any, ignore?: boolean): GameServerDescData;
}
