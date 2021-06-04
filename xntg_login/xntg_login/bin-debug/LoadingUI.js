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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.m_Textures = [
            { path: "resource/assets/game_start/res/ui_bm_vip5.png", data: null },
        ];
        _this.tipx1 = -300;
        _this.tipx2 = 35;
        _this.imgWidth = 486;
        _this.str = "";
        _this.s1 = 0;
        _this.e1 = 0;
        _this.s2 = 0;
        _this.e2 = 0;
        _this.t = 0;
        _this.et = 0;
        _this.pt = 0;
        _this.preveTime = 0;
        _this.mt = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    // private tipTime: number = 0
    // private tipTimeWay: number = -1
    // private tipTimeY1: number = 1
    // private tipTimeY2: number = 1
    // private tipTimeFunc: Function
    LoadingUI.prototype.NewBar = function (y) {
        var blackBg = new egret.Bitmap();
        blackBg.x = -342;
        blackBg.y = y;
        blackBg.texture = Main.Instance.GetImg("_ui_bm_cjjindutiao01@63_0_60_0");
        blackBg.width = 685;
        blackBg.scale9Grid = new egret.Rectangle(63, 0, 3, 49);
        blackBg.touchEnabled = true;
        this.addChild(blackBg);
        var fBg = new egret.Bitmap;
        fBg.x = -296;
        fBg.y = y + 11;
        fBg.texture = Main.Instance.GetImg("_ui_bm_cjjindutiao02@14_0_8_0");
        fBg.width = 593;
        fBg.scale9Grid = new egret.Rectangle(15, 0, 3, 27);
        fBg.touchEnabled = true;
        this.addChild(fBg);
        return fBg;
    };
    LoadingUI.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        var bg = this.bg = new egret.Bitmap;
        bg.texture = Main.Instance.GetSingleImg("ui_xzfwq_p_show");
        bg.touchEnabled = true;
        bg.x = -480;
        this.addChild(bg);
        this.onResize();
        this.img01 = this.NewBar(926);
        this.img01Tag = new egret.Bitmap;
        this.img01Tag.y = 926 - 45;
        this.img01Tag.texture = Main.Instance.GetImg("_ui_bm_yun");
        this.addChild(this.img01Tag);
        this.img01W = this.SetBarValue(this.img01, 0, this.img01Tag);
        this.img02 = this.NewBar(1073);
        this.img02Tag = new egret.Bitmap;
        this.img02Tag.y = 1073 - 45;
        this.img02Tag.texture = Main.Instance.GetImg("_ui_bm_yun");
        this.addChild(this.img02Tag);
        this.img02W = this.SetBarValue(this.img02, 0, this.img02Tag);
        this.tipImg = new egret.Bitmap;
        this.tipImg.x = 35;
        this.tipImg.y = 720;
        this.addChild(this.tipImg);
        if (ServerUI.IsNewServer(Main.Instance.mConnectServerData.id)) {
            this._LoadTexture(0);
        }
        var label01 = new egret.TextField;
        label01.text = "首次加载时间稍长，请耐心等待";
        label01.strokeColor = 0x0B0C03;
        label01.stroke = 1;
        label01.size = 24;
        label01.x = -302;
        label01.y = 980;
        label01.width = 604;
        label01.verticalAlign = egret.VerticalAlign.MIDDLE;
        label01.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(label01);
        var label02 = new egret.TextField;
        label02.touchEnabled = true;
        label02.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClick, this);
        label02.text = "若长时间加载不成功，请点击刷新界面";
        label02.strokeColor = 0x0B0C03;
        label02.textColor = 0x25d921;
        label02.stroke = 1;
        label02.size = 24;
        label02.x = -302;
        label02.y = 1126;
        label02.width = 604;
        label02.verticalAlign = egret.VerticalAlign.MIDDLE;
        label02.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(label02);
        var label03 = this.label03 = new egret.TextField;
        label03.text = "";
        label03.strokeColor = 0x0B0C03;
        label03.stroke = 1;
        label03.size = 24;
        label03.x = -302;
        label03.y = 1156;
        label03.width = 604;
        label03.verticalAlign = egret.VerticalAlign.MIDDLE;
        label03.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(label03);
        this.preveTime = this.pt = egret.getTimer();
        this.mt = egret.getTimer();
        egret.startTick(this.Update, this);
        WindowData.StartLoading();
    };
    LoadingUI.prototype.SetBarValue = function (bar, value, tag) {
        if (value > 1) {
            value = 0;
        }
        else if (value < 0) {
            value = 0;
        }
        var thumbWidth = bar.width;
        var clipWidth = Math.round(value * thumbWidth);
        if (clipWidth < 0 || clipWidth === Infinity) {
            clipWidth = 0;
        }
        var rect = bar.$scrollRect;
        if (!rect) {
            rect = egret.$TempRectangle;
        }
        rect.setTo(0, 0, bar.width, bar.height);
        rect.width = clipWidth;
        bar.scrollRect = rect;
        tag.x = bar.x + clipWidth - 55;
        return value;
    };
    LoadingUI.prototype._LoadTexture = function (index) {
        RES.getResByUrl(this.m_Textures[index].path, this._Loaded, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype._Loaded = function (obj, name) {
        if (!obj) {
            return;
        }
        for (var i = 0; i < this.m_Textures.length; ++i) {
            if (this.m_Textures[i].path == name) {
                this.tipImg.texture = obj;
                break;
            }
        }
    };
    LoadingUI.prototype.Close = function () {
        egret.stopTick(this.Update, this);
        if (this.parent) {
            this.parent.removeChild(this);
            for (var _i = 0, _a = this.m_Textures; _i < _a.length; _i++) {
                var data = _a[_i];
                RES.destroyRes(data.path);
            }
        }
    };
    LoadingUI.prototype.Update = function (time) {
        var dt = time - this.pt;
        this.pt = time;
        this.t += dt;
        var value;
        if (this.t > this.et) {
            value = 1;
        }
        else {
            value = this.t / this.et;
        }
        this.img01W = this.SetBarValue(this.img01, this.s1 + (this.e1 - this.s1) * value, this.img01Tag);
        // this.img02W = this.SetBarValue(this.img02, this.s2 + (this.e2 - this.s2) * value)
        var t = (time - this.mt) % 2500;
        this.img02W = this.SetBarValue(this.img02, t / 2500, this.img02Tag);
        this._UpdatePro(value);
        // let x = this.img01Tag.x
        // if (x < this.tipx1) {
        // 	this.tipImg.x = this.tipx1
        // } else if (x > this.tipx2) {
        // 	this.tipImg.x = this.tipx2
        // } else {
        // 	this.tipImg.x = x
        // }
        return false;
    };
    LoadingUI.prototype._OnClick = function () {
        window.location.reload();
    };
    LoadingUI.prototype._UpdatePro = function (value) {
        if (this.str) {
            this.label03.text = this.str + " [" + Math.floor(value * 100) + "%]";
        }
        else {
            this.label03.text = "";
        }
    };
    LoadingUI.prototype.UpdateText = function (str, p1, p2, time) {
        this.str = str;
        this._UpdatePro(p2);
        this.t = 0;
        this.et = time;
        this.s1 = this.img01W;
        this.e1 = p1;
        if (this.e1 < this.s1) {
            this.e1 += 1;
        }
        this.s2 = this.img02W;
        this.e2 = p2;
        if (this.e2 < this.s2) {
            this.e2 += 1;
        }
        // console.log("--------------", this.e2, this.s2)
    };
    LoadingUI.prototype.SetText = function (str, p1, p2, time) {
        this.img02W = this.SetBarValue(this.img02, 0, this.img02Tag);
        this.UpdateText(str, p1, p2, time);
    };
    LoadingUI.prototype.onResize = function () {
        if (this.blackBg) {
            this.blackBg.x = -4 - (egret.MainContext.instance.stage.stageWidth >> 1);
            this.blackBg.y = -Main.Instance.mUIGroupYPos;
            this.blackBg.width = egret.MainContext.instance.stage.stageWidth * 1.2;
            this.blackBg.height = egret.MainContext.instance.stage.stageHeight * 1.2;
        }
        if (this.bg) {
            this.bg.y = -Main.Instance.mUIGroupYPos;
            this.bg.height = egret.MainContext.instance.stage.stageHeight;
            this.bg.width = this.bg.height / 1280 * 960;
            this.bg.x = -(this.bg.width) >> 1;
        }
    };
    LoadingUI.prototype.getElasticOut = function (t) {
        if (t == 0 || t == 1)
            return t;
        var s = 0.3 / 6.28 * 1.57;
        return (Math.pow(2, -10 * t) * Math.sin((t - s) * 6.28 / 0.3) + 1);
    };
    LoadingUI.prototype.sineOut = function (t) {
        return Math.sin(t * Math.PI / 2);
    };
    return LoadingUI;
}(egret.DisplayObjectContainer));
__reflect(LoadingUI.prototype, "LoadingUI");
//# sourceMappingURL=LoadingUI.js.map