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
var ServerUI = (function (_super) {
    __extends(ServerUI, _super);
    function ServerUI() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    ServerUI.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        //this.PlayerInfo = 
        this.bg = new egret.Bitmap();
        this.bg.alpha = 0.5;
        this.bg.x = -4;
        this.bg.y = -4;
        this.bg.texture = Main.Instance.GetImg("_ui_black");
        this.bg.scale9Grid = new egret.Rectangle(4, 4, 46, 46);
        this.bg.touchEnabled = true;
        this.addChild(this.bg);
        this.onResize();
        var b1 = new egret.Bitmap;
        b1.texture = Main.Instance.GetImg("_ui_sbm_001@120_120_120_120");
        b1.y = 101;
        b1.height = 1066;
        b1.width = 700;
        b1.x = -b1.width >> 1;
        b1.scale9Grid = new egret.Rectangle(123, 121, 25, 21);
        this.addChild(b1);
        var b9 = new egret.Bitmap;
        b9.texture = Main.Instance.GetImg("_ui_sbm_003@258_0_255_0");
        b9.scale9Grid = new egret.Rectangle(258, 0, 3, 79);
        b9.y = 95;
        b9.x = -317;
        b9.width = 621;
        this.addChild(b9);
        var b3 = new egret.Bitmap;
        b3.texture = Main.Instance.GetImg("_ui_sbm_002@20_9_20_9");
        b3.x = -323;
        b3.y = 189;
        b3.height = 842;
        b3.width = 217;
        b3.scale9Grid = new egret.Rectangle(21, 10, 1, 1);
        this.addChild(b3);
        var b2 = new egret.Bitmap;
        b2.texture = Main.Instance.GetImg("_ui_sbm_002@20_9_20_9");
        b2.x = -100;
        b2.y = 189;
        b2.height = 842;
        b2.width = 423;
        b2.scale9Grid = new egret.Rectangle(21, 10, 1, 1);
        this.addChild(b2);
        // let title = new egret.TextField
        // title.x = -246
        // title.y = 125
        // title.width = 463
        // title.height = 22
        // title.textAlign = egret.HorizontalAlign.CENTER
        // title.size = 22
        // title.textColor = 0xbfedfc
        // title.text = "选择服务器"
        var btitle = new egret.Bitmap;
        btitle.texture = Main.Instance.GetImg("_ui_cj_bm_fuwuqixuanzhe");
        btitle.x = -93;
        btitle.y = 115;
        this.addChild(btitle);
        var b5 = new egret.Bitmap;
        b5.touchEnabled = true;
        b5.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickClose, this);
        b5.texture = Main.Instance.GetImg("_ui_bt_008_up");
        b5.x = 282;
        b5.y = 91;
        this.addChild(b5);
        var b4 = new egret.Bitmap;
        b4.touchEnabled = true;
        b4.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickClose, this);
        b4.texture = Main.Instance.GetImg("_ui_bt_007_up");
        b4.x = 247;
        b4.y = 1052;
        this.addChild(b4);
        var rightScroll = new egret.ScrollView;
        rightScroll.x = b2.x;
        rightScroll.y = b2.y + 10;
        rightScroll.width = b2.width;
        rightScroll.height = b2.height - 20;
        this.addChild(rightScroll);
        this.m_RightScrollView = new ServerScrollView(rightScroll, ServerUIItem2, this._RightClick, this);
        var leftScroll = new egret.ScrollView;
        leftScroll = new egret.ScrollView;
        leftScroll.x = b3.x + 2;
        leftScroll.y = b3.y + 10;
        leftScroll.width = b3.width;
        leftScroll.height = b3.height - 20;
        this.addChild(leftScroll);
        this.m_LeftScrollView = new ServerScrollView(leftScroll, ServerUIItem1, this._LeftClick, this);
        this.m_LeftScrollView.SetDatas(GameServerData.PageData);
        this.m_LeftScrollView.SelectIndex(0);
        GameServerData.Callback = this.DoServerData;
        GameServerData.ThisObject = this;
    };
    ServerUI.prototype.DoServerData = function (page) {
        var data = GameServerData.PageData[this.m_LeftScrollView.GetSelectIndex()];
        if (data.index == page) {
            this.m_RightScrollView.SetDatas(data.datas);
        }
    };
    ServerUI.prototype.Close = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        GameServerData.Callback = null;
        GameServerData.ThisObject = null;
    };
    ServerUI.prototype._LeftClick = function (index) {
        if (index != 0) {
            GameServerData.GetPageData(GameServerData.PageData[index].index);
        }
        this.m_RightScrollView.SetDatas(GameServerData.PageData[index].datas);
    };
    ServerUI.prototype._RightClick = function (index) {
        var data = this.m_RightScrollView.GetData(index);
        var recent = GameServerData.PageData[0].datas;
        for (var i = 0, len = recent.length; i < len; ++i) {
            if (recent[i].id == data.id) {
                Main.Instance.StartLoadGame(data);
                return;
            }
        }
        Main.Instance.ShowCreateUI(data);
    };
    ServerUI.IsNewServer = function (serverId) {
        var recent = GameServerData.PageData[0].datas;
        for (var i = 0, len = recent.length; i < len; ++i) {
            if (recent[i].id == serverId) {
                return false;
            }
        }
        return true;
    };
    ServerUI.prototype._OnClickClose = function () {
        this.Close();
    };
    ServerUI.prototype.onResize = function () {
        if (this.bg) {
            this.bg.x = -4 - (egret.MainContext.instance.stage.stageWidth >> 1);
            this.bg.y = -Main.Instance.mUIGroupYPos;
            this.bg.width = egret.MainContext.instance.stage.stageWidth * 1.2;
            this.bg.height = egret.MainContext.instance.stage.stageHeight * 1.2;
        }
    };
    ServerUI.COLOR = 0x6b300a;
    return ServerUI;
}(egret.DisplayObjectContainer));
__reflect(ServerUI.prototype, "ServerUI");
var ServerScrollView = (function () {
    function ServerScrollView(scrollView, itemCls, clickFunc, thisObject) {
        // private m_List: ServerUIItem1[] = []
        this.m_CacheList = [];
        this.m_Datas = [];
        this.m_Index = -1;
        this.m_ScrollView = scrollView;
        this.m_Click = clickFunc;
        this.m_ThisObject = thisObject;
        this.m_ScrollView.addEventListener(egret.Event.CHANGE, this.OnChange, this);
        this.m_ItemCls = itemCls;
        this.m_Group = new ServerGroup;
        this.m_Group.width = scrollView.width;
        this.m_Group.height = scrollView.height;
        scrollView.setContent(this.m_Group);
    }
    ServerScrollView.prototype.GetItme = function () {
        var item = this.m_CacheList.pop() || new this.m_ItemCls;
        return item;
    };
    ServerScrollView.prototype.OnChange = function () {
        var top = this.m_ScrollView.scrollTop;
        var bottom = top + this.m_ScrollView.height;
        var itemHeight = this.m_ItemCls.Height;
        for (var i = 0; i < this.m_Group.numChildren;) {
            var child = this.m_Group.getChildAt(i);
            if (child.y < top - itemHeight || child.itemIndex >= this.m_Datas.length) {
                this.m_Group.removeChildAt(i);
                this.m_CacheList.push(child);
            }
            else {
                break;
            }
        }
        for (var i = this.m_Group.numChildren - 1; i >= 0; --i) {
            var child = this.m_Group.getChildAt(i);
            if (child.y > bottom || child.itemIndex >= this.m_Datas.length) {
                this.m_Group.removeChildAt(i);
                this.m_CacheList.push(child);
            }
            else {
                break;
            }
        }
        while (true) {
            var first = this.m_Group.$children[0];
            if (first == null) {
                if (!this._AddItem(0, -1)) {
                    break;
                }
            }
            else if (first.y >= top) {
                if (!this._AddItem(first.itemIndex - 1, -1)) {
                    break;
                }
            }
            else {
                break;
            }
        }
        while (true) {
            var last = this.m_Group.$children[this.m_Group.numChildren - 1];
            if (last == null) {
                break;
            }
            if (last.y <= top + this.m_ScrollView.height - itemHeight) {
                if (!this._AddItem(last.itemIndex + 1, 1)) {
                    break;
                }
            }
            else {
                break;
            }
        }
    };
    ServerScrollView.prototype._ItemClick = function (e) {
        var target = e.target;
        this.SelectIndex(target.itemIndex);
    };
    ServerScrollView.prototype.GetSelectIndex = function () {
        return this.m_Index;
    };
    ServerScrollView.prototype.SelectIndex = function (index) {
        // if (index == this.m_Index) {
        // 	return
        // }
        this.m_Index = index;
        for (var i = 0; i < this.m_Group.numChildren; ++i) {
            var child = this.m_Group.getChildAt(i);
            if (child.light) {
                child.light.visible = index == child.itemIndex;
            }
        }
        if (this.m_Click && this.m_ThisObject) {
            this.m_Click.call(this.m_ThisObject, index);
        }
    };
    ServerScrollView.prototype._AddItem = function (index, forward) {
        if (this.m_Datas[index] == null) {
            return false;
        }
        var item = this.GetItme();
        item.addEventListener(egret.TouchEvent.TOUCH_TAP, this._ItemClick, this);
        item.itemIndex = index;
        item.y = this.m_ItemCls.Height * index;
        item.SetData(this.m_Datas[index]);
        if (forward == -1) {
            this.m_Group.addChildAt(item, 0);
        }
        else {
            this.m_Group.addChild(item);
        }
        return true;
    };
    ServerScrollView.prototype.GetData = function (index) {
        return this.m_Datas[index];
    };
    ServerScrollView.prototype.SetDatas = function (datas) {
        this.m_Datas = datas;
        this.m_Group.height = datas.length * this.m_ItemCls.Height;
        if (this.m_ScrollView.scrollTop == 0) {
            this.OnChange();
        }
        else {
            this.m_ScrollView.scrollTop = 0;
        }
        for (var i = 0; i < this.m_Group.numChildren; ++i) {
            this.m_Group.getChildAt(i).SetData(datas[i]);
        }
    };
    return ServerScrollView;
}());
__reflect(ServerScrollView.prototype, "ServerScrollView");
var ServerGroup = (function (_super) {
    __extends(ServerGroup, _super);
    function ServerGroup() {
        var _this = _super.call(this) || this;
        _this.touchEnabled = true;
        return _this;
    }
    ServerGroup.prototype.$hitTest = function (stageX, stageY) {
        var target = _super.prototype.$hitTest.call(this, stageX, stageY);
        if (target) {
            return target;
        }
        if (!this.$visible || !this.touchEnabled) {
            return null;
        }
        var point = this.globalToLocal(stageX, stageY, egret.$TempPoint);
        var bounds = egret.$TempRectangle.setTo(0, 0, this.width, this.height);
        var scrollRect = this.$scrollRect;
        if (scrollRect) {
            bounds.x = scrollRect.x;
            bounds.y = scrollRect.y;
        }
        if (bounds.contains(point.x, point.y)) {
            return this;
        }
        return null;
    };
    return ServerGroup;
}(egret.DisplayObjectContainer));
__reflect(ServerGroup.prototype, "ServerGroup");
var ServerUIItem1 = (function (_super) {
    __extends(ServerUIItem1, _super);
    function ServerUIItem1() {
        var _this = _super.call(this) || this;
        _this.touchEnabled = true;
        _this.touchChildren = false;
        _this.width = ServerUIItem1.Width;
        _this.height = ServerUIItem1.Height;
        var bitmap = new egret.Bitmap;
        bitmap.touchEnabled = false;
        bitmap.texture = Main.Instance.GetImg("_ui_bt_fuwuqi02");
        bitmap.x = (_this.width - bitmap.width) >> 1;
        bitmap.y = (_this.height - bitmap.height) >> 1;
        _this.addChild(bitmap);
        var bitmap2 = _this.light = new egret.Bitmap;
        bitmap2.touchEnabled = false;
        bitmap2.texture = Main.Instance.GetImg("_ui_bt_fuwuqi0");
        bitmap2.x = (_this.width - bitmap2.width) >> 1;
        bitmap2.y = (_this.height - bitmap2.height) >> 1;
        _this.addChild(bitmap2);
        // let bitmap2 = this.light = new egret.Bitmap
        // this.light.visible = false
        // bitmap2.touchEnabled = false
        // bitmap2.width = 211
        // bitmap2.height = 72
        // bitmap2.scale9Grid = new egret.Rectangle(15, 12, 28, 26)
        // bitmap2.texture = Main.Instance.GetImg("_ui_cjjs_p@22_22_22_22")
        // bitmap2.x = (this.width - bitmap2.width) >> 1
        // bitmap2.y = (this.height - bitmap2.height) >> 1
        // this.addChild(bitmap2)
        _this.label = new egret.TextField;
        _this.label.touchEnabled = false;
        _this.label.size = 30;
        _this.label.textColor = ServerUI.COLOR;
        _this.label.width = bitmap.width;
        _this.label.height = bitmap.height;
        _this.label.x = bitmap.x;
        _this.label.y = bitmap.y;
        _this.label.textAlign = egret.HorizontalAlign.CENTER;
        _this.label.verticalAlign = egret.VerticalAlign.MIDDLE;
        _this.addChild(_this.label);
        return _this;
    }
    ServerUIItem1.prototype.SetData = function (data) {
        this.label.text = data.name;
    };
    ServerUIItem1.Width = 215;
    ServerUIItem1.Height = 70 + 10;
    return ServerUIItem1;
}(egret.DisplayObjectContainer));
__reflect(ServerUIItem1.prototype, "ServerUIItem1");
var ServerUIItem2 = (function (_super) {
    __extends(ServerUIItem2, _super);
    function ServerUIItem2() {
        var _this = _super.call(this) || this;
        _this.touchEnabled = true;
        _this.touchChildren = false;
        _this.width = ServerUIItem2.Width;
        _this.height = ServerUIItem2.Height;
        var bitmap = new egret.Bitmap;
        bitmap.touchEnabled = false;
        bitmap.texture = Main.Instance.GetImg("_ui_bm_fuwuqibg@60_54_58_58");
        bitmap.width = ServerUIItem2.Width - 20;
        bitmap.height = ServerUIItem2.Height - 10;
        bitmap.scale9Grid = new egret.Rectangle(60, 54, 3, 3);
        bitmap.x = (_this.width - bitmap.width) >> 1;
        bitmap.y = (_this.height - bitmap.height) >> 1;
        _this.addChild(bitmap);
        _this.label = new egret.TextField;
        _this.label.touchEnabled = false;
        _this.label.size = 30;
        _this.label.textColor = ServerUI.COLOR;
        _this.label.height = bitmap.height;
        _this.label.x = 80;
        _this.label.y = bitmap.y;
        _this.label.verticalAlign = egret.VerticalAlign.MIDDLE;
        _this.addChild(_this.label);
        _this.flagImg = new egret.Bitmap;
        _this.flagImg.touchEnabled = false;
        _this.addChild(_this.flagImg);
        _this.hotImg = new egret.Bitmap;
        _this.hotImg.touchEnabled = false;
        _this.hotImg.x = 30;
        _this.hotImg.y = 50;
        _this.addChild(_this.hotImg);
        _this.headImg = new egret.Bitmap;
        _this.headImg.touchEnabled = false;
        _this.headImg.width = 81;
        _this.headImg.height = 81;
        _this.headImg.x = 305;
        _this.headImg.y = 15;
        _this.headImg.texture = Main.Instance.GetImg("_ui_bm_touxiangkuang02");
        _this.headImg.visible = false;
        _this.addChild(_this.headImg);
        _this.playername = new egret.TextField;
        _this.playername.touchEnabled = false;
        _this.playername.size = 18;
        _this.playername.textColor = ServerUI.COLOR;
        _this.playername.height = bitmap.height;
        _this.playername.x = 300;
        _this.playername.y = bitmap.y + 100;
        _this.playername.width = 92;
        _this.playername.textAlign = egret.HorizontalAlign.CENTER;
        _this.addChild(_this.playername);
        _this.kuangImg = new egret.Bitmap;
        _this.kuangImg.texture = Main.Instance.GetImg("_ui_bm_touxiangkuang");
        _this.kuangImg.width = 92;
        _this.kuangImg.height = 92;
        _this.kuangImg.x = 300;
        _this.kuangImg.y = 10;
        _this.kuangImg.visible = false;
        _this.addChild(_this.kuangImg);
        return _this;
    }
    ServerUIItem2.prototype.SetData = function (data) {
        this.Desc = data;
        this.label.text = data.name;
        var status = data.GetStatus();
        this.flagImg.x = 11;
        this.flagImg.y = 6;
        this.flagImg.visible = true;
        if (status) {
            // this.flagImg.texture = Main.Instance.GetImg(status == 1 ? "_ui_bm_xin" : "_ui_bm_weihuzhong")
            this.flagImg.texture = Main.Instance.GetImg(status == 1 ? "_ui_bm_xin" : "_ui_bm_hot");
            this.hotImg.texture = Main.Instance.GetImg("_ui_icon_tongchang");
            // this.flagImg.x = 11
            // this.flagImg.y = 6
            // this.flagImg.visible = true
        }
        else {
            this.flagImg.texture = Main.Instance.GetImg("_ui_bm_weihuzhong");
            this.hotImg.texture = Main.Instance.GetImg("_ui_icon_weihu");
            // this.flagImg.visible = false
        }
        this.SetHeadData();
    };
    ServerUIItem2.prototype.SetHeadData = function () {
        var addr = this.Desc.ip;
        var datas = Main.Instance.playerServerData.data.recent;
        var hasData = false;
        for (var i = 0; i < datas.length; i++) {
            var data = datas[i];
            if (addr == data.addr) {
                var job = data.job || 1;
                var sex = data.sex || 0;
                this.headImg.texture = Main.Instance.GetImg("head" + job + sex);
                this.playername.text = data.name;
                this.kuangImg.visible = true;
                this.headImg.visible = true;
                hasData = true;
                break;
            }
        }
        if (!hasData) {
            this.kuangImg.visible = false;
            this.headImg.visible = false;
            this.playername.text = "";
        }
    };
    ServerUIItem2.Width = 423;
    ServerUIItem2.Height = 121 + 10;
    return ServerUIItem2;
}(egret.DisplayObjectContainer));
__reflect(ServerUIItem2.prototype, "ServerUIItem2");
//# sourceMappingURL=ServerUI.js.map