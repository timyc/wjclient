// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_guild_apply_list_request {
	}

	function _decode_cs_guild_apply_list_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_apply_list_request;
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

	function _encode_cs_guild_apply_list_request(self: cs_guild_apply_list_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_apply_list_request"] = {en: _encode_cs_guild_apply_list_request, de: _decode_cs_guild_apply_list_request}
	export class cs_guild_boss_info_request {
	}

	function _decode_cs_guild_boss_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_boss_info_request;
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

	function _encode_cs_guild_boss_info_request(self: cs_guild_boss_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_boss_info_request"] = {en: _encode_cs_guild_boss_info_request, de: _decode_cs_guild_boss_info_request}
	export class cs_guild_boss_pk_request {
	}

	function _decode_cs_guild_boss_pk_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_boss_pk_request;
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

	function _encode_cs_guild_boss_pk_request(self: cs_guild_boss_pk_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_boss_pk_request"] = {en: _encode_cs_guild_boss_pk_request, de: _decode_cs_guild_boss_pk_request}
	export class cs_guild_boss_reward_request {
	}

	function _decode_cs_guild_boss_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_boss_reward_request;
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

	function _encode_cs_guild_boss_reward_request(self: cs_guild_boss_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_boss_reward_request"] = {en: _encode_cs_guild_boss_reward_request, de: _decode_cs_guild_boss_reward_request}
	export class cs_guild_change_notice_request {
		public text: string; // tag 0
	}

	function _decode_cs_guild_change_notice_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_change_notice_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.text = d.rs ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_change_notice_request(self: cs_guild_change_notice_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.text != undefined) {
			se.ws (self.text, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_change_notice_request"] = {en: _encode_cs_guild_change_notice_request, de: _decode_cs_guild_change_notice_request}
	export class cs_guild_change_office_request {
		public playerid: number; // tag 0
		public office: number; // tag 1
	}

	function _decode_cs_guild_change_office_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_change_office_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.playerid = d.ri ();
				break;
			case 1:
				o.office = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_change_office_request(self: cs_guild_change_office_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.playerid != undefined) {
			se.wi (self.playerid, 0);
		}

		if (self.office != undefined) {
			se.wi (self.office, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_change_office_request"] = {en: _encode_cs_guild_change_office_request, de: _decode_cs_guild_change_office_request}
	export class cs_guild_create_request {
		public id: number; // tag 0
		public name: string; // tag 1
	}

	function _decode_cs_guild_create_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_create_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.name = d.rs ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_create_request(self: cs_guild_create_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.name != undefined) {
			se.ws (self.name, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_create_request"] = {en: _encode_cs_guild_create_request, de: _decode_cs_guild_create_request}
	export class cs_guild_donate_request {
		public id: number; // tag 0
	}

	function _decode_cs_guild_donate_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_donate_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_donate_request(self: cs_guild_donate_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_donate_request"] = {en: _encode_cs_guild_donate_request, de: _decode_cs_guild_donate_request}
	export class cs_guild_dungeon_info_request {
	}

	function _decode_cs_guild_dungeon_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_dungeon_info_request;
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

	function _encode_cs_guild_dungeon_info_request(self: cs_guild_dungeon_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_dungeon_info_request"] = {en: _encode_cs_guild_dungeon_info_request, de: _decode_cs_guild_dungeon_info_request}
	export class cs_guild_dungeon_info_response {
		public profitCount: number; // tag 0
		public assistCount: number; // tag 1
		public firstReach: number[]; // tag 2
	}

	function _decode_cs_guild_dungeon_info_response(d: SprotoTypeDeserialize) {
		let o = new cs_guild_dungeon_info_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.profitCount = d.ri ();
				break;
			case 1:
				o.assistCount = d.ri ();
				break;
			case 2:
				o.firstReach = d.ria ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_dungeon_info_response(self: cs_guild_dungeon_info_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.profitCount != undefined) {
			se.wi (self.profitCount, 0);
		}

		if (self.assistCount != undefined) {
			se.wi (self.assistCount, 1);
		}

		if (self.firstReach != undefined) {
			se.wia (self.firstReach, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_dungeon_info_response"] = {en: _encode_cs_guild_dungeon_info_response, de: _decode_cs_guild_dungeon_info_response}
	export class cs_guild_join_request {
		public id: number; // tag 0
	}

	function _decode_cs_guild_join_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_join_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_join_request(self: cs_guild_join_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_join_request"] = {en: _encode_cs_guild_join_request, de: _decode_cs_guild_join_request}
	export class cs_guild_kick_request {
		public playerid: number; // tag 0
	}

	function _decode_cs_guild_kick_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_kick_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.playerid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_kick_request(self: cs_guild_kick_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.playerid != undefined) {
			se.wi (self.playerid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_kick_request"] = {en: _encode_cs_guild_kick_request, de: _decode_cs_guild_kick_request}
	export class cs_guild_map_exchange_info_request {
	}

	function _decode_cs_guild_map_exchange_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_exchange_info_request;
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

	function _encode_cs_guild_map_exchange_info_request(self: cs_guild_map_exchange_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_exchange_info_request"] = {en: _encode_cs_guild_map_exchange_info_request, de: _decode_cs_guild_map_exchange_info_request}
	export class cs_guild_map_exchange_info_response {
		public exchangeInfo: exchange_info; // tag 0
	}

	function _decode_cs_guild_map_exchange_info_response(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_exchange_info_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.exchangeInfo = d.ro("exchange_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_map_exchange_info_response(self: cs_guild_map_exchange_info_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.exchangeInfo != undefined) {
			se.wo ("exchange_info", self.exchangeInfo, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_exchange_info_response"] = {en: _encode_cs_guild_map_exchange_info_response, de: _decode_cs_guild_map_exchange_info_response}
	export class cs_guild_map_exchange_pay_request {
		public id: number; // tag 0
	}

	function _decode_cs_guild_map_exchange_pay_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_exchange_pay_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_map_exchange_pay_request(self: cs_guild_map_exchange_pay_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_exchange_pay_request"] = {en: _encode_cs_guild_map_exchange_pay_request, de: _decode_cs_guild_map_exchange_pay_request}
	export class cs_guild_map_exchange_pay_response {
		public ret: boolean; // tag 0
		public exchangeInfo: exchange_info; // tag 1
	}

	function _decode_cs_guild_map_exchange_pay_response(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_exchange_pay_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			case 1:
				o.exchangeInfo = d.ro("exchange_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_map_exchange_pay_response(self: cs_guild_map_exchange_pay_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		if (self.exchangeInfo != undefined) {
			se.wo ("exchange_info", self.exchangeInfo, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_exchange_pay_response"] = {en: _encode_cs_guild_map_exchange_pay_response, de: _decode_cs_guild_map_exchange_pay_response}
	export class cs_guild_map_exchange_refresh_request {
	}

	function _decode_cs_guild_map_exchange_refresh_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_exchange_refresh_request;
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

	function _encode_cs_guild_map_exchange_refresh_request(self: cs_guild_map_exchange_refresh_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_exchange_refresh_request"] = {en: _encode_cs_guild_map_exchange_refresh_request, de: _decode_cs_guild_map_exchange_refresh_request}
	export class cs_guild_map_exchange_refresh_response {
		public ret: boolean; // tag 0
		public exchangeInfo: exchange_info; // tag 1
	}

	function _decode_cs_guild_map_exchange_refresh_response(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_exchange_refresh_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			case 1:
				o.exchangeInfo = d.ro("exchange_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_map_exchange_refresh_response(self: cs_guild_map_exchange_refresh_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		if (self.exchangeInfo != undefined) {
			se.wo ("exchange_info", self.exchangeInfo, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_exchange_refresh_response"] = {en: _encode_cs_guild_map_exchange_refresh_response, de: _decode_cs_guild_map_exchange_refresh_response}
	export class cs_guild_map_reward_request {
		public taskId: number; // tag 0
	}

	function _decode_cs_guild_map_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_reward_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.taskId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_map_reward_request(self: cs_guild_map_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.taskId != undefined) {
			se.wi (self.taskId, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_reward_request"] = {en: _encode_cs_guild_map_reward_request, de: _decode_cs_guild_map_reward_request}
	export class cs_guild_map_reward_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_guild_map_reward_response(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_reward_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_map_reward_response(self: cs_guild_map_reward_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_reward_response"] = {en: _encode_cs_guild_map_reward_response, de: _decode_cs_guild_map_reward_response}
	export class cs_guild_map_task_complete_request {
		public taskId: number; // tag 0
	}

	function _decode_cs_guild_map_task_complete_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_task_complete_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.taskId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_map_task_complete_request(self: cs_guild_map_task_complete_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.taskId != undefined) {
			se.wi (self.taskId, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_task_complete_request"] = {en: _encode_cs_guild_map_task_complete_request, de: _decode_cs_guild_map_task_complete_request}
	export class cs_guild_map_task_info_request {
	}

	function _decode_cs_guild_map_task_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_task_info_request;
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

	function _encode_cs_guild_map_task_info_request(self: cs_guild_map_task_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_task_info_request"] = {en: _encode_cs_guild_map_task_info_request, de: _decode_cs_guild_map_task_info_request}
	export class cs_guild_map_task_info_response {
		public taskInfo: task_info[]; // tag 0
	}

	function _decode_cs_guild_map_task_info_response(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_task_info_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.taskInfo = d.roa("task_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_map_task_info_response(self: cs_guild_map_task_info_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.taskInfo != undefined) {
			se.woa ("task_info", self.taskInfo, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_task_info_response"] = {en: _encode_cs_guild_map_task_info_response, de: _decode_cs_guild_map_task_info_response}
	export class cs_guild_map_task_quick_request {
		public taskId: number; // tag 0
	}

	function _decode_cs_guild_map_task_quick_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_task_quick_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.taskId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_map_task_quick_request(self: cs_guild_map_task_quick_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.taskId != undefined) {
			se.wi (self.taskId, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_task_quick_request"] = {en: _encode_cs_guild_map_task_quick_request, de: _decode_cs_guild_map_task_quick_request}
	export class cs_guild_map_task_quick_response {
		public ret: boolean; // tag 0
		public taskInfo: task_info; // tag 1
	}

	function _decode_cs_guild_map_task_quick_response(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_task_quick_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			case 1:
				o.taskInfo = d.ro("task_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_map_task_quick_response(self: cs_guild_map_task_quick_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		if (self.taskInfo != undefined) {
			se.wo ("task_info", self.taskInfo, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_task_quick_response"] = {en: _encode_cs_guild_map_task_quick_response, de: _decode_cs_guild_map_task_quick_response}
	export class cs_guild_map_task_reset_request {
		public taskId: number; // tag 0
	}

	function _decode_cs_guild_map_task_reset_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_task_reset_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.taskId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_map_task_reset_request(self: cs_guild_map_task_reset_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.taskId != undefined) {
			se.wi (self.taskId, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_task_reset_request"] = {en: _encode_cs_guild_map_task_reset_request, de: _decode_cs_guild_map_task_reset_request}
	export class cs_guild_map_task_reset_response {
		public ret: boolean; // tag 0
		public taskInfo: task_info; // tag 1
	}

	function _decode_cs_guild_map_task_reset_response(d: SprotoTypeDeserialize) {
		let o = new cs_guild_map_task_reset_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			case 1:
				o.taskInfo = d.ro("task_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_map_task_reset_response(self: cs_guild_map_task_reset_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		if (self.taskInfo != undefined) {
			se.wo ("task_info", self.taskInfo, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_map_task_reset_response"] = {en: _encode_cs_guild_map_task_reset_response, de: _decode_cs_guild_map_task_reset_response}
	export class cs_guild_member_recruit_request {
	}

	function _decode_cs_guild_member_recruit_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_member_recruit_request;
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

	function _encode_cs_guild_member_recruit_request(self: cs_guild_member_recruit_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_member_recruit_request"] = {en: _encode_cs_guild_member_recruit_request, de: _decode_cs_guild_member_recruit_request}
	export class cs_guild_peach_eat_request {
		public id: number; // tag 0
	}

	function _decode_cs_guild_peach_eat_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_peach_eat_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_peach_eat_request(self: cs_guild_peach_eat_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_peach_eat_request"] = {en: _encode_cs_guild_peach_eat_request, de: _decode_cs_guild_peach_eat_request}
	export class cs_guild_peach_info_request {
	}

	function _decode_cs_guild_peach_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_peach_info_request;
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

	function _encode_cs_guild_peach_info_request(self: cs_guild_peach_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_peach_info_request"] = {en: _encode_cs_guild_peach_info_request, de: _decode_cs_guild_peach_info_request}
	export class cs_guild_peach_reward_request {
		public id: number; // tag 0
	}

	function _decode_cs_guild_peach_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_peach_reward_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_peach_reward_request(self: cs_guild_peach_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_peach_reward_request"] = {en: _encode_cs_guild_peach_reward_request, de: _decode_cs_guild_peach_reward_request}
	export class cs_guild_protector_everyday_reward_request {
		public rewardId: number; // tag 0
	}

	function _decode_cs_guild_protector_everyday_reward_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_protector_everyday_reward_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.rewardId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_protector_everyday_reward_request(self: cs_guild_protector_everyday_reward_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.rewardId != undefined) {
			se.wi (self.rewardId, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_protector_everyday_reward_request"] = {en: _encode_cs_guild_protector_everyday_reward_request, de: _decode_cs_guild_protector_everyday_reward_request}
	export class cs_guild_protector_info_request {
	}

	function _decode_cs_guild_protector_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_protector_info_request;
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

	function _encode_cs_guild_protector_info_request(self: cs_guild_protector_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_protector_info_request"] = {en: _encode_cs_guild_protector_info_request, de: _decode_cs_guild_protector_info_request}
	export class cs_guild_protector_uplevel_request {
	}

	function _decode_cs_guild_protector_uplevel_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_protector_uplevel_request;
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

	function _encode_cs_guild_protector_uplevel_request(self: cs_guild_protector_uplevel_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_protector_uplevel_request"] = {en: _encode_cs_guild_protector_uplevel_request, de: _decode_cs_guild_protector_uplevel_request}
	export class cs_guild_rename_request {
		public guildName: string; // tag 0
	}

	function _decode_cs_guild_rename_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_rename_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.guildName = d.rs ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_rename_request(self: cs_guild_rename_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.guildName != undefined) {
			se.ws (self.guildName, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_rename_request"] = {en: _encode_cs_guild_rename_request, de: _decode_cs_guild_rename_request}
	export class cs_guild_sendchat_request {
		public str: string; // tag 0
	}

	function _decode_cs_guild_sendchat_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_sendchat_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.str = d.rs ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_sendchat_request(self: cs_guild_sendchat_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.str != undefined) {
			se.ws (self.str, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_sendchat_request"] = {en: _encode_cs_guild_sendchat_request, de: _decode_cs_guild_sendchat_request}
	export class cs_guild_sendshare_request {
		public shareId: number; // tag 0
		public params: client_chat_param[]; // tag 1
	}

	function _decode_cs_guild_sendshare_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_sendshare_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.shareId = d.ri ();
				break;
			case 1:
				o.params = d.roa("client_chat_param");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_sendshare_request(self: cs_guild_sendshare_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.shareId != undefined) {
			se.wi (self.shareId, 0);
		}

		if (self.params != undefined) {
			se.woa ("client_chat_param", self.params, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_sendshare_request"] = {en: _encode_cs_guild_sendshare_request, de: _decode_cs_guild_sendshare_request}
	export class cs_guild_setapply_request {
		public playerid: number; // tag 0
		public result: number; // tag 1
	}

	function _decode_cs_guild_setapply_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_setapply_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.playerid = d.ri ();
				break;
			case 1:
				o.result = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_setapply_request(self: cs_guild_setapply_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.playerid != undefined) {
			se.wi (self.playerid, 0);
		}

		if (self.result != undefined) {
			se.wi (self.result, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_setapply_request"] = {en: _encode_cs_guild_setapply_request, de: _decode_cs_guild_setapply_request}
	export class cs_guild_setautoadd_request {
		public auto: number; // tag 0
		public power: number; // tag 1
	}

	function _decode_cs_guild_setautoadd_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_setautoadd_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.auto = d.ri ();
				break;
			case 1:
				o.power = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_guild_setautoadd_request(self: cs_guild_setautoadd_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.auto != undefined) {
			se.wi (self.auto, 0);
		}

		if (self.power != undefined) {
			se.wi (self.power, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_setautoadd_request"] = {en: _encode_cs_guild_setautoadd_request, de: _decode_cs_guild_setautoadd_request}
	export class cs_guild_skill_info_request {
	}

	function _decode_cs_guild_skill_info_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_skill_info_request;
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

	function _encode_cs_guild_skill_info_request(self: cs_guild_skill_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_skill_info_request"] = {en: _encode_cs_guild_skill_info_request, de: _decode_cs_guild_skill_info_request}
	export class cs_guild_skill_learn_request {
	}

	function _decode_cs_guild_skill_learn_request(d: SprotoTypeDeserialize) {
		let o = new cs_guild_skill_learn_request;
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

	function _encode_cs_guild_skill_learn_request(self: cs_guild_skill_learn_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_guild_skill_learn_request"] = {en: _encode_cs_guild_skill_learn_request, de: _decode_cs_guild_skill_learn_request}
	export class exchange_info {
		public refreshTime: number; // tag 0
		public refreshCount: number; // tag 1
		public exchangeList: number[]; // tag 2
		public guildBag: guild_bag[]; // tag 3
		public exchangeMark: number; // tag 4
	}

	function _decode_exchange_info(d: SprotoTypeDeserialize) {
		let o = new exchange_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.refreshTime = d.ri ();
				break;
			case 1:
				o.refreshCount = d.ri ();
				break;
			case 2:
				o.exchangeList = d.ria ();
				break;
			case 3:
				o.guildBag = d.roa("guild_bag");
				break;
			case 4:
				o.exchangeMark = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_exchange_info(self: exchange_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.refreshTime != undefined) {
			se.wi (self.refreshTime, 0);
		}

		if (self.refreshCount != undefined) {
			se.wi (self.refreshCount, 1);
		}

		if (self.exchangeList != undefined) {
			se.wia (self.exchangeList, 2);
		}

		if (self.guildBag != undefined) {
			se.woa ("guild_bag", self.guildBag, 3);
		}

		if (self.exchangeMark != undefined) {
			se.wi (self.exchangeMark, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["exchange_info"] = {en: _encode_exchange_info, de: _decode_exchange_info}
	export class guild_bag {
		public id: number; // tag 0
		public count: number; // tag 1
	}

	function _decode_guild_bag(d: SprotoTypeDeserialize) {
		let o = new guild_bag;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.count = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_guild_bag(self: guild_bag, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.count != undefined) {
			se.wi (self.count, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["guild_bag"] = {en: _encode_guild_bag, de: _decode_guild_bag}
	export class task_info {
		public id: number; // tag 0
		public count: number; // tag 1
		public recount: number; // tag 2
		public rewardStatus: boolean; // tag 3
	}

	function _decode_task_info(d: SprotoTypeDeserialize) {
		let o = new task_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.count = d.ri ();
				break;
			case 2:
				o.recount = d.ri ();
				break;
			case 3:
				o.rewardStatus = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_task_info(self: task_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.count != undefined) {
			se.wi (self.count, 1);
		}

		if (self.recount != undefined) {
			se.wi (self.recount, 2);
		}

		if (self.rewardStatus != undefined) {
			se.wb (self.rewardStatus, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["task_info"] = {en: _encode_task_info, de: _decode_task_info}
}

