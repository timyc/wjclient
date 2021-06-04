declare class Main extends egret.DisplayObjectContainer {
    mLoadResGroup01: {};
    mLoadResGroup02: {
        "_ui_cjjs_bm_ditu": string;
    };
    mLoadResGroup03: {
        "_notice_res": string;
    };
    mLoadResGroup04: {
        "_notice_res": string;
    };
    mLoadResGroup05: {
        "ui_xzfwq_p_show": string;
    };
    private sheet;
    private m_CurLoadGroup;
    mToken: string;
    static Instance: Main;
    playerServerData: GetPlayerServerInfoData;
    mConnectServerData: GameServerDescData;
    mCreateRoleData: {
        crn: string;
        crji: number;
    };
    UserName: string;
    NoticeStatus: number;
    GmLevel: number;
    lid: string;
    private m_CreateRoleData;
    private m_UIGroup;
    private m_NextStepType;
    private m_CreateRolViewData;
    static $GetThmPath(str: string, thmId: number): string;
    constructor();
    private m_BGImg;
    private onAddToStage(event);
    private _DoGetPlayerServerInfo(event);
    private _DoParsePlayerServerInfo(infostr);
    private _SetNextStep(step);
    private _LoadSheet(jsonName);
    private _LoadGroup(group);
    private _CheckUI(name);
    ShowServerUI(): void;
    ShowNoticeUI(): void;
    ShowCreateUI(data: GameServerDescData): void;
    UpdateLoadingUI(isUpdate: boolean, str: string, p1: number, p2: number, time: number): void;
    ShowLoadingUI(): void;
    private m_LoadingImg;
    private m_TimeOutId;
    private DoShowLoadingImg();
    private ShowLoadingImg();
    private UpdateLoadingImgAnim(timeStamp);
    private HideLoadingImg();
    mUIGroupYPos: number;
    private onResize();
    private m_HasLoading;
    private _CloseView(view);
    ShowGame(): void;
    private _CheckServerState(serverData);
    private m_ConCallback;
    ConnectServer(serverData: GameServerDescData, callback: Function): void;
    StartLoadGame(serverData: GameServerDescData): void;
    private _ClearConData();
    SocketUpdateState(state: number): void;
    GetImg(name: string): egret.Texture;
    GetSingleImg(name: string): egret.Texture;
    private _OnLoadItem(obj, name);
    private _CreateScene();
    /**
     * 创建游戏场景
     */
    private CreateGameScene(nextType);
    static closesocket(): void;
}
interface GetPlayerServerInfoData {
    data: {
        player: {
            username: string;
            gm_level: number;
            lid: string;
        };
        maxid: number;
        ns: number;
        lpage: {
            version: number;
            status: number;
            sid: number;
            addr: string;
        }[];
        recent: {
            job: number;
            sex: number;
            name: string;
            time: number;
            status: number;
            sid: number;
            version: number;
            addr: string;
        }[];
    };
    result_msg: string;
    status_msg: string;
    status: number;
    result: number;
}
declare class TestScreenAdapter extends egret.HashObject implements egret.sys.IScreenAdapter {
    /**
     * @private
     * 计算舞台显示尺寸
     * @param scaleMode 当前的缩放模式
     * @param screenWidth 播放器视口宽度
     * @param screenHeight 播放器视口高度
     * @param contentWidth 初始化内容宽度
     * @param contentHeight 初始化内容高度
     */
    calculateStageSize(scaleMode: string, screenWidth: number, screenHeight: number, contentWidth: number, contentHeight: number): egret.sys.StageDisplaySize;
}
