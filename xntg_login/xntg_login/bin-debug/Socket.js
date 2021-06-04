var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Socket = (function () {
    function Socket() {
        this._socketStatus = 0;
        this.recvPack = new egret.ByteArray();
        this.m_PreHeartBeat = 0;
        this.m_ServerTimeCounter = 5;
        this.m_HeartBeat = new egret.ByteArray(new Uint8Array([17, 1, 4, 1, 199]));
        this.newSocket();
    }
    Object.defineProperty(Socket.prototype, "connected", {
        get: function () {
            if (this.socket_) {
                return this.socket_.connected;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Socket.prototype.newSocket = function () {
        if (this.socket_) {
            this.socket_.removeEventListener(egret.Event.CONNECT, this.onSocketConnected, this);
            this.socket_.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            this.socket_.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketRead, this);
            this.socket_.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.connectError, this);
        }
        this.socket_ = new egret.WebSocket;
        this.socket_.type = egret.WebSocket.TYPE_BINARY;
        this.socket_.addEventListener(egret.Event.CONNECT, this.onSocketConnected, this);
        this.socket_.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.socket_.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketRead, this);
        this.socket_.addEventListener(egret.IOErrorEvent.IO_ERROR, this.connectError, this);
    };
    Socket.prototype.connectError = function () {
        alert("网络中断");
        if (window["connectError"]) {
            window["connectError"]();
        }
    };
    Socket.prototype.connect = function (host, port) {
        this.updateStatus(Socket.STATUS_CONNECTING);
        this._host = host;
        this._port = port;
        this.Connect(host, port);
    };
    Socket.prototype.Connect = function (host, port) {
        var _this = this;
        this.newSocket();
        var url = "";
        if (WindowData.IsHttps()) {
            var p = WindowData._GetPlatformId();
            if (p > 10000) {
                p = p % 10;
            }
            var wssUrl = WindowData._GetCenterAddr();
            url = "wss://" + wssUrl + ":" + 50000 + "/" + (port % 10000) + "/";
        }
        else {
            url = "ws://" + host + ":" + port;
        }
        this.socket_.connectByUrl(url);
        console.log("connect to " + host + " ,port: " + port + " !");
        window.setTimeout(function () {
            if (_this._socketStatus == Socket.STATUS_CONNECTING) {
                // 超时
                alert("连接超时");
                _this.close();
            }
        }, 10000);
    };
    Socket.prototype.close = function () {
        console.log("close socket！ip:" + this._host + " port:" + this._port);
        if (this.socket_) {
            this.socket_.close();
        }
        this.updateStatus(Socket.STATUS_DISCONNECT);
        egret.stopTick(this._SendHeartBeat, this);
    };
    ;
    Socket.prototype.GetSocketState = function () {
        return this._socketStatus;
    };
    Socket.prototype.onSocketConnected = function (e) {
        console.log("与服务器连接成功！ip:" + this._host + " port:" + this._port);
        this.updateStatus(Socket.STATUS_CHECKING);
        egret.stopTick(this._SendHeartBeat, this);
        egret.startTick(this._SendHeartBeat, this);
        if (this.proxy) {
            this.proxy.onSocketConnected();
        }
    };
    Socket.prototype.onSocketRead = function (e) {
        if (this.proxy) {
            var bytesCache = this.recvPack;
            var socket = this.socket_;
            socket._readByte.position = 0;
            var len = socket._readByte.bytesAvailable;
            socket.readBytes(bytesCache, 0);
            this.proxy.onSocketRead(new Uint8Array(bytesCache.buffer.slice(0, len)));
        }
    };
    Socket.prototype.onSocketClose = function (e) {
        console.log("与服务器的断开连接！ip:" + this._host + " port:" + this._port);
        var oldState = this._socketStatus;
        this.updateStatus(Socket.STATUS_DISCONNECT);
        if (this.proxy) {
            this.proxy.onSocketClose(oldState);
        }
    };
    Socket.prototype.updateStatus = function (status) {
        if (this._socketStatus != status) {
            var old = this._socketStatus;
            this._socketStatus = status;
            this.onFinishCheck(status, old);
        }
    };
    Socket.prototype.onFinishCheck = function (newStatus, oldStatus) {
        if (newStatus == Socket.STATUS_COMMUNICATION) {
            console.log("与服务器建立通信成功！ip:" + this._host + " port:" + this._port);
        }
        else if (newStatus == Socket.STATUS_CHECKING) {
        }
        else if (newStatus == Socket.STATUS_DISCONNECT) {
        }
        if (this.UpdateStateEvent) {
            this.UpdateStateEvent(newStatus);
        }
        if (this.proxy) {
            this.proxy.onFinishCheck(newStatus, oldStatus);
        }
    };
    ;
    Socket.prototype._SendHeartBeat = function (time) {
        if (time > this.m_PreHeartBeat + 20000) {
            this.m_PreHeartBeat = time;
            this.sendPack(this.m_HeartBeat);
        }
        return false;
    };
    Socket.prototype.sendPack = function (pack) {
        if (pack == null || pack.length == 0) {
            throw new egret.error("数据不能为空！");
        }
        if (this.socket_ && this.socket_.connected) {
            this.socket_.writeBytes(pack);
        }
        else {
            console.error("not connect");
        }
    };
    /** 连接中 */
    Socket.STATUS_CONNECTING = 1;
    /** 检验中 */
    Socket.STATUS_CHECKING = 2;
    /** 连接生效 */
    Socket.STATUS_COMMUNICATION = 3;
    /** 关闭连接 */
    Socket.STATUS_DISCONNECT = 4;
    Socket.ins = function () {
        if (!Socket._ins) {
            Socket._ins = new Socket();
        }
        return Socket._ins;
    };
    return Socket;
}());
__reflect(Socket.prototype, "Socket");
//# sourceMappingURL=Socket.js.map