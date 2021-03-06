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
var WeatherFlower = (function (_super) {
    __extends(WeatherFlower, _super);
    function WeatherFlower() {
        var _this = _super.call(this, 1) || this;
        _this.MAX_COUNT = 10;
        _this.r_P_List = [];
        _this.r_R_List = [];
        _this.r_Max = 7;
        _this.r_L_Delay = 500;
        _this.r_L_Last_Time = 0;
        _this.r_R_Delay = 20;
        _this.r_R_Last_Time = 0;
        _this.s_C_Delay = 300;
        _this.s_C_Last_Time = 0;
        _this.timerFrame = 30;
        return _this;
    }
    WeatherFlower.prototype.setStageTarget = function (t) {
        this.stageTarget = t;
    };
    WeatherFlower.prototype.onWeatherStart = function () {
        this.r_Max = 8;
        this._lastTime = egret.getTimer();
        if (0 == this.r_P_List.length && 0 == this.r_R_List.length)
            for (var t, e = 0; e < this.MAX_COUNT; e++)
                t = new RainLine, t.autoRotation = !1, this.r_P_List.push(t);
    };
    WeatherFlower.prototype.onWeatherUpdate = function () {
        var rainLine;
        if (null != this.imageList && 0 != this.imageList.length) {
            var time = egret.getTimer();
            if (this.r_Max != this.MAX_COUNT && time - this._lastTime >= 1e3 && (this.r_Max += 1, this.r_Max > this.MAX_COUNT && (this.r_Max = this.MAX_COUNT), this._lastTime = time), this.r_R_List.length < this.r_Max && this.r_P_List.length > 0 && time - this.r_L_Last_Time > this.r_L_Delay) {
                this.r_L_Last_Time = time;
                rainLine = this.r_P_List.shift();
                rainLine.visible = !0;
                rainLine.type = 0;
                rainLine.texture = this.imageList[10 * Math.random() % 3 << 0];
                var stage = egret.MainContext.instance.stage;
                rainLine.x = stage.stageWidth * Math.random() + 1;
                rainLine.y = 20 * Math.random() + 5;
                rainLine.sy = rainLine.y;
                rainLine.targety = stage.stageHeight / 2 + stage.stageHeight / 2 * Math.random();
                rainLine.scaleX = 0;
                rainLine.scaleY = 0;
                rainLine.sScale = .5 * Math.random() + .5;
                rainLine.alpha = 0;
                rainLine.rotationPlus = 1.5 * (2 * Math.random() - 1);
                rainLine.sptx = Math.random() / 20 + .01;
                rainLine.speedx = Math.random() - Math.random() - 2;
                rainLine.speedy = 3 * Math.random() + 3;
                null == rainLine.parent && this.stageTarget.addChild(rainLine);
                this.r_R_List.push(rainLine);
            }
            for (var s = 0; s < this.r_R_List.length; s++) {
                rainLine = this.r_R_List[s];
                rainLine.update();
                rainLine.rotation += rainLine.rotationPlus;
                if (rainLine.isDeath) {
                    this.r_R_List.splice(s--, 1), this.r_P_List.push(rainLine), rainLine.visible = !1;
                }
                else {
                    var n = (rainLine.y - rainLine.sy) / (rainLine.targety - rainLine.sy);
                    .2 >= n
                        ? (rainLine.alpha = n / .2, rainLine.scaleX = rainLine.scaleY = rainLine.sScale * rainLine.alpha)
                        : n >= .8 && (rainLine.alpha = (1 - n) / .2, rainLine.scaleX = rainLine.scaleY = rainLine.sScale * rainLine.alpha);
                }
            }
        }
    };
    WeatherFlower.prototype.onWeatherStop = function () {
        var t, e;
        for (t = 0; t < this.r_R_List.length; t++)
            e = this.r_R_List[t], e.visible = !0, this.Remove(e);
        for (t = 0; t < this.r_P_List.length; t++)
            e = this.r_P_List[t], e.visible = !0, this.Remove(e);
        this.r_R_List.length = 0, this.r_P_List.length = 0;
    };
    WeatherFlower.prototype.Remove = function (e) {
        if (e && e.parent) {
            e.parent.removeChild(e);
        }
    };
    return WeatherFlower;
}(WeatherBase));
__reflect(WeatherFlower.prototype, "WeatherFlower");
//# sourceMappingURL=WeatherFlower.js.map