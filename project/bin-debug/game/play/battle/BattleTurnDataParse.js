var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BattleTurnDataParse = (function () {
    function BattleTurnDataParse() {
    }
    BattleTurnDataParse.Parse = function (rsp) {
        var turnDatas = [];
        var datas = [];
        for (var _i = 0, _a = rsp.events; _i < _a.length; _i++) {
            var data = _a[_i];
            var turnData = this.ParseData(data);
            if (data.type == 0) {
                datas = [];
                turnDatas.push(datas);
                datas.push(turnData);
            }
            else {
                datas.push(turnData);
            }
        }
        return turnDatas;
    };
    BattleTurnDataParse.ParseDatas = function (datas) {
        if (!datas) {
            return null;
        }
        var list = [];
        for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
            var data = datas_1[_i];
            var item = this.ParseData(data);
            if (item) {
                list.push(item);
            }
        }
        return list;
    };
    BattleTurnDataParse.ParseData = function (data) {
        var type = data.type;
        if (type == BattleTurnDataParse.TYPE_ROUND) {
            return new BTurnStartAction();
        }
        else if (type == BattleTurnDataParse.TYPE_USESKILL) {
            return this.CreateBattleSkillAction(data);
        }
        else if (type == BattleTurnDataParse.TYPE_USEACTION) {
            return BUseSkillAtkAction.Create(data);
        }
        else if (type == BattleTurnDataParse.TYPE_ACTIONHP) {
            return BattleDamageBaseData.Create(data);
        }
        else if (type == BattleTurnDataParse.TYPE_DEAD) {
            return this.CreateDeadAction(data);
        }
        else if (type == BattleTurnDataParse.TYPE_OUTBOUND) {
            return BOutBound.Create(data);
        }
        else if (type == BattleTurnDataParse.TYPE_BUFFSTATUSHP) {
            return BBuffStatusHpAction.Create(data);
        }
        else if (type == BattleTurnDataParse.TYPE_BUFFSTATUSACT) {
            return BBuffStateAct.Create(data);
        }
        else if (type == BattleTurnDataParse.TYPE_RELIVE) {
            return BReliveAction.Create(data);
        }
        else if (type == BattleTurnDataParse.TYPE_BUFFHP) {
            return BBuffChangeHpAction.Create(data);
        }
        else if (type == BattleTurnDataParse.TYPE_ACTIONBUFF) {
            return BAddBuffAction.Create(data);
        }
        else if (type == BattleTurnDataParse.TYPE_REMOVEBUFF) {
            return BRemoveBuffAction.Create(data);
        }
        else {
            console.warn("not ParseData type => " + type);
            return null;
        }
    };
    BattleTurnDataParse.CreateDeadAction = function (data) {
        return new BDeadAction;
    };
    BattleTurnDataParse.CreateBattleSkillAction = function (data) {
        var action = new BUseSkillAction;
        action.skillId = data.id;
        action.targets = data.targets;
        action.src = data.src;
        for (var _i = 0, _a = data.actions; _i < _a.length; _i++) {
            var d = _a[_i];
            var data_1 = this.ParseData(d);
            if (data_1) {
                if (d.type == BattleTurnDataParse.TYPE_USEACTION) {
                    data_1.skill = action;
                }
                else {
                    console.warn("battle not impl type => " + d.type);
                }
                action.actions.push(data_1);
            }
            // action.actions = this.ParseDatas(data.actions)
        }
        return action;
    };
    BattleTurnDataParse.TYPE_ROUND = 0; // ????????????
    BattleTurnDataParse.TYPE_USESKILL = 1; // ????????????
    BattleTurnDataParse.TYPE_USEACTION = 2; // ????????????
    BattleTurnDataParse.TYPE_ACTIONHP = 3; // ??????????????????
    BattleTurnDataParse.TYPE_ACTIONBUFF = 4; // ????????????buff
    BattleTurnDataParse.TYPE_BUFFHP = 5; // buff????????????
    BattleTurnDataParse.TYPE_DEAD = 6; // ??????
    BattleTurnDataParse.TYPE_OUTBOUND = 7; // ??????
    BattleTurnDataParse.TYPE_BUFFSTATUSHP = 8; // buff??????????????????
    BattleTurnDataParse.TYPE_BUFFSTATUSACT = 9; // buff????????????
    BattleTurnDataParse.TYPE_RELIVE = 10; // ??????
    BattleTurnDataParse.TYPE_REMOVEBUFF = 11; // ??????buff
    BattleTurnDataParse.TYPE_FINISH = 9999; // ??????
    return BattleTurnDataParse;
}());
__reflect(BattleTurnDataParse.prototype, "BattleTurnDataParse");
//# sourceMappingURL=BattleTurnDataParse.js.map