// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_battle_play_finish_request = (function () {
        function cs_battle_play_finish_request() {
        }
        return cs_battle_play_finish_request;
    }());
    Sproto.cs_battle_play_finish_request = cs_battle_play_finish_request;
    __reflect(cs_battle_play_finish_request.prototype, "Sproto.cs_battle_play_finish_request");
    function _decode_cs_battle_play_finish_request(d) {
        var o = new cs_battle_play_finish_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_battle_play_finish_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 0);
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_battle_play_finish_request"] = { en: _encode_cs_battle_play_finish_request, de: _decode_cs_battle_play_finish_request };
    var cs_battle_set_auto_request = (function () {
        function cs_battle_set_auto_request() {
        }
        return cs_battle_set_auto_request;
    }());
    Sproto.cs_battle_set_auto_request = cs_battle_set_auto_request;
    __reflect(cs_battle_set_auto_request.prototype, "Sproto.cs_battle_set_auto_request");
    function _decode_cs_battle_set_auto_request(d) {
        var o = new cs_battle_set_auto_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.isauto = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_battle_set_auto_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.isauto != undefined) {
            se.wi(self.isauto, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_battle_set_auto_request"] = { en: _encode_cs_battle_set_auto_request, de: _decode_cs_battle_set_auto_request };
    var cs_battle_use_skill_request = (function () {
        function cs_battle_use_skill_request() {
        }
        return cs_battle_use_skill_request;
    }());
    Sproto.cs_battle_use_skill_request = cs_battle_use_skill_request;
    __reflect(cs_battle_use_skill_request.prototype, "Sproto.cs_battle_use_skill_request");
    function _decode_cs_battle_use_skill_request(d) {
        var o = new cs_battle_use_skill_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.use_skill_list = d.roa("use_skill_data");
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_battle_use_skill_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.use_skill_list != undefined) {
            se.woa("use_skill_data", self.use_skill_list, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_battle_use_skill_request"] = { en: _encode_cs_battle_use_skill_request, de: _decode_cs_battle_use_skill_request };
    var use_skill_data = (function () {
        function use_skill_data() {
        }
        return use_skill_data;
    }());
    Sproto.use_skill_data = use_skill_data;
    __reflect(use_skill_data.prototype, "Sproto.use_skill_data");
    function _decode_use_skill_data(d) {
        var o = new use_skill_data;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.handler = d.ri();
                    break;
                case 1:
                    o.skillid = d.ri();
                    break;
                case 2:
                    o.targets = d.ria();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_use_skill_data(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.handler != undefined) {
            se.wi(self.handler, 0);
        }
        if (self.skillid != undefined) {
            se.wi(self.skillid, 1);
        }
        if (self.targets != undefined) {
            se.wia(self.targets, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["use_skill_data"] = { en: _encode_use_skill_data, de: _decode_use_skill_data };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=battle_c2s.js.map