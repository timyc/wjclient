//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        // 登录界面
        _this.mLoadResGroup01 = {};
        // 创建角色
        _this.mLoadResGroup02 = {
            "_ui_cjjs_bm_ditu": "resource/assets/game_start/_ui_cjjs_bm_ditu.jpg",
        };
        _this.mLoadResGroup03 = {
            "_notice_res": "resource/assets/game_start/_notice_res.json",
        };
        _this.mLoadResGroup04 = {
            "_notice_res": "resource/assets/game_start/_notice_res.json",
        };
        // loading
        _this.mLoadResGroup05 = {
            "ui_xzfwq_p_show": "resource/assets/game_start/ui_xzfwq_p_show.jpg",
        };
        _this.m_CurLoadGroup = [];
        _this.m_NextStepType = -1;
        _this.m_TimeOutId = null;
        _this.mUIGroupYPos = 0;
        _this.m_HasLoading = true;
        _this.m_ConCallback = null;
        _this.m_CreateRolViewData = [CreateRoleUI, "CreateRoleUI"];
        Main.Instance = _this;
        if (WindowData._GetStartResAddr()) {
            var resUrl_1 = WindowData._GetStartResAddr();
            RES.web.Html5VersionController.prototype.getVirtualUrl = function (url) {
                if (url.indexOf("http") != -1) {
                    return url;
                }
                return resUrl_1 + url;
            };
        }
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.$GetThmPath = function (str, thmId) {
        if (thmId) {
            var array = str.split("game_start");
            return array[0] + "game_start/thm" + thmId + array[1];
        }
        return str;
    };
    Main.prototype.onAddToStage = function (event) {
        var _this = this;
        egret.TextField.default_fontFamily = "SimHei,SimSun,Arial";
        egret.DisplayObject.defaultTouchEnabled = false;
        egret.ImageLoader.crossOrigin = "anonymous";
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.m_UIGroup = new egret.DisplayObjectContainer;
        if (WindowData._GetBGImg()) {
            this.m_BGImg = new egret.Bitmap;
            this.m_UIGroup.addChild(this.m_BGImg);
            this._LoadGroup((_a = {}, _a["__BG_IMG__"] = WindowData._GetBGImg(), _a));
        }
        this.m_UIGroup.width = 0;
        this.m_UIGroup.height = 0;
        this.addChild(this.m_UIGroup);
        this.onResize();
        // egret.lifecycle.addLifecycleListener((context) => {
        //     // custom lifecycle plugin
        //     context.onUpdate = () => {
        //         console.log('hello,world')
        //     }
        // })
        // egret.lifecycle.onPause = () => {
        //     egret.ticker.pause();
        // }
        // egret.lifecycle.onResume = () => {
        //     egret.ticker.resume();
        // }
        this._LoadSheet("resource/assets/game_start/_start_res2.json");
        if (WindowData._DirectLogin()) {
            window["_LoginToken"](function (token, infostr) {
                _this.mToken = token;
                // egret.setTimeout(() => {
                //    console.log(infostr)
                _this._DoParsePlayerServerInfo(infostr);
                // }, this, 1)
            });
        }
        else {
            window["_LoginToken"](function (token) {
                _this.mToken = token;
                HttpHelper.GetPlayerServerInfo(token, _this._DoGetPlayerServerInfo, _this);
            });
        }
        var _a;
    };
    Main.prototype._DoGetPlayerServerInfo = function (event) {
        var request = event.currentTarget;
        return this._DoParsePlayerServerInfo(request.response);
    };
    Main.prototype._DoParsePlayerServerInfo = function (infostr) {
        var jsonObj = JSON.parse(infostr);
        if (jsonObj.result != 1) {
            alert(jsonObj.result_msg);
            return;
        }
        var Default = function (obj) {
            if (!obj) {
                return [];
            }
            for (var key in obj) {
                return obj;
            }
            return [];
        };
        var playerInfo = jsonObj.data.player;
        this.UserName = playerInfo.username;
        this.GmLevel = playerInfo.gm_level;
        this.lid = playerInfo.lid;
        this.playerServerData = jsonObj;
        this.NoticeStatus = jsonObj.data.ns;
        var recent_serverids = Default(jsonObj.data.recent);
        recent_serverids.sort(function (lhs, rhs) {
            return rhs.time - lhs.time;
        });
        var recentList = [];
        for (var _i = 0, recent_serverids_1 = recent_serverids; _i < recent_serverids_1.length; _i++) {
            var data = recent_serverids_1[_i];
            var descData = GameServerDescData.Get(data, true);
            if (!descData) {
                continue;
            }
            recentList.push(descData);
        }
        var lastList = [];
        var last_page = Default(jsonObj.data.lpage);
        last_page.sort(function (lhs, rhs) {
            return rhs.sid - lhs.sid;
        });
        for (var _a = 0, last_page_1 = last_page; _a < last_page_1.length; _a++) {
            var data = last_page_1[_a];
            var descData = GameServerDescData.Get(data);
            if (!descData) {
                continue;
            }
            lastList.push(descData);
        }
        GameServerData.Init(jsonObj.data.maxid, recentList, lastList);
        // 如果没有最近登陆的列表，就给一个最近的服务器，直接进入游戏
        if (GameServerData.PageData[0].datas.length == 0) {
            var lastList_1 = GameServerData.PageData[1].datas;
            for (var i = 0; i < lastList_1.length; ++i) {
                var data = lastList_1[i];
                if (data.CanEnter()) {
                    HttpHelper.SendPoint(4);
                    this.m_CreateRoleData = data;
                    this._LoadGroup(this.mLoadResGroup02);
                    this._SetNextStep(2);
                    return;
                }
            }
            console.log("没有可以创建角色的服务器");
        }
        this._LoadGroup(this.mLoadResGroup01);
        this._SetNextStep(1);
    };
    Main.prototype._SetNextStep = function (step) {
        this.DoShowLoadingImg();
        this.m_NextStepType = step;
        this._CreateScene();
    };
    Main.prototype._LoadSheet = function (jsonName) {
        this.m_CurLoadGroup.push(jsonName);
        RES.getResByUrl(jsonName, this._OnLoadItem, this, RES.ResourceItem.TYPE_SHEET);
    };
    Main.prototype._LoadGroup = function (group) {
        for (var key in group) {
            this.m_CurLoadGroup.push(group[key]);
        }
        for (var key in group) {
            var resName = group[key];
            if (resName.indexOf(".json") != -1) {
                RES.getResByUrl(resName, this._OnLoadItem, this, RES.ResourceItem.TYPE_SHEET);
            }
            else {
                RES.getResByUrl(resName, this._OnLoadItem, this, RES.ResourceItem.TYPE_IMAGE);
            }
        }
    };
    Main.prototype._CheckUI = function (name) {
        if (this.m_CurLoadGroup.length > 0 || this.m_NextStepType != -1) {
            return false;
        }
        for (var _i = 0, _a = this.$children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (egret.is(child, name)) {
                return false;
            }
        }
        return true;
    };
    Main.prototype.ShowServerUI = function () {
        if (!this._CheckUI("ServerUI")) {
            return;
        }
        this._LoadGroup(this.mLoadResGroup03);
        this._SetNextStep(3);
    };
    Main.prototype.ShowNoticeUI = function () {
        if (!this._CheckUI("NoticeUI")) {
            return;
        }
        this._LoadGroup(this.mLoadResGroup04);
        this._SetNextStep(4);
    };
    Main.prototype.ShowCreateUI = function (data) {
        if (!this._CheckServerState(data)) {
            return;
        }
        if (!this._CheckUI(this.m_CreateRolViewData[1])) {
            return;
        }
        this.m_CreateRoleData = data;
        this._LoadGroup(this.mLoadResGroup02);
        this._SetNextStep(2);
    };
    Main.prototype.UpdateLoadingUI = function (isUpdate, str, p1, p2, time) {
        for (var i = this.m_UIGroup.numChildren - 1; i >= 0; --i) {
            var child = this.m_UIGroup.getChildAt(i);
            if (egret.is(child, "LoadingUI")) {
                if (isUpdate) {
                    child.UpdateText(str, p1, p2, time);
                }
                else {
                    child.SetText(str, p1, p2, time);
                }
                break;
            }
        }
    };
    Main.prototype.ShowLoadingUI = function () {
        if (!this._CheckUI("LoadingUI")) {
            return;
        }
        this._LoadGroup(this.mLoadResGroup05);
        this._SetNextStep(5);
    };
    Main.prototype.DoShowLoadingImg = function () {
        if (this.m_TimeOutId) {
            egret.clearTimeout(this.m_TimeOutId);
            this.m_TimeOutId = null;
        }
        this.m_TimeOutId = egret.setTimeout(this.ShowLoadingImg, this, 1000);
    };
    Main.prototype.ShowLoadingImg = function () {
        if (this.m_LoadingImg == null) {
            this.m_LoadingImg = new egret.Bitmap;
            this.m_LoadingImg.texture = this.GetImg("_start_load_Reel");
            this.m_LoadingImg.anchorOffsetX = this.m_LoadingImg.width >> 1;
            this.m_LoadingImg.anchorOffsetY = this.m_LoadingImg.height >> 1;
            this.onResize();
        }
        if (this.m_LoadingImg.parent) {
            this.m_LoadingImg.parent.removeChild(this.m_LoadingImg);
        }
        egret.stopTick(this.UpdateLoadingImgAnim, this);
        egret.startTick(this.UpdateLoadingImgAnim, this);
        this.m_UIGroup.addChild(this.m_LoadingImg);
    };
    Main.prototype.UpdateLoadingImgAnim = function (timeStamp) {
        if (this.m_LoadingImg) {
            this.m_LoadingImg.rotation = Math.floor(timeStamp * 0.5) % 360;
        }
        return false;
    };
    Main.prototype.HideLoadingImg = function () {
        egret.stopTick(this.UpdateLoadingImgAnim, this);
        if (this.m_TimeOutId) {
            egret.clearTimeout(this.m_TimeOutId);
            this.m_TimeOutId = null;
        }
        if (!this.m_LoadingImg) {
            return;
        }
        if (this.m_LoadingImg.parent) {
            this.m_LoadingImg.parent.removeChild(this.m_LoadingImg);
        }
    };
    Main.prototype.onResize = function () {
        if (this.m_LoadingImg) {
            this.m_LoadingImg.y = egret.MainContext.instance.stage.stageHeight >> 1;
        }
        this.m_UIGroup.x = egret.MainContext.instance.stage.stageWidth >> 1;
        this.m_UIGroup.y = (egret.MainContext.instance.stage.stageHeight - 1280) >> 1;
        this.mUIGroupYPos = this.m_UIGroup.y;
        for (var i = this.m_UIGroup.numChildren - 1; i >= 0; --i) {
            var child = this.m_UIGroup.getChildAt(i);
            if (child["onResize"]) {
                child["onResize"]();
            }
        }
    };
    Main.prototype._CloseView = function (view) {
        try {
            if (view.Close) {
                view.Close();
            }
            else {
                console.log("not close func " + view);
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    Main.prototype.ShowGame = function () {
        if (!this.m_HasLoading) {
            return;
        }
        this.m_HasLoading = null;
        this.HideLoadingImg();
        this.m_LoadingImg = null;
        for (var i = this.m_UIGroup.numChildren - 1; i >= 0; --i) {
            var child = this.m_UIGroup.getChildAt(i);
            if (egret.is(child, "LoadingUI")) {
            }
            this._CloseView(child);
        }
        for (var key in this.mLoadResGroup01) {
            RES.destroyRes(this.mLoadResGroup01[key]);
        }
        for (var key in this.mLoadResGroup02) {
            RES.destroyRes(this.mLoadResGroup02[key]);
        }
        for (var key in this.mLoadResGroup03) {
            RES.destroyRes(this.mLoadResGroup03[key]);
        }
        for (var key in this.mLoadResGroup04) {
            RES.destroyRes(this.mLoadResGroup04[key]);
        }
        for (var key in this.mLoadResGroup05) {
            RES.destroyRes(this.mLoadResGroup05[key]);
        }
        if (WindowData._GetBGImg()) {
            if (RES.destroyRes(WindowData._GetBGImg())) {
                console.log("destroy res => " + WindowData._GetBGImg());
            }
        }
    };
    Main.prototype._CheckServerState = function (serverData) {
        if (!serverData) {
            alert("服务器数据为空，请重新登录！！！");
            return false;
        }
        if (!serverData.version) {
            alert("服务器正在维护，请稍后重试！！！");
            return false;
        }
        if ((serverData.status == 0 || serverData.status > 2) && !this.GmLevel) {
            alert("服务器维护中，请稍后重试！！！");
            return false;
        }
        return true;
    };
    Main.prototype.ConnectServer = function (serverData, callback) {
        if (!this._CheckServerState(serverData)) {
            return;
        }
        var state = Socket.ins().GetSocketState();
        if (state == Socket.STATUS_CONNECTING) {
            console.log("正在连接");
            return;
        }
        if (state == Socket.STATUS_CHECKING) {
            console.log("连接成功");
            if (callback) {
                callback();
            }
            else {
                console.log("not callback func !");
            }
            return;
        }
        this.DoShowLoadingImg();
        this.mConnectServerData = serverData;
        var arr = serverData.ip.split(":");
        var host = arr[0];
        var port = arr[1];
        this.m_ConCallback = callback;
        Socket.ins().UpdateStateEvent = this.SocketUpdateState.bind(this);
        Socket.ins().connect(host, Number(port));
    };
    Main.prototype.StartLoadGame = function (serverData) {
        var _this = this;
        this.ConnectServer(serverData, function () {
            _this.ShowLoadingUI();
        });
    };
    Main.prototype._ClearConData = function () {
        this.HideLoadingImg();
        Socket.ins().UpdateStateEvent = null;
        this.m_ConCallback = null;
    };
    Main.prototype.SocketUpdateState = function (state) {
        if (state == Socket.STATUS_CHECKING) {
            var func = this.m_ConCallback;
            this._ClearConData();
            if (func) {
                func();
            }
            else {
                console.log("not callback func !!!");
            }
        }
        else if (state == Socket.STATUS_DISCONNECT) {
            this._ClearConData();
        }
    };
    Main.prototype.GetImg = function (name) {
        return RES.getAnalyzer(RES.ResourceItem.TYPE_SHEET).getRes(name);
    };
    Main.prototype.GetSingleImg = function (name) {
        var url = this.mLoadResGroup02[name];
        if (!url) {
            url = this.mLoadResGroup05[name];
        }
        if (!url) {
            console.error("not name " + name);
        }
        return RES.getAnalyzer(RES.ResourceItem.TYPE_IMAGE).getRes(url);
    };
    Main.prototype._OnLoadItem = function (obj, name) {
        for (var i = 0, len = this.m_CurLoadGroup.length; i < len; ++i) {
            if (this.m_CurLoadGroup[i] == name) {
                this.m_CurLoadGroup.splice(i, 1);
                break;
            }
        }
        console.log("loaded => " + name);
        if (this.m_BGImg && name == WindowData._GetBGImg()) {
            if (obj) {
                this.m_BGImg.texture = obj;
                this.m_BGImg.x = -(obj.textureWidth >> 1);
            }
        }
        if (this.m_CurLoadGroup.length > 0) {
            return;
        }
        this._CreateScene();
    };
    Main.prototype._CreateScene = function () {
        if (this.m_CurLoadGroup.length > 0) {
            return;
        }
        if (WindowData._GetStartType() == 1) {
            if (window["__RemoveLoading"]) {
                window["__RemoveLoading"]();
            }
            if (this.m_NextStepType < 1) {
                return;
            }
        }
        else {
            if (this.m_NextStepType < 1) {
                return;
            }
            if (window["__RemoveLoading"]) {
                window["__RemoveLoading"]();
            }
        }
        var nextType = this.m_NextStepType;
        this.m_NextStepType = -1;
        this.CreateGameScene(nextType);
    };
    /**
     * 创建游戏场景
     */
    Main.prototype.CreateGameScene = function (nextType) {
        if (nextType == 1) {
            this.m_UIGroup.addChild(new LoginUI);
        }
        else if (nextType == 2) {
            if (this.m_CreateRoleData == null) {
                console.error("not server data create");
            }
            else {
                var data = this.m_CreateRoleData;
                this.m_CreateRoleData = null;
                var cls = this.m_CreateRolViewData[0];
                this.m_UIGroup.addChild(new cls(data));
                WindowData.RemoveBg();
                for (var i = this.m_UIGroup.numChildren - 1; i >= 0; --i) {
                    var child = this.m_UIGroup.getChildAt(i);
                    if (!egret.is(child, this.m_CreateRolViewData[1])) {
                        this._CloseView(child);
                    }
                }
            }
        }
        else if (nextType == 3) {
            this.m_UIGroup.addChild(new ServerUI);
        }
        else if (nextType == 4) {
            this.m_UIGroup.addChild(new NoticeUI);
        }
        else if (nextType == 5) {
            this.m_UIGroup.addChild(new LoadingUI);
            WindowData.RemoveBg();
            for (var i = this.m_UIGroup.numChildren - 1; i >= 0; --i) {
                var child = this.m_UIGroup.getChildAt(i);
                if (!egret.is(child, "LoadingUI")) {
                    this._CloseView(child);
                }
            }
        }
        this.HideLoadingImg();
    };
    Main.closesocket = function () {
        var ins = Socket._ins;
        if (!ins) {
            return;
        }
        ins.close();
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
var TestScreenAdapter = (function (_super) {
    __extends(TestScreenAdapter, _super);
    function TestScreenAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @private
     * 计算舞台显示尺寸
     * @param scaleMode 当前的缩放模式
     * @param screenWidth 播放器视口宽度
     * @param screenHeight 播放器视口高度
     * @param contentWidth 初始化内容宽度
     * @param contentHeight 初始化内容高度
     */
    TestScreenAdapter.prototype.calculateStageSize = function (scaleMode, screenWidth, screenHeight, contentWidth, contentHeight) {
        contentWidth = 720;
        contentHeight = 1280;
        var displayWidth = screenWidth;
        var displayHeight = screenHeight;
        var stageWidth = contentWidth;
        var stageHeight = contentHeight;
        var scaleX = (screenWidth / stageWidth) || 0;
        var scaleY = (screenHeight / stageHeight) || 0;
        var HEIGHT = 1280;
        var WIDTH = 720;
        var ratio = screenWidth / screenHeight;
        var rotio1 = 3 / 4;
        var rotio2 = 18 / 16;
        if (ratio > rotio1) {
            contentWidth = Math.round(HEIGHT * rotio1);
            stageWidth = contentWidth;
            displayWidth = Math.round(contentWidth * scaleY);
        }
        else if (ratio < 9 / 18) {
            contentHeight = Math.round(WIDTH * 18 / 9);
            stageHeight = contentHeight;
            displayHeight = Math.round(contentHeight * scaleX);
        }
        else if (ratio < 9 / 16) {
            contentHeight = Math.round(WIDTH / ratio);
            stageHeight = contentHeight;
            displayHeight = Math.round(contentHeight * scaleX);
        }
        else {
            stageWidth = Math.round(screenWidth / scaleY);
        }
        //宽高不是2的整数倍会导致图片绘制出现问题
        if (displayWidth % 2 != 0) {
            displayWidth += 1;
        }
        if (displayHeight % 2 != 0) {
            displayHeight += 1;
        }
        // egret.sys.DisplayList.$canvasScaleFactor = stageHeight / displayHeight
        return {
            stageWidth: stageWidth,
            stageHeight: stageHeight,
            displayWidth: displayWidth,
            displayHeight: displayHeight
        };
    };
    return TestScreenAdapter;
}(egret.HashObject));
__reflect(TestScreenAdapter.prototype, "TestScreenAdapter", ["egret.sys.IScreenAdapter"]);
egret.sys.screenAdapter = new TestScreenAdapter;
//# sourceMappingURL=Main.js.map