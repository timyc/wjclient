class RankingModel extends BaseSystem {
    public static MAX_VIPLV = 20;
    public ranks: { [type: number]: Sproto.sc_rank_data_request } = {};
    private status;
    public constructor() {
        super();
        this.regNetMsg(S2cProtocol.sc_rank_data, this.getRank);
        this.regNetMsg(S2cProtocol.sc_rank_worship, this.getWorship);
    }

    public getVipConfig() {
        return GameGlobal.Config.VipConfig;
    }
    public getKeyItemData() {
        let config = GameGlobal.Config.RankLvConfig;
        let ListItemDate = new eui.ArrayCollection();
        for (let key in config) {
            if (GameGlobal.actorModel.level >= config[key].level && GameServer.serverOpenDay >= config[key].openday) {
                let data = {}
                data["type"] = config[key].type;
                data["name"] = config[key].name;
                ListItemDate.addItem(data);
            }
        }
        return ListItemDate;
    }
    public getValueItemData() {
        return new eui.ArrayCollection([]);
    }
    public getShowById(rankObj: Sproto.rank_data_list, rankType) {
        if (!rankObj) {
            return
        }
        let subRole = new RoleShowData();
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
                RoleShowData.GetSwordAppId(rankObj.outweapon, rankObj.job, rankObj.sex)
            case 2:
                subRole.wingId = RoleShowData.GetWingAppId(rankObj.outwing);
                RoleShowData.GetSwordAppId(rankObj.outweapon, rankObj.job, rankObj.sex)
                break
            case 6:
                subRole.wingId = RoleShowData.GetWingAppId(rankObj.outwing);
                break
            case 8:
                subRole.swordID = RoleShowData.GetSwordAppId(rankObj.outweapon, rankObj.job, rankObj.sex)
                break
            case 20:
                subRole.rideId = 0;
                subRole.job = 1;
                subRole.sex = rankObj.outbabysex;
                subRole.clothID = rankObj.outbaby;
                break
        }
        return subRole;
    }

    public isRedPoint() {
        return !GameGlobal.RankingModel.status;
    }
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //--------???????????????????????????----------------------------------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public sendRank(id) {
        let req = new Sproto.cs_rank_req_request();
        req.type = id;
        this.Rpc(C2sProtocol.cs_rank_req, req);
    }
    public getRank(req: Sproto.sc_rank_data_request) {
        if (req) {
            this.ranks[req.type] = req;
            MessageCenter.ins().dispatch(MessageDef.UPDATE_PAIHANGBANG_DATA);
        }
    }

    public sendWorship() {
        let req = new Sproto.cs_rank_worship_request;
        this.Rpc(C2sProtocol.cs_rank_worship, req)
    }


    public getWorship(req: Sproto.sc_rank_worship_request) {
        this.status = req.status || 0
        MessageCenter.ins().dispatch(MessageDef.PHB_REPOINT_UPDATE);
    }


    /**?????????*/
    public static RANK_TYPE_ZDL = 1
    /**??????*/
    public static RANK_TYPE_DJ = 2
    /**?????????*/
    public static RANK_TYPE_CW = 3
    /**?????????*/
    public static RANK_TYPE_XL = 4
    /**?????????*/
    public static RANK_TYPE_ZQ = 5
    /**?????????*/
    public static RANK_TYPE_CB = 6
    /**?????????*/
    public static RANK_TYPE_TX = 7
    /**?????????*/
    public static RANK_TYPE_SB = 8
    /**?????????*/
    public static RANK_TYPE_TN = 9
    /**?????????*/
    public static RANK_TYPE_TS = 10
    /**?????????*/
    public static RANK_TYPE_FZ = 11
    /**?????????*/
    public static RANK_TYPE_XW = 12
    /**?????????*/
    public static RANK_TYPE_TL = 13
    /**?????????*/
    public static RANK_TYPE_SH = 14
    /**?????????*/
    public static RANK_TYPE_HN = 15
    /**?????????*/
    public static RANK_TYPE_LQ = 16
    /**????????????*/
    public static RANK_TYPE_FB = 17
    /**???????????????*/
    public static RANK_TYPE_LLT = 18
    /**??????????????????*/
    public static RANK_TYPE_TT = 19
    /**??????*/
    public static RANK_TYPE_LT = 20
}