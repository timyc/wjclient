var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TreasurePanel = (function (_super) {
    __extends(TreasurePanel, _super);
    function TreasurePanel() {
        var _this = _super.call(this) || this;
        _this.mRoundId = -1;
        _this.m_PosIndex = 0;
        _this.effDic = {};
        _this.skinName = "TreasureHuntMainSkin";
        _this.list.itemRenderer = TreasureLabelItem;
        _this._AddClick(_this.btn0, _this._OnClick);
        _this._AddClick(_this.btn1, _this._OnClick);
        _this._AddClick(_this.btn2, _this._OnClick);
        _this._AddClick(_this.getway, _this._OnClick);
        _this._AddClick(_this.shopBtn, _this._OnClick);
        return _this;
    }
    TreasurePanel.prototype.childrenCreated = function () {
        var config = GameGlobal.Config.LuckConfig;
        var configData1 = config[1][0];
        this.priceIcon0.type = configData1.cost.id;
        this.priceIcon0.price = configData1.cost.count;
        this.rewardIcon0.type = configData1.rewards[0].id;
        this.rewardIcon0.price = configData1.rewards[0].count;
        var configData2 = config[2][0];
        this.priceIcon1.type = configData2.cost.id;
        this.priceIcon1.price = configData2.cost.count;
        this.rewardIcon1.type = configData2.rewards[0].id;
        this.rewardIcon1.price = configData2.rewards[0].count;
        var configData3 = config[3][0];
        this.priceIcon2.type = configData3.cost.id;
        this.priceIcon2.price = configData3.cost.count;
        this.rewardIcon2.type = configData3.rewards[0].id;
        this.rewardIcon2.price = configData3.rewards[0].count;
        this.myPrice.type = SHOP_MONEY.treasurePoint;
        this.luckbar.maximum = GameGlobal.Config.LuckBaseConfig.luckpro;
        this.luckbar.value = 0;
    };
    TreasurePanel.prototype.UpdateShowItems = function () {
        var roundId = GameGlobal.TreasureHuntModel.GetRound();
        if (this.mRoundId == roundId) {
            return;
        }
        this.mRoundId = roundId;
        this.ClearTypeEff();
        var items = this.GetShowItmes();
        for (var i = 0; i < this.group.numChildren; i++) {
            var item = this.group.getChildAt(i);
            var itemData = items[i];
            if (!itemData) {
                continue;
            }
            item.data = itemData;
            //Add Eff
            var effArr = GameGlobal.Config.LuckBaseConfig.effitem;
            for (var x = 0; x < effArr.length; x++) {
                if (effArr[x] == itemData.id)
                    this.addTypeEff(item, itemData);
            }
        }
        this.luckLabel.textFlow = TextFlowMaker.generateTextFlow(this.GetShowText());
    };
    TreasurePanel.prototype.GetShowItmes = function () {
        var round = GameGlobal.TreasureHuntModel.GetRound();
        return GameGlobal.Config.LuckBaseConfig["showitem" + round] || [];
    };
    TreasurePanel.prototype.GetShowText = function () {
        var round = GameGlobal.TreasureHuntModel.GetRound();
        return GameGlobal.Config.LuckBaseConfig["lucktext" + round] || "";
    };
    TreasurePanel.prototype.UpdateLuckBar = function () {
        var isFree = GameGlobal.TreasureHuntModel.IsFree();
        this.priceIcon1.visible = !isFree;
        this.freeLabel.visible = isFree;
        this.luckbar.value = GameGlobal.TreasureHuntModel.GetLuck();
        UIHelper.ShowRedPoint(this.btn1, isFree);
    };
    TreasurePanel.prototype.OnOpen = function () {
        this.observe(MessageDef.LUCK_RET_ANIM, this._StartAnim);
        this.observe(MessageDef.LUCK_RECORD, this._UpdateInfo);
        this.observe(MessageDef.LUCK_RET_SUC, this._UpdateRetData);
        this.observe(MessageDef.SHOP_CHANGE, this._UpdateMyPrice);
        this._UpdateRetData();
        this._UpdateInfo();
        this.timeDoEff();
        GameGlobal.TreasureHuntModel.SendGetInfo();
        this.fristGetItem.data = GameGlobal.Config.LuckBaseConfig.firstitme;
    };
    TreasurePanel.prototype.OnClose = function () {
        if (this.mRetData) {
            ViewManager.ins().open(TreasureResultPanel, this.mRetData);
            this.mRetData = null;
        }
    };
    TreasurePanel.prototype._UpdateMyPrice = function () {
        this.myPrice.price = GameGlobal.UserBag.GetCount(SHOP_MONEY.treasurePoint);
    };
    TreasurePanel.prototype._UpdateInfo = function () {
        this.UpdateShowItems();
        this.UpdateLuckBar();
        this.myPrice.price = GameGlobal.UserBag.GetCount(SHOP_MONEY.treasurePoint);
        var info = GameGlobal.TreasureHuntModel.mInfo;
        if (!info) {
            return;
        }
        if (!info.records) {
            return;
        }
        this.list.dataProvider = new eui.ArrayCollection(info.records);
    };
    TreasurePanel.prototype._UpdateRetData = function () {
        var info = GameGlobal.TreasureHuntModel.mInfo;
        this.fristGet.visible = info && (info.counts[2] || 0) < 1;
    };
    TreasurePanel.prototype._StartAnim = function (data) {
        var _this = this;
        this.mRetData = data;
        this.selectImg.visible = true;
        this.m_PosIndex = 0;
        this.GetPos(0);
        TimerManager.ins().doTimer(80, MathUtils.limitInteger(8, 18), this._UpdateAnimPos, this, function () {
            if (_this.mRetData) {
                ViewManager.ins().open(TreasureResultPanel, _this.mRetData);
                _this.mRetData = null;
                _this.selectImg.visible = false;
            }
        });
    };
    TreasurePanel.prototype.GetPos = function (index) {
        var child = this.group.getChildAt(index);
        if (child) {
            var point = egret.$TempPoint;
            child.localToGlobal(child.itemIcon.x, child.itemIcon.y, point);
            this.globalToLocal(point.x, point.y, point);
            this.selectImg.x = point.x - 10;
            this.selectImg.y = point.y - 10;
            var scale = index == 0 || index == 6 || index == 3 || index == 9 ? 1 : 0.85;
            this.selectImg.scaleX = this.selectImg.scaleY = scale;
        }
        return null;
    };
    TreasurePanel.prototype._UpdateAnimPos = function () {
        this.GetPos(++this.m_PosIndex % this.group.numChildren);
    };
    TreasurePanel.prototype.addEff = function (item, string, count) {
        var eff = new MovieClip;
        eff.loadUrl(ResDataPath.GetUIEffePath2(string), true, count); //"ui_eff_q003"
        eff.x = 55;
        eff.y = 53;
        eff.scaleX = 1.1;
        eff.scaleY = 1.1;
        item.addChild(eff);
        return eff;
    };
    TreasurePanel.prototype.addTypeEff = function (item, itemData) {
        var itemConfig = GlobalConfig.ins().ItemConfig[itemData.id];
        var type = itemConfig.quality;
        if (type == 4) {
            var m1 = this.addEff(item, "ui_eff_q002", 0);
            var m2 = this.addEff(item, "ui_eff_q003", 1);
            ;
            this.effDic[type] = { item: item, m1: m1, m2: m2 };
        }
        else if (type == 5) {
            var m1 = this.addEff(item, "ui_eff_q001", 0);
            var m2 = this.addEff(item, "ui_eff_q003", 1);
            this.effDic[type] = { item: item, m1: m1, m2: m2 };
        }
    };
    TreasurePanel.prototype.ClearTypeEff = function () {
        for (var key in this.effDic) {
            var data = this.effDic[key];
            if (data.m1) {
                data.m1.ClearCache();
                DisplayUtils.removeFromParent(data.m1);
            }
            if (data.m2) {
                data.m2.ClearCache();
                DisplayUtils.removeFromParent(data.m2);
            }
        }
        this.effDic = {};
    };
    TreasurePanel.prototype.timeDoEff = function () {
        var _this = this;
        TimerManager.ins().doTimer(3000, 0, function () {
            for (var key in _this.effDic) {
                var data = _this.effDic[key];
                if (key == "4") {
                    _this.addEff(data.item, "ui_eff_q003", 1);
                }
                else if (key == "5") {
                    _this.addEff(data.item, "ui_eff_q003", 1);
                }
            }
        }, this);
    };
    TreasurePanel.prototype._OnClick = function (e) {
        switch (e.currentTarget) {
            case this.btn0:
                this.BuyHunt(1);
                break;
            case this.btn1:
                this.BuyHunt(2);
                break;
            case this.btn2:
                this.BuyHunt(3);
                break;
            case this.getway:
                var datas = GameGlobal.Config.LuckBaseConfig.text;
                var desc = [];
                for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
                    var data = datas_1[_i];
                    var item = GameGlobal.Config.ItemConfig[data.id];
                    if (!item) {
                        continue;
                    }
                    desc.push(StringUtils.repeatStr("   ", 5) + this.complementByChar(item.name, 12) + data.rate + "%");
                }
                ActivityDescPanel.Show(desc.join("\n"), "????????????");
                break;
            case this.shopBtn:
                ViewManager.ins().open(ShopLayer, [ShopController.EN_SHOP_TREASURE_HUNT]);
                break;
        }
    };
    TreasurePanel.prototype.complementByChar = function (str, length) {
        str = str + "";
        var byteLen = str.length;
        return str + StringUtils.repeatStr("   ", length - byteLen);
    };
    TreasurePanel.prototype.BuyHunt = function (type) {
        if (this.mRetData) {
            return;
        }
        var check = false;
        if (type == 2 && GameGlobal.TreasureHuntModel.IsFree()) {
            check = true;
        }
        else {
            var config = GameGlobal.Config.LuckConfig[type][0];
            if (Checker.Money(config.cost.id, config.cost.count)) {
                check = true;
            }
        }
        if (check) {
            GameGlobal.TreasureHuntModel.SendTreasure(1, type);
        }
    };
    TreasurePanel.NAME = "??????";
    return TreasurePanel;
}(BaseView));
__reflect(TreasurePanel.prototype, "TreasurePanel");
var TreasureLabelItem = (function (_super) {
    __extends(TreasureLabelItem, _super);
    function TreasureLabelItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /////////////////////////////////////////////////////////////////////////////
    TreasureLabelItem.prototype.dataChanged = function () {
        var data = this.data;
        var item = GlobalConfig.ins().ItemConfig[data.reward.id];
        if (item == null)
            return;
        var str, count = "";
        if (data.reward.count) {
            count = "x" + data.reward.count;
        }
        var itemStr = "";
        if (item.type == 0) {
            itemStr = TreasureLabelItem.makeNameList(item);
        }
        else {
            itemStr = item.name;
        }
        this.label.textFlow = TextFlowMaker.generateTextFlow("<font color = '#1848ff'>" + data.name + "</font> ?????? <font color='" + ItemBase.QUALITY_COLOR[item.quality] + "'>" + itemStr + count + "</font>");
    };
    TreasureLabelItem.makeNameList = function (item) {
        var name = '';
        name = item.name;
        if (item.zsLevel > 0) {
            name += "(" + item.zsLevel + "??? ";
        }
        else {
            name += "(" + item.level + "??? ";
        }
        name += ")";
        return name;
    };
    ;
    return TreasureLabelItem;
}(eui.ItemRenderer));
__reflect(TreasureLabelItem.prototype, "TreasureLabelItem");
//# sourceMappingURL=TreasurePanel.js.map