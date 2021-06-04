var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameServerData = (function () {
    function GameServerData() {
    }
    GameServerData.HasRecentSvr = function () {
        if (GameServerData.PageData && GameServerData.PageData[0] && GameServerData.PageData[0].datas && GameServerData.PageData[0].datas.length) {
            return true;
        }
        return false;
    };
    GameServerData.Init = function (maxId, datas, lastList) {
        this.MaxId = maxId;
        var recentData = new GameServerPageData;
        recentData.name = "\u6700\u8FD1\u767B\u5F55";
        recentData.index = 0;
        recentData.datas = datas;
        GameServerData.PageData.push(recentData);
        var page = Math.max(Math.ceil(maxId / GameServerData.PAGE_COUNT), 1);
        for (var i = page; i >= 1; --i) {
            var data = new GameServerPageData;
            data.name = ((i - 1) * GameServerData.PAGE_COUNT) + 1 + " - " + i * GameServerData.PAGE_COUNT + "\u670D";
            data.index = i;
            data.datas = [];
            GameServerData.PageData.push(data);
        }
        GameServerData.PageData[1].datas = lastList;
        if (datas != null && datas.length > 0) {
            GameServerData.SelectData = datas[0];
        }
        if (GameServerData.SelectData == null) {
            if (lastList != null && lastList.length > 0) {
                GameServerData.SelectData = lastList[0];
            }
        }
    };
    GameServerData.GetPageData = function (page) {
        HttpHelper.GetServerList(page, this._DoPageData, this);
    };
    GameServerData._DoPageData = function (page, event) {
        var jo = JSON.parse(event.currentTarget.response);
        var jsonObject = jo.data;
        var list = [];
        for (var key in jsonObject) {
            var obj = jsonObject[key];
            var serverData = GameServerDescData.Get(obj);
            if (serverData) {
                list.push(serverData);
            }
        }
        list.sort(function (lhs, rhs) {
            return rhs.id - lhs.id;
        });
        for (var _i = 0, _a = GameServerData.PageData; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data.index == page) {
                data.datas = list;
                break;
            }
        }
        if (GameServerData.Callback && GameServerData.ThisObject) {
            GameServerData.Callback.call(GameServerData.ThisObject, page);
        }
    };
    GameServerData.PAGE_COUNT = 20;
    GameServerData.PageData = [];
    GameServerData.SelectData = null;
    GameServerData.Callback = null;
    GameServerData.ThisObject = null;
    return GameServerData;
}());
__reflect(GameServerData.prototype, "GameServerData");
var GameServerPageData = (function () {
    function GameServerPageData() {
    }
    return GameServerPageData;
}());
__reflect(GameServerPageData.prototype, "GameServerPageData");
var GameServerDescData = (function () {
    function GameServerDescData() {
    }
    GameServerDescData.prototype.GetStatus = function () {
        if (this.status == 1 || this.status == 3) {
            return 1;
        }
        else if (this.status == 2 || this.status == 4) {
            return 2;
        }
        return 0;
    };
    GameServerDescData.prototype.CanEnter = function () {
        if (!this.version) {
            return false;
        }
        if (Main.Instance.GmLevel) {
            return true;
        }
        return this.status == 1 || this.status == 2;
    };
    GameServerDescData.Get = function (obj, ignore) {
        if (ignore === void 0) { ignore = false; }
        if (!ignore) {
            if (obj.status == 0 && !Main.Instance.GmLevel) {
                return null;
            }
        }
        var data = new GameServerDescData;
        data.id = obj.sid;
        data.name = WindowData._GetServerName(obj.sid);
        data.ip = obj.addr;
        data.status = obj.status;
        data.version = obj.version;
        return data;
    };
    return GameServerDescData;
}());
__reflect(GameServerDescData.prototype, "GameServerDescData");
//# sourceMappingURL=GameServerData.js.map