var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WindowData = (function () {
    function WindowData() {
    }
    WindowData.ShowFps = function () {
        if (this.m_IsShow) {
            return;
        }
        this.m_IsShow = true;
        try {
            document.querySelectorAll(".egret-player")[0]["egret-player"].player.displayFPS(true, false, null, { x: 0, y: 0, size: 12, textColor: "0xffffff", bgAlpha: 0.2 });
        }
        catch (e) {
        }
    };
    WindowData._LoginToken = function (callback) {
        window["_LoginToken"](callback);
    };
    WindowData._GetServerAddr = function () {
        if (WindowData.IsHttps()) {
            return "https://" + WindowData._GetCenterAddr() + ":" + WindowData.HttpsPort();
        }
        return "http://" + WindowData._GetCenterAddr() + ":" + WindowData.HttpPort();
    };
    WindowData._GetBGImg = function () {
        return window["__CONFIG__"]["__LOING_BG__"] || "";
    };
    WindowData._GetStartType = function () {
        return window["__CONFIG__"]["__START_TYPE__"] || 0;
    };
    WindowData._GetCenterAddr = function () {
        return window["__CONFIG__"]["__SER_URL__"];
    };
    WindowData._GetResAddr = function () {
        return window["__CONFIG__"]["__RES_URL__"];
    };
    WindowData._GetStartResAddr = function () {
        return window["__CONFIG__"]["__START_RES__"];
    };
    WindowData._GetPlatformId = function () {
        return window["__CONFIG__"]["__PLATFORM_ID__"];
    };
    WindowData._MainCls = function () {
        return window["__CONFIG__"]["__MAIN_CLS__"] || "StartMain";
    };
    WindowData._DirectLogin = function () {
        return window["__CONFIG__"]["__DIRECT_LOGIN__"];
    };
    // public static _WssUrl(): string {
    // 	return window["__CONFIG__"]["__WSS_URL__"]
    // }
    WindowData._GetServerName = function (serverId) {
        var func = window["__CONFIG__"]["__ServerNameFunc__"];
        if (func) {
            var name_1 = func(serverId);
            if (name_1) {
                return name_1;
            }
        }
        return "\u53CC\u7EBF" + serverId + "\u670D";
    };
    WindowData.HasClientConfig = function (index) {
        return this.Has(window["__CONFIG__"]["__CLIENT_CONFIG__"] || 0, index);
    };
    WindowData.StartLoading = function () {
        var func = window["__StartLoading"];
        if (func) {
            func();
        }
    };
    WindowData.RemoveBg = function () {
        var func = window["__RemoveBg"];
        if (func) {
            func();
        }
    };
    WindowData.IsHttps = function () {
        if ("https:" == location.href.substr(0, 6)) {
            return true;
        }
        else {
            return false;
        }
    };
    WindowData.HttpsPort = function () {
        var port = window["__CONFIG__"]["__HTTPS_PORT__"];
        if (port) {
            return port;
        }
        return "8601";
    };
    WindowData.HttpPort = function () {
        var port = window["__CONFIG__"]["__HTTP_PORT__"];
        if (port) {
            return port;
        }
        return "8501";
    };
    /***是否支持全屏 */
    WindowData.IsFullScreen = function () {
        if (this._IsFullScreen) {
            return this._IsFullScreen;
        }
        var isPhone = this.HasClientConfig(1);
        if (isPhone == false) {
            this._IsFullScreen = !egret.Capabilities.isMobile;
        }
        else {
            this._IsFullScreen = false;
        }
        return this._IsFullScreen;
    };
    WindowData.Has = function (value, bit) {
        return (value & (1 << bit)) > 0;
    };
    WindowData.GetThmType = function () {
        return parseInt(window["__CONFIG__"]["__THM__"] || 0);
    };
    WindowData.GetDefaultSel = function () {
        return parseInt(window["__CONFIG__"]["__DEFAULT_JOB__"] || 0);
    };
    WindowData.m_IsShow = false;
    return WindowData;
}());
__reflect(WindowData.prototype, "WindowData");
//# sourceMappingURL=WindowData.js.map