var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LoginUI = (function (_super) {
    __extends(LoginUI, _super);
    function LoginUI() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    LoginUI.prototype.NewServerBg = function () {
        var serverBg = new egret.Bitmap;
        serverBg.texture = Main.Instance.GetImg("_ui_bm_fuwuqimingchengbg@24_0_24_0");
        serverBg.scale9Grid = new egret.Rectangle(24, 0, 3, 78);
        serverBg.y = 814;
        serverBg.width = 438;
        serverBg.x = -219;
        this.addChild(serverBg);
        var label1 = new egret.TextField;
        label1.touchEnabled = true;
        label1.x = -104;
        label1.y = 840;
        label1.textColor = 0x00F708;
        label1.size = 24;
        label1.text = "最新服";
        this.addChild(label1);
        var label2 = this.m_NewServerLabel = new egret.TextField;
        label2.touchEnabled = true;
        label2.x = -11;
        label2.y = 840;
        label2.textColor = 0xFEFEFE;
        label2.size = 24;
        this.addChild(label2);
    };
    LoginUI.prototype.NewSelServerBg = function () {
        var serverBg = new egret.Bitmap;
        serverBg.texture = Main.Instance.GetImg("_ui_bm_fuwuqimingchengbg@24_0_24_0");
        serverBg.scale9Grid = new egret.Rectangle(24, 0, 3, 78);
        serverBg.y = 905;
        serverBg.x = -219;
        serverBg.width = 438;
        serverBg.touchEnabled = true;
        serverBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickServer, this);
        this.addChild(serverBg);
        var img1 = new egret.Bitmap;
        img1.texture = Main.Instance.GetImg("_ui_icon_tongchang");
        img1.x = -201;
        img1.y = 928;
        this.addChild(img1);
        var img2 = new egret.Bitmap;
        img2.texture = Main.Instance.GetImg("_ui_bt_dianjixuanfu");
        img2.x = 97;
        img2.y = 929;
        this.addChild(img2);
        var label2 = this.m_Label = new egret.TextField;
        label2.touchEnabled = true;
        label2.x = -162;
        label2.y = 931;
        label2.textColor = 0xFEFEFE;
        label2.size = 24;
        this.addChild(label2);
    };
    LoginUI.prototype.NewStarBtn = function () {
        var img2 = new egret.Bitmap;
        img2.texture = Main.Instance.GetImg("_ui_bt_kaishiyouxi");
        img2.touchEnabled = true;
        img2.x = -176;
        img2.y = 1015;
        this.addChild(img2);
        img2.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickLogin, this);
    };
    LoginUI.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        var noticeBg = new egret.Bitmap;
        noticeBg.touchEnabled = true;
        noticeBg.texture = Main.Instance.GetImg("_ui_bt_gonggao");
        noticeBg.y = 37;
        noticeBg.x = 222;
        noticeBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickNotice, this);
        this.addChild(noticeBg);
        this.NewServerBg();
        this.NewSelServerBg();
        this.NewStarBtn();
        // let btn = new egret.Bitmap
        // btn.touchEnabled = true
        // btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickLogin, this)
        // btn.texture = Main.Instance.GetImg("_ui_xzfwq_btn")
        // btn.y = 1029
        // btn.x = -btn.width >> 1
        // this.addChild(btn)
        this.SetCurServerName();
        if (Main.Instance.NoticeStatus) {
            Main.Instance.ShowNoticeUI();
        }
    };
    LoginUI.prototype.Close = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    LoginUI.prototype.SetCurServerName = function () {
        if (GameServerData.SelectData) {
            this.m_NewServerLabel.text = WindowData._GetServerName(GameServerData.MaxId);
            this.m_Label.text = GameServerData.SelectData.name;
        }
        else {
            this.m_Label.text = "";
            this.m_NewServerLabel.text = "";
        }
    };
    LoginUI.prototype._OnClickNotice = function () {
        Main.Instance.ShowNoticeUI();
    };
    LoginUI.prototype._OnClickServer = function () {
        Main.Instance.ShowServerUI();
    };
    LoginUI.prototype._OnClickLogin = function () {
        Main.Instance.StartLoadGame(GameServerData.SelectData);
    };
    return LoginUI;
}(egret.DisplayObjectContainer));
__reflect(LoginUI.prototype, "LoginUI");
//# sourceMappingURL=LoginUI.js.map