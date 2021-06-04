var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WeatherBase = (function () {
    function WeatherBase(t) {
        this._runing = false;
        this._first = false;
        this.timerFrame = 15e3;
        this.index = 0;
        this.imageList = [];
        this.m_Temp = 0;
        this.index = t;
    }
    WeatherBase.prototype.playWeather = function (tex) {
        this.imageList = tex || [];
        if (false == this._runing) {
            this._runing = true;
            this._first = true;
            this.onWeatherStart();
            if (this.timerFrame > 0) {
            }
            else {
                this.timerFrame = 60;
            }
            egret.startTick(this.weatherUpdateHandler, this);
            WeatherFactory.weatherRunlist[this.index] = this;
        }
    };
    WeatherBase.prototype.stopWeather = function () {
        if (true == this._runing) {
            this._runing = false;
            egret.stopTick(this.weatherUpdateHandler, this);
            this.onWeatherStop();
            delete WeatherFactory.weatherRunlist[this.index];
        }
    };
    WeatherBase.prototype.weatherUpdateHandler = function (time) {
        if (time > (this.m_Temp + this.timerFrame)) {
            this.m_Temp = time;
        }
        else {
            return false;
        }
        if (true == this._first) {
            this._first = false;
        }
        else {
            this.onWeatherUpdate();
        }
        return false;
    };
    WeatherBase.prototype.onWeatherInit = function () { };
    WeatherBase.prototype.onWeatherStart = function () { };
    WeatherBase.prototype.onWeatherUpdate = function () { };
    WeatherBase.prototype.onWeatherStop = function () { };
    return WeatherBase;
}());
__reflect(WeatherBase.prototype, "WeatherBase");
//# sourceMappingURL=WeatherBase.js.map