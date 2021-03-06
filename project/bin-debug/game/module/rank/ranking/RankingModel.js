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
var RankingModel = (function (_super) {
    __extends(RankingModel, _super);
    function RankingModel() {
        var _this = _super.call(this) || this;
        _this.ranks = {};
        _this.regNetMsg(S2cProtocol.sc_rank_data, _this.getRank);
        _this.regNetMsg(S2cProtocol.sc_rank_worship, _this.getWorship);
        return _this;
    }
    RankingModel.prototype.getVipConfig = function () {
        return GameGlobal.Config.VipConfig;
    };
    RankingModel.prototype.getKeyItemData = function () {
        var config = GameGlobal.Config.RankLvConfig;
        var ListItemDate = new eui.ArrayCollection();
        for (var key in config) {
            if (GameGlobal.actorModel.level >= config[key].level && GameServer.serverOpenDay >= config[key].openday) {
                var data = {};
                data["type"] = config[key].type;
                data["name"] = config[key].name;
                ListItemDate.addItem(data);
            }
        }
        return ListItemDate;
    };
    RankingModel.prototype.getValueItemData = function () {
        return new eui.ArrayCollection([]);
    };
    RankingModel.prototype.getShowById = function (rankObj, rankType) {
        if (!rankObj) {
            return;
        }
        var subRole = new RoleShowData();
        // let req = this.ranks[rankType];
        // if (!req)
        // {
        //     return;
        // }    
        subRole.job = rankObj.job;
        subRole.sex = rankObj.sex;
        subRole.rideId = RoleShowData.GetRideAppId(rankObj.outride);
        if (rankObj.skin != 0)
            subRole.clothID = RoleShowData.GetBodyAppId(rankObj.skin, rankObj.job, rankObj.sex);
        // subRole.wingId = 1;
        switch (rankType) {
            case 1:
                subRole.wingId = RoleShowData.GetWingAppId(rankObj.outwing);
                RoleShowData.GetSwordAppId(rankObj.outweapon, rankObj.job, rankObj.sex);
            case 2:
                subRole.wingId = RoleShowData.GetWingAppId(rankObj.outwing);
                RoleShowData.GetSwordAppId(rankObj.outweapon, rankObj.job, rankObj.sex);
                break;
            case 6:
                subRole.wingId = RoleShowData.GetWingAppId(rankObj.outwing);
                break;
            case 8:
                subRole.swordID = RoleShowData.GetSwordAppId(rankObj.outweapon, rankObj.job, rankObj.sex);
                break;
            case 20:
                subRole.rideId = 0;
                subRole.job = 1;
                subRole.sex = rankObj.outbabysex;
                subRole.clothID = rankObj.outbaby;
                break;
        }
        return subRole;
    };
    RankingModel.prototype.isRedPoint = function () {
        return !GameGlobal.RankingModel.status;
    };
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //--------???????????????????????????----------------------------------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    RankingModel.prototype.sendRank = function (id) {
        var req = new Sproto.cs_rank_req_request();
        req.type = id;
        this.Rpc(C2sProtocol.cs_rank_req, req);
    };
    RankingModel.prototype.getRank = function (req) {
        if (req) {
            this.ranks[req.type] = req;
            MessageCenter.ins().dispatch(MessageDef.UPDATE_PAIHANGBANG_DATA);
        }
    };
    RankingModel.prototype.sendWorship = function () {
        var req = new Sproto.cs_rank_worship_request;
        this.Rpc(C2sProtocol.cs_rank_worship, req);
    };
    RankingModel.prototype.getWorship = function (req) {
        this.status = req.status || 0;
        MessageCenter.ins().dispatch(MessageDef.PHB_REPOINT_UPDATE);
    };
    RankingModel.MAX_VIPLV = 20;
    /**?????????*/
    RankingModel.RANK_TYPE_ZDL = 1;
    /**??????*/
    RankingModel.RANK_TYPE_DJ = 2;
    /**?????????*/
    RankingModel.RANK_TYPE_CW = 3;
    /**?????????*/
    RankingModel.RANK_TYPE_XL = 4;
    /**?????????*/
    RankingModel.RANK_TYPE_ZQ = 5;
    /**?????????*/
    RankingModel.RANK_TYPE_CB = 6;
    /**?????????*/
    RankingModel.RANK_TYPE_TX = 7;
    /**?????????*/
    RankingModel.RANK_TYPE_SB = 8;
    /**?????????*/
    RankingModel.RANK_TYPE_TN = 9;
    /**?????????*/
    RankingModel.RANK_TYPE_TS = 10;
    /**?????????*/
    RankingModel.RANK_TYPE_FZ = 11;
    /**?????????*/
    RankingModel.RANK_TYPE_XW = 12;
    /**?????????*/
    RankingModel.RANK_TYPE_TL = 13;
    /**?????????*/
    RankingModel.RANK_TYPE_SH = 14;
    /**?????????*/
    RankingModel.RANK_TYPE_HN = 15;
    /**?????????*/
    RankingModel.RANK_TYPE_LQ = 16;
    /**????????????*/
    RankingModel.RANK_TYPE_FB = 17;
    /**???????????????*/
    RankingModel.RANK_TYPE_LLT = 18;
    /**??????????????????*/
    RankingModel.RANK_TYPE_TT = 19;
    /**??????*/
    RankingModel.RANK_TYPE_LT = 20;
    return RankingModel;
}(BaseSystem));
__reflect(RankingModel.prototype, "RankingModel");
//# sourceMappingURL=RankingModel.js.map