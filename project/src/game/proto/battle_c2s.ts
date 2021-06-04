// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_battle_play_finish_request {
	}

	function _decode_cs_battle_play_finish_request(d: SprotoTypeDeserialize) {
		let o = new cs_battle_play_finish_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_battle_play_finish_request(self: cs_battle_play_finish_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_battle_play_finish_request"] = {en: _encode_cs_battle_play_finish_request, de: _decode_cs_battle_play_finish_request}
	export class cs_battle_set_auto_request {
		public isauto: number; // tag 0
	}

	function _decode_cs_battle_set_auto_request(d: SprotoTypeDeserialize) {
		let o = new cs_battle_set_auto_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.isauto = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_battle_set_auto_request(self: cs_battle_set_auto_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.isauto != undefined) {
			se.wi (self.isauto, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_battle_set_auto_request"] = {en: _encode_cs_battle_set_auto_request, de: _decode_cs_battle_set_auto_request}
	export class cs_battle_use_skill_request {
		public use_skill_list: use_skill_data[]; // tag 0
	}

	function _decode_cs_battle_use_skill_request(d: SprotoTypeDeserialize) {
		let o = new cs_battle_use_skill_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.use_skill_list = d.roa("use_skill_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_battle_use_skill_request(self: cs_battle_use_skill_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.use_skill_list != undefined) {
			se.woa ("use_skill_data", self.use_skill_list, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_battle_use_skill_request"] = {en: _encode_cs_battle_use_skill_request, de: _decode_cs_battle_use_skill_request}
	export class use_skill_data {
		public handler: number; // tag 0
		public skillid: number; // tag 1
		public targets: number[]; // tag 2
	}

	function _decode_use_skill_data(d: SprotoTypeDeserialize) {
		let o = new use_skill_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.handler = d.ri ();
				break;
			case 1:
				o.skillid = d.ri ();
				break;
			case 2:
				o.targets = d.ria ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_use_skill_data(self: use_skill_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.handler != undefined) {
			se.wi (self.handler, 0);
		}

		if (self.skillid != undefined) {
			se.wi (self.skillid, 1);
		}

		if (self.targets != undefined) {
			se.wia (self.targets, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["use_skill_data"] = {en: _encode_use_skill_data, de: _decode_use_skill_data}
}

