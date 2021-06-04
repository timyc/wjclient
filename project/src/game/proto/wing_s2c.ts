// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class sc_wing_equip_request {
		public equipDatas: item_data; // tag 0
	}

	function _decode_sc_wing_equip_request(d: SprotoTypeDeserialize) {
		let o = new sc_wing_equip_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.equipDatas = d.ro("item_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_wing_equip_request(self: sc_wing_equip_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.equipDatas != undefined) {
			se.wo ("item_data", self.equipDatas, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_wing_equip_request"] = {en: _encode_sc_wing_equip_request, de: _decode_sc_wing_equip_request}
	export class sc_wing_upgrade_level_request {
		public lv: number; // tag 0
		public exp: number; // tag 1
		public upexp: number; // tag 2
	}

	function _decode_sc_wing_upgrade_level_request(d: SprotoTypeDeserialize) {
		let o = new sc_wing_upgrade_level_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.lv = d.ri ();
				break;
			case 1:
				o.exp = d.ri ();
				break;
			case 2:
				o.upexp = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_wing_upgrade_level_request(self: sc_wing_upgrade_level_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.lv != undefined) {
			se.wi (self.lv, 0);
		}

		if (self.exp != undefined) {
			se.wi (self.exp, 1);
		}

		if (self.upexp != undefined) {
			se.wi (self.upexp, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_wing_upgrade_level_request"] = {en: _encode_sc_wing_upgrade_level_request, de: _decode_sc_wing_upgrade_level_request}
	export class sc_wing_upgrade_skill_request {
		public skillId: number; // tag 0
		public lv: number; // tag 1
	}

	function _decode_sc_wing_upgrade_skill_request(d: SprotoTypeDeserialize) {
		let o = new sc_wing_upgrade_skill_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.skillId = d.ri ();
				break;
			case 1:
				o.lv = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_wing_upgrade_skill_request(self: sc_wing_upgrade_skill_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.skillId != undefined) {
			se.wi (self.skillId, 0);
		}

		if (self.lv != undefined) {
			se.wi (self.lv, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_wing_upgrade_skill_request"] = {en: _encode_sc_wing_upgrade_skill_request, de: _decode_sc_wing_upgrade_skill_request}
}

