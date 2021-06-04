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
var RainLine = (function (_super) {
    __extends(RainLine, _super);
    function RainLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoRotation = !0;
        _this.sptx = 0;
        _this.speedx = 0;
        _this.speedy = 0;
        _this.targety = 0;
        _this.sy = 0;
        _this.down = !0;
        _this.spt = 0;
        _this.touchEnabled = !1;
        _this.sScale = 0;
        _this.rotationPlus = 0;
        return _this;
    }
    RainLine.prototype.update = function () {
        this.spt += this.sptx;
        var t = this.x + this.speedx + 2 * Math.cos(this.spt), e = this.y + this.speedy;
        if (0 == this.type) {
            if (this.autoRotation) {
                var i = -(180 * Math.atan2(t - this.x, e - this.y)) / Math.PI + 90;
                this.rotation = i;
            }
            if (this.x = t, this.y = e, this.down) {
                if (this.y >= this.targety)
                    return void (this.isDeath = !0);
            }
            else if (this.y <= this.targety)
                return void (this.isDeath = !0);
        }
        else if (this.scaleX += .2, this.scaleY += .2, this.scaleX >= 1)
            return void (this.isDeath = !0);
        this.isDeath = this.x <= 0 || this.y <= 0 || this.x >= this.stage.stageWidth || this.y >= this.stage.stageHeight;
    };
    return RainLine;
}(egret.Bitmap));
__reflect(RainLine.prototype, "RainLine");
//# sourceMappingURL=RainLine.js.map