declare class ServerUI extends egret.DisplayObjectContainer {
    constructor();
    private bg;
    private m_LeftScrollView;
    private m_RightScrollView;
    private PlayerInfo;
    static COLOR: number;
    private onAddToStage(event);
    private DoServerData(page);
    private Close();
    private _LeftClick(index);
    private _RightClick(index);
    static IsNewServer(serverId: number): boolean;
    private _OnClickClose();
    private onResize();
}
declare class ServerScrollView {
    private m_ScrollView;
    private m_Group;
    private m_ItemCls;
    private m_CacheList;
    private m_Datas;
    private m_Click;
    private m_ThisObject;
    constructor(scrollView: egret.ScrollView, itemCls: any, clickFunc: Function, thisObject: any);
    private GetItme();
    private OnChange();
    private _ItemClick(e);
    private m_Index;
    GetSelectIndex(): number;
    SelectIndex(index: number): void;
    private _AddItem(index, forward);
    GetData(index: number): any;
    SetDatas(datas: any[]): void;
}
declare class ServerGroup extends egret.DisplayObjectContainer {
    constructor();
    $hitTest(stageX: number, stageY: number): egret.DisplayObject;
}
declare class ServerUIItem1 extends egret.DisplayObjectContainer {
    static Width: number;
    static Height: number;
    light: egret.Bitmap;
    itemIndex: number;
    private label;
    constructor();
    SetData(data: GameServerPageData): void;
}
declare class ServerUIItem2 extends egret.DisplayObjectContainer {
    static Width: number;
    static Height: number;
    itemIndex: number;
    flagImg: egret.Bitmap;
    hotImg: egret.Bitmap;
    headImg: egret.Bitmap;
    private label;
    Desc: GameServerDescData;
    playername: egret.TextField;
    kuangImg: egret.Bitmap;
    constructor();
    SetData(data: GameServerDescData): void;
    SetHeadData(): void;
}
