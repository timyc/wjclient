var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HttpHelper = (function () {
    function HttpHelper() {
    }
    HttpHelper.GetPlayerServerInfo = function (token, callback, thisObject) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(WindowData._GetServerAddr() + "/get_player_serverinfo?token=" + token + "&platformid=" + WindowData._GetPlatformId(), egret.HttpMethod.GET);
        request.send();
        request.addEventListener(egret.Event.COMPLETE, callback, thisObject);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    };
    HttpHelper.GetServerList = function (page, callback, thisObject) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(WindowData._GetServerAddr() + "/get_serverlist?platformid=" + WindowData._GetPlatformId() + "&page=" + page, egret.HttpMethod.GET);
        request.send();
        request.addEventListener(egret.Event.COMPLETE, function (event) {
            callback.call(thisObject, page, event);
        }, thisObject);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    };
    HttpHelper.GetRandomName = function (serverid, sex, callback, thisObject) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(WindowData._GetServerAddr() + "/get_random_name?platformid=" + WindowData._GetPlatformId() + "&serverid=" + serverid + "&sex=" + sex, egret.HttpMethod.GET);
        request.send();
        request.addEventListener(egret.Event.COMPLETE, callback, thisObject);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    };
    HttpHelper.CheckName = function (serverid, name, callback, thisObject) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(WindowData._GetServerAddr() + "/check_lock_name?platformid=" + WindowData._GetPlatformId() + "&serverid=" + serverid + "&name=" + name, egret.HttpMethod.GET);
        request.send();
        request.addEventListener(egret.Event.COMPLETE, callback, thisObject);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    };
    HttpHelper.GetNotice = function (callback, thisObject) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(WindowData._GetServerAddr() + "/get_total_notice?platformid=" + WindowData._GetPlatformId(), egret.HttpMethod.GET);
        request.send();
        request.addEventListener(egret.Event.COMPLETE, callback, thisObject);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    };
    HttpHelper.SendPoint = function (point) {
        if (HttpHelper.m_Set[point] || !Main.Instance) {
            return;
        }
        HttpHelper.m_Set[point] = true;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(WindowData._GetServerAddr() + "/set_account_point?account=" + Main.Instance.UserName + "&status=" + point, egret.HttpMethod.GET);
        request.send();
    };
    HttpHelper.Error = function () {
        alert("请求错误，请稍后重试");
    };
    HttpHelper.m_Set = {};
    return HttpHelper;
}());
__reflect(HttpHelper.prototype, "HttpHelper");
//# sourceMappingURL=HttpHelper.js.map