// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_escort_avenge_request {
		public recordId: number; // tag 0
	}

	function _decode_cs_escort_avenge_request(d: SprotoTypeDeserialize) {
		let o = new cs_escort_avenge_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.recordId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_escort_avenge_request(self: cs_escort_avenge_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.recordId != undefined) {
			se.wi (self.recordId, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_escort_avenge_request"] = {en: _encode_cs_escort_avenge_request, de: _decode_cs_escort_avenge_request}
	export class cs_escort_catch_info_request {
		public playerId: number; // tag 0
	}

	function _decode_cs_escort_catch_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_escort_catch_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.playerId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_escort_catch_info_request(self: cs_escort_catch_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.playerId != undefined) {
			se.wi (self.playerId, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_escort_catch_info_request"] = {en: _encode_cs_escort_catch_info_request, de: _decode_cs_escort_catch_info_request}
	export class cs_escort_catch_info_response {
		public escortInfo: escort_info; // tag 0
	}

	function _decode_cs_escort_catch_info_response(d: SprotoTypeDeserialize) {
		let o = new cs_escort_catch_info_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.escortInfo = d.ro("escort_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_escort_catch_info_response(self: cs_escort_catch_info_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.escortInfo != undefined) {
			se.wo ("escort_info", self.escortInfo, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_escort_catch_info_response"] = {en: _encode_cs_escort_catch_info_response, de: _decode_cs_escort_catch_info_response}
	export class cs_escort_enter_request {
	}

	function _decode_cs_escort_enter_request(d: SprotoTypeDeserialize) {
		let o = new cs_escort_enter_request;
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

	function _encode_cs_escort_enter_request(self: cs_escort_enter_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_escort_enter_request"] = {en: _encode_cs_escort_enter_request, de: _decode_cs_escort_enter_request}
	export class cs_escort_get_reward_request {
	}

	function _decode_cs_escort_get_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_escort_get_reward_request;
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

	function _encode_cs_escort_get_reward_request(self: cs_escort_get_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_escort_get_reward_request"] = {en: _encode_cs_escort_get_reward_request, de: _decode_cs_escort_get_reward_request}
	export class cs_escort_perform_request {
	}

	function _decode_cs_escort_perform_request(d: SprotoTypeDeserialize) {
		let o = new cs_escort_perform_request;
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

	function _encode_cs_escort_perform_request(self: cs_escort_perform_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_escort_perform_request"] = {en: _encode_cs_escort_perform_request, de: _decode_cs_escort_perform_request}
	export class cs_escort_quick_complete_request {
	}

	function _decode_cs_escort_quick_complete_request(d: SprotoTypeDeserialize) {
		let o = new cs_escort_quick_complete_request;
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

	function _encode_cs_escort_quick_complete_request(self: cs_escort_quick_complete_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_escort_quick_complete_request"] = {en: _encode_cs_escort_quick_complete_request, de: _decode_cs_escort_quick_complete_request}
	export class cs_escort_refresh_quality_request {
		public type: number; // tag 0
	}

	function _decode_cs_escort_refresh_quality_request(d: SprotoTypeDeserialize) {
		let o = new cs_escort_refresh_quality_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.type = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_escort_refresh_quality_request(self: cs_escort_refresh_quality_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.type != undefined) {
			se.wi (self.type, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_escort_refresh_quality_request"] = {en: _encode_cs_escort_refresh_quality_request, de: _decode_cs_escort_refresh_quality_request}
	export class cs_escort_rob_list_request {
	}

	function _decode_cs_escort_rob_list_request(d: SprotoTypeDeserialize) {
		let o = new cs_escort_rob_list_request;
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

	function _encode_cs_escort_rob_list_request(self: cs_escort_rob_list_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_escort_rob_list_request"] = {en: _encode_cs_escort_rob_list_request, de: _decode_cs_escort_rob_list_request}
	export class cs_escort_rob_list_response {
		public escortList: escort_info[]; // tag 0
	}

	function _decode_cs_escort_rob_list_response(d: SprotoTypeDeserialize) {
		let o = new cs_escort_rob_list_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.escortList = d.roa("escort_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_escort_rob_list_response(self: cs_escort_rob_list_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.escortList != undefined) {
			se.woa ("escort_info", self.escortList, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_escort_rob_list_response"] = {en: _encode_cs_escort_rob_list_response, de: _decode_cs_escort_rob_list_response}
	export class cs_escort_rob_perform_request {
		public playerId: number; // tag 0
	}

	function _decode_cs_escort_rob_perform_request(d: SprotoTypeDeserialize) {
		let o = new cs_escort_rob_perform_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.playerId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_escort_rob_perform_request(self: cs_escort_rob_perform_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.playerId != undefined) {
			se.wi (self.playerId, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_escort_rob_perform_request"] = {en: _encode_cs_escort_rob_perform_request, de: _decode_cs_escort_rob_perform_request}
	export class escort_info {
		public quality: number; // tag 0
		public power: number; // tag 1
		public playerName: string; // tag 2
		public playerid: number; // tag 3
		public catchCount: number; // tag 4
		public finishTime: number; // tag 5
		public guildName: string; // tag 6
		public robMark: boolean; // tag 7
	}

	function _decode_escort_info(d: SprotoTypeDeserialize) {
		let o = new escort_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.quality = d.ri ();
				break;
			case 1:
				o.power = d.ri ();
				break;
			case 2:
				o.playerName = d.rs ();
				break;
			case 3:
				o.playerid = d.ri ();
				break;
			case 4:
				o.catchCount = d.ri ();
				break;
			case 5:
				o.finishTime = d.ri ();
				break;
			case 6:
				o.guildName = d.rs ();
				break;
			case 7:
				o.robMark = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_escort_info(self: escort_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 8);

		if (self.quality != undefined) {
			se.wi (self.quality, 0);
		}

		if (self.power != undefined) {
			se.wi (self.power, 1);
		}

		if (self.playerName != undefined) {
			se.ws (self.playerName, 2);
		}

		if (self.playerid != undefined) {
			se.wi (self.playerid, 3);
		}

		if (self.catchCount != undefined) {
			se.wi (self.catchCount, 4);
		}

		if (self.finishTime != undefined) {
			se.wi (self.finishTime, 5);
		}

		if (self.guildName != undefined) {
			se.ws (self.guildName, 6);
		}

		if (self.robMark != undefined) {
			se.wb (self.robMark, 7);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["escort_info"] = {en: _encode_escort_info, de: _decode_escort_info}
}

