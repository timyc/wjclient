// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class chat_data {
		public type: number; // tag 0
		public id: number; // tag 1
		public name: string; // tag 2
		public job: number; // tag 4
		public sex: number; // tag 5
		public vip: number; // tag 6
		public str: string; // tag 7
		public serverid: number; // tag 8
		public shareId: number; // tag 9
		public share: share_date; // tag 10
		public time: number; // tag 11
		public headframe: number; // tag 12
	}

	function _decode_chat_data(d: SprotoTypeDeserialize) {
		let o = new chat_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.type = d.ri ();
				break;
			case 1:
				o.id = d.ri ();
				break;
			case 2:
				o.name = d.rs ();
				break;
			case 4:
				o.job = d.ri ();
				break;
			case 5:
				o.sex = d.ri ();
				break;
			case 6:
				o.vip = d.ri ();
				break;
			case 7:
				o.str = d.rs ();
				break;
			case 8:
				o.serverid = d.ri ();
				break;
			case 9:
				o.shareId = d.ri ();
				break;
			case 10:
				o.share = d.ro("share_date");
				break;
			case 11:
				o.time = d.ri ();
				break;
			case 12:
				o.headframe = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_chat_data(self: chat_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 13);

		if (self.type != undefined) {
			se.wi (self.type, 0);
		}

		if (self.id != undefined) {
			se.wi (self.id, 1);
		}

		if (self.name != undefined) {
			se.ws (self.name, 2);
		}

		if (self.job != undefined) {
			se.wi (self.job, 4);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 5);
		}

		if (self.vip != undefined) {
			se.wi (self.vip, 6);
		}

		if (self.str != undefined) {
			se.ws (self.str, 7);
		}

		if (self.serverid != undefined) {
			se.wi (self.serverid, 8);
		}

		if (self.shareId != undefined) {
			se.wi (self.shareId, 9);
		}

		if (self.share != undefined) {
			se.wo ("share_date", self.share, 10);
		}

		if (self.time != undefined) {
			se.wi (self.time, 11);
		}

		if (self.headframe != undefined) {
			se.wi (self.headframe, 12);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["chat_data"] = {en: _encode_chat_data, de: _decode_chat_data}
	export class chat_need_infos {
		public player: chat_player_data[]; // tag 0
		public role: chat_role_data[]; // tag 1
		public equip: equip_data; // tag 2
		public pet: pet_info; // tag 3
	}

	function _decode_chat_need_infos(d: SprotoTypeDeserialize) {
		let o = new chat_need_infos;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.player = d.roa("chat_player_data");
				break;
			case 1:
				o.role = d.roa("chat_role_data");
				break;
			case 2:
				o.equip = d.ro("equip_data");
				break;
			case 3:
				o.pet = d.ro("pet_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_chat_need_infos(self: chat_need_infos, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.player != undefined) {
			se.woa ("chat_player_data", self.player, 0);
		}

		if (self.role != undefined) {
			se.woa ("chat_role_data", self.role, 1);
		}

		if (self.equip != undefined) {
			se.wo ("equip_data", self.equip, 2);
		}

		if (self.pet != undefined) {
			se.wo ("pet_info", self.pet, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["chat_need_infos"] = {en: _encode_chat_need_infos, de: _decode_chat_need_infos}
	export class chat_player_data {
		public name: string; // tag 0
		public id: number; // tag 1
		public vip: number; // tag 2
	}

	function _decode_chat_player_data(d: SprotoTypeDeserialize) {
		let o = new chat_player_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.id = d.ri ();
				break;
			case 2:
				o.vip = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_chat_player_data(self: chat_player_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.id != undefined) {
			se.wi (self.id, 1);
		}

		if (self.vip != undefined) {
			se.wi (self.vip, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["chat_player_data"] = {en: _encode_chat_player_data, de: _decode_chat_player_data}
	export class chat_role_data {
		public job: number; // tag 0
		public sex: number; // tag 1
	}

	function _decode_chat_role_data(d: SprotoTypeDeserialize) {
		let o = new chat_role_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.job = d.ri ();
				break;
			case 1:
				o.sex = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_chat_role_data(self: chat_role_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.job != undefined) {
			se.wi (self.job, 0);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["chat_role_data"] = {en: _encode_chat_role_data, de: _decode_chat_role_data}
	export class sc_chat_filte_list_request {
		public filter: number; // tag 0
	}

	function _decode_sc_chat_filte_list_request(d: SprotoTypeDeserialize) {
		let o = new sc_chat_filte_list_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.filter = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_chat_filte_list_request(self: sc_chat_filte_list_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.filter != undefined) {
			se.wi (self.filter, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_chat_filte_list_request"] = {en: _encode_sc_chat_filte_list_request, de: _decode_sc_chat_filte_list_request}
	export class sc_chat_init_msg_request {
		public chatDatas: chat_data[]; // tag 0
	}

	function _decode_sc_chat_init_msg_request(d: SprotoTypeDeserialize) {
		let o = new sc_chat_init_msg_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.chatDatas = d.roa("chat_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_chat_init_msg_request(self: sc_chat_init_msg_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.chatDatas != undefined) {
			se.woa ("chat_data", self.chatDatas, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_chat_init_msg_request"] = {en: _encode_sc_chat_init_msg_request, de: _decode_sc_chat_init_msg_request}
	export class sc_chat_is_send_success_request {
		public success: boolean; // tag 0
	}

	function _decode_sc_chat_is_send_success_request(d: SprotoTypeDeserialize) {
		let o = new sc_chat_is_send_success_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.success = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_chat_is_send_success_request(self: sc_chat_is_send_success_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.success != undefined) {
			se.wb (self.success, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_chat_is_send_success_request"] = {en: _encode_sc_chat_is_send_success_request, de: _decode_sc_chat_is_send_success_request}
	export class sc_chat_new_msg_request {
		public chatData: chat_data; // tag 0
	}

	function _decode_sc_chat_new_msg_request(d: SprotoTypeDeserialize) {
		let o = new sc_chat_new_msg_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.chatData = d.ro("chat_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_chat_new_msg_request(self: sc_chat_new_msg_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.chatData != undefined) {
			se.wo ("chat_data", self.chatData, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_chat_new_msg_request"] = {en: _encode_sc_chat_new_msg_request, de: _decode_sc_chat_new_msg_request}
	export class sc_chat_private_init_msg_request {
		public session: string; // tag 0
		public chatData: chat_data[]; // tag 1
	}

	function _decode_sc_chat_private_init_msg_request(d: SprotoTypeDeserialize) {
		let o = new sc_chat_private_init_msg_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.session = d.rs ();
				break;
			case 1:
				o.chatData = d.roa("chat_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_chat_private_init_msg_request(self: sc_chat_private_init_msg_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.session != undefined) {
			se.ws (self.session, 0);
		}

		if (self.chatData != undefined) {
			se.woa ("chat_data", self.chatData, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_chat_private_init_msg_request"] = {en: _encode_sc_chat_private_init_msg_request, de: _decode_sc_chat_private_init_msg_request}
	export class sc_chat_private_new_msg_request {
		public session: string; // tag 0
		public chatData: chat_data; // tag 1
	}

	function _decode_sc_chat_private_new_msg_request(d: SprotoTypeDeserialize) {
		let o = new sc_chat_private_new_msg_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.session = d.rs ();
				break;
			case 1:
				o.chatData = d.ro("chat_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_chat_private_new_msg_request(self: sc_chat_private_new_msg_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.session != undefined) {
			se.ws (self.session, 0);
		}

		if (self.chatData != undefined) {
			se.wo ("chat_data", self.chatData, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_chat_private_new_msg_request"] = {en: _encode_sc_chat_private_new_msg_request, de: _decode_sc_chat_private_new_msg_request}
}

