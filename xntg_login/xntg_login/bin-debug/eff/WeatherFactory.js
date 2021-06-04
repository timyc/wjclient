var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WeatherFactory = (function () {
    function WeatherFactory() {
    }
    WeatherFactory.getFlower = function () {
        var t = egret.MainContext.instance.stage;
        this._weatherFlower = this._weatherFlower || new WeatherFlower();
        this._weatherFlower.setStageTarget(t);
        return this._weatherFlower;
    };
    WeatherFactory.enabled = !1;
    WeatherFactory.weatherFBList = [];
    WeatherFactory.weatherSceneList = [];
    WeatherFactory.weatherRunlist = {};
    return WeatherFactory;
}());
__reflect(WeatherFactory.prototype, "WeatherFactory");
//# sourceMappingURL=WeatherFactory.js.map