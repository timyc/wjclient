declare class LoginUI extends egret.DisplayObjectContainer {
    constructor();
    private m_Label;
    private m_NewServerLabel;
    private NewServerBg();
    private NewSelServerBg();
    private NewStarBtn();
    private onAddToStage(event);
    Close(): void;
    SetCurServerName(): void;
    private _OnClickNotice();
    private _OnClickServer();
    private _OnClickLogin();
}
