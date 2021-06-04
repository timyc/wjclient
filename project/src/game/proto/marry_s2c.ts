// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class marry_friend {
		public dbid: number; // tag 0
		public ispropose: boolean; // tag 1
		public ismarry: boolean; // tag 2
	}

	function _decode_marry_friend(d: SprotoTypeDeserialize) {
		let o = new marry_friend;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.dbid = d.ri ();
				break;
			case 1:
				o.ispropose = d.rb ();
				break;
			case 2:
				o.ismarry = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_marry_friend(self: marry_friend, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.dbid != undefined) {
			se.wi (self.dbid, 0);
		}

		if (self.ispropose != undefined) {
			se.wb (self.ispropose, 1);
		}

		if (self.ismarry != undefined) {
			se.wb (self.ismarry, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["marry_friend"] = {en: _encode_marry_friend, de: _decode_marry_friend}
	export class marry_love {
		public lovetype: number; // tag 0
		public daycount: number; // tag 1
		public count: number; // tag 2
		public time: number; // tag 3
	}

	function _decode_marry_love(d: SprotoTypeDeserialize) {
		let o = new marry_love;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.lovetype = d.ri ();
				break;
			case 1:
				o.daycount = d.ri ();
				break;
			case 2:
				o.count = d.ri ();
				break;
			case 3:
				o.time = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_marry_love(self: marry_love, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.lovetype != undefined) {
			se.wi (self.lovetype, 0);
		}

		if (self.daycount != undefined) {
			se.wi (self.daycount, 1);
		}

		if (self.count != undefined) {
			se.wi (self.count, 2);
		}

		if (self.time != undefined) {
			se.wi (self.time, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["marry_love"] = {en: _encode_marry_love, de: _decode_marry_love}
	export class marry_object {
		public dbid: number; // tag 0
		public name: string; // tag 1
		public level: number; // tag 2
		public job: number; // tag 3
		public sex: number; // tag 4
		public power: number; // tag 5
		public shows: number[]; // tag 6
	}

	function _decode_marry_object(d: SprotoTypeDeserialize) {
		let o = new marry_object;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.dbid = d.ri ();
				break;
			case 1:
				o.name = d.rs ();
				break;
			case 2:
				o.level = d.ri ();
				break;
			case 3:
				o.job = d.ri ();
				break;
			case 4:
				o.sex = d.ri ();
				break;
			case 5:
				o.power = d.ri ();
				break;
			case 6:
				o.shows = d.ria ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_marry_object(self: marry_object, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 7);

		if (self.dbid != undefined) {
			se.wi (self.dbid, 0);
		}

		if (self.name != undefined) {
			se.ws (self.name, 1);
		}

		if (self.level != undefined) {
			se.wi (self.level, 2);
		}

		if (self.job != undefined) {
			se.wi (self.job, 3);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 4);
		}

		if (self.power != undefined) {
			se.wi (self.power, 5);
		}

		if (self.shows != undefined) {
			se.wia (self.shows, 6);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["marry_object"] = {en: _encode_marry_object, de: _decode_marry_object}
	export class sc_marry_answer_request {
		public dbid: number; // tag 0
		public name: string; // tag 1
		public grade: number; // tag 2
		public agree: number; // tag 3
	}

	function _decode_sc_marry_answer_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_answer_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.dbid = d.ri ();
				break;
			case 1:
				o.name = d.rs ();
				break;
			case 2:
				o.grade = d.ri ();
				break;
			case 3:
				o.agree = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_answer_request(self: sc_marry_answer_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.dbid != undefined) {
			se.wi (self.dbid, 0);
		}

		if (self.name != undefined) {
			se.ws (self.name, 1);
		}

		if (self.grade != undefined) {
			se.wi (self.grade, 2);
		}

		if (self.agree != undefined) {
			se.wi (self.agree, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_answer_request"] = {en: _encode_sc_marry_answer_request, de: _decode_sc_marry_answer_request}
	export class sc_marry_asked_request {
		public fromid: number; // tag 0
		public name: string; // tag 1
		public grade: number; // tag 2
		public spouse: number; // tag 3
		public power: number; // tag 4
		public level: number; // tag 5
		public job: number; // tag 6
		public sex: number; // tag 7
	}

	function _decode_sc_marry_asked_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_asked_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.fromid = d.ri ();
				break;
			case 1:
				o.name = d.rs ();
				break;
			case 2:
				o.grade = d.ri ();
				break;
			case 3:
				o.spouse = d.ri ();
				break;
			case 4:
				o.power = d.ri ();
				break;
			case 5:
				o.level = d.ri ();
				break;
			case 6:
				o.job = d.ri ();
				break;
			case 7:
				o.sex = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_asked_request(self: sc_marry_asked_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 8);

		if (self.fromid != undefined) {
			se.wi (self.fromid, 0);
		}

		if (self.name != undefined) {
			se.ws (self.name, 1);
		}

		if (self.grade != undefined) {
			se.wi (self.grade, 2);
		}

		if (self.spouse != undefined) {
			se.wi (self.spouse, 3);
		}

		if (self.power != undefined) {
			se.wi (self.power, 4);
		}

		if (self.level != undefined) {
			se.wi (self.level, 5);
		}

		if (self.job != undefined) {
			se.wi (self.job, 6);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 7);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_asked_request"] = {en: _encode_sc_marry_asked_request, de: _decode_sc_marry_asked_request}
	export class sc_marry_divorce_bro_request {
		public ids: number[]; // tag 0
	}

	function _decode_sc_marry_divorce_bro_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_divorce_bro_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ids = d.ria ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_divorce_bro_request(self: sc_marry_divorce_bro_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ids != undefined) {
			se.wia (self.ids, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_divorce_bro_request"] = {en: _encode_sc_marry_divorce_bro_request, de: _decode_sc_marry_divorce_bro_request}
	export class sc_marry_flower_bro_request {
		public quantity: number; // tag 0
		public effect: number; // tag 1
	}

	function _decode_sc_marry_flower_bro_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_flower_bro_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.quantity = d.ri ();
				break;
			case 1:
				o.effect = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_flower_bro_request(self: sc_marry_flower_bro_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.quantity != undefined) {
			se.wi (self.quantity, 0);
		}

		if (self.effect != undefined) {
			se.wi (self.effect, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_flower_bro_request"] = {en: _encode_sc_marry_flower_bro_request, de: _decode_sc_marry_flower_bro_request}
	export class sc_marry_friends_request {
		public friends: marry_friend[]; // tag 0
		public today: number; // tag 1
	}

	function _decode_sc_marry_friends_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_friends_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.friends = d.roa("marry_friend");
				break;
			case 1:
				o.today = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_friends_request(self: sc_marry_friends_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.friends != undefined) {
			se.woa ("marry_friend", self.friends, 0);
		}

		if (self.today != undefined) {
			se.wi (self.today, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_friends_request"] = {en: _encode_sc_marry_friends_request, de: _decode_sc_marry_friends_request}
	export class sc_marry_house_partner_up_request {
		public upnum: number; // tag 0
		public times: number[]; // tag 1
	}

	function _decode_sc_marry_house_partner_up_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_house_partner_up_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.upnum = d.ri ();
				break;
			case 1:
				o.times = d.ria ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_house_partner_up_request(self: sc_marry_house_partner_up_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.upnum != undefined) {
			se.wi (self.upnum, 0);
		}

		if (self.times != undefined) {
			se.wia (self.times, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_house_partner_up_request"] = {en: _encode_sc_marry_house_partner_up_request, de: _decode_sc_marry_house_partner_up_request}
	export class sc_marry_info_request {
		public marry: boolean; // tag 0
		public husband: marry_object; // tag 1
		public wife: marry_object; // tag 2
		public level: number; // tag 3
		public intimate: number; // tag 4
		public intimacy: number; // tag 5
		public grade: number; // tag 6
		public houselv: number; // tag 7
		public houseup: number; // tag 8
		public time: number; // tag 9
		public today: number; // tag 10
	}

	function _decode_sc_marry_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.marry = d.rb ();
				break;
			case 1:
				o.husband = d.ro("marry_object");
				break;
			case 2:
				o.wife = d.ro("marry_object");
				break;
			case 3:
				o.level = d.ri ();
				break;
			case 4:
				o.intimate = d.ri ();
				break;
			case 5:
				o.intimacy = d.ri ();
				break;
			case 6:
				o.grade = d.ri ();
				break;
			case 7:
				o.houselv = d.ri ();
				break;
			case 8:
				o.houseup = d.ri ();
				break;
			case 9:
				o.time = d.ri ();
				break;
			case 10:
				o.today = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_info_request(self: sc_marry_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 11);

		if (self.marry != undefined) {
			se.wb (self.marry, 0);
		}

		if (self.husband != undefined) {
			se.wo ("marry_object", self.husband, 1);
		}

		if (self.wife != undefined) {
			se.wo ("marry_object", self.wife, 2);
		}

		if (self.level != undefined) {
			se.wi (self.level, 3);
		}

		if (self.intimate != undefined) {
			se.wi (self.intimate, 4);
		}

		if (self.intimacy != undefined) {
			se.wi (self.intimacy, 5);
		}

		if (self.grade != undefined) {
			se.wi (self.grade, 6);
		}

		if (self.houselv != undefined) {
			se.wi (self.houselv, 7);
		}

		if (self.houseup != undefined) {
			se.wi (self.houseup, 8);
		}

		if (self.time != undefined) {
			se.wi (self.time, 9);
		}

		if (self.today != undefined) {
			se.wi (self.today, 10);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_info_request"] = {en: _encode_sc_marry_info_request, de: _decode_sc_marry_info_request}
	export class sc_marry_invitation_request {
		public husband: marry_object; // tag 0
		public wife: marry_object; // tag 1
		public dbid: number; // tag 2
		public effect: number; // tag 3
	}

	function _decode_sc_marry_invitation_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_invitation_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.husband = d.ro("marry_object");
				break;
			case 1:
				o.wife = d.ro("marry_object");
				break;
			case 2:
				o.dbid = d.ri ();
				break;
			case 3:
				o.effect = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_invitation_request(self: sc_marry_invitation_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.husband != undefined) {
			se.wo ("marry_object", self.husband, 0);
		}

		if (self.wife != undefined) {
			se.wo ("marry_object", self.wife, 1);
		}

		if (self.dbid != undefined) {
			se.wi (self.dbid, 2);
		}

		if (self.effect != undefined) {
			se.wi (self.effect, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_invitation_request"] = {en: _encode_sc_marry_invitation_request, de: _decode_sc_marry_invitation_request}
	export class sc_marry_login_tip_request {
		public partner: marry_object; // tag 0
	}

	function _decode_sc_marry_login_tip_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_login_tip_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.partner = d.ro("marry_object");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_login_tip_request(self: sc_marry_login_tip_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.partner != undefined) {
			se.wo ("marry_object", self.partner, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_login_tip_request"] = {en: _encode_sc_marry_login_tip_request, de: _decode_sc_marry_login_tip_request}
	export class sc_marry_love_info_request {
		public loves: marry_love[]; // tag 0
	}

	function _decode_sc_marry_love_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_love_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.loves = d.roa("marry_love");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_love_info_request(self: sc_marry_love_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.loves != undefined) {
			se.woa ("marry_love", self.loves, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_love_info_request"] = {en: _encode_sc_marry_love_info_request, de: _decode_sc_marry_love_info_request}
	export class sc_marry_new_request {
	}

	function _decode_sc_marry_new_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_new_request;
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

	function _encode_sc_marry_new_request(self: sc_marry_new_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_new_request"] = {en: _encode_sc_marry_new_request, de: _decode_sc_marry_new_request}
	export class sc_marry_recv_flower_request {
		public name: string; // tag 0
		public intimacy: number; // tag 1
		public flower: string; // tag 2
		public count: number; // tag 3
	}

	function _decode_sc_marry_recv_flower_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_recv_flower_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.intimacy = d.ri ();
				break;
			case 2:
				o.flower = d.rs ();
				break;
			case 3:
				o.count = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_recv_flower_request(self: sc_marry_recv_flower_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.intimacy != undefined) {
			se.wi (self.intimacy, 1);
		}

		if (self.flower != undefined) {
			se.ws (self.flower, 2);
		}

		if (self.count != undefined) {
			se.wi (self.count, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_recv_flower_request"] = {en: _encode_sc_marry_recv_flower_request, de: _decode_sc_marry_recv_flower_request}
	export class sc_marry_remove_asked_request {
		public fromid: number; // tag 0
	}

	function _decode_sc_marry_remove_asked_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_remove_asked_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.fromid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_remove_asked_request(self: sc_marry_remove_asked_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.fromid != undefined) {
			se.wi (self.fromid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_remove_asked_request"] = {en: _encode_sc_marry_remove_asked_request, de: _decode_sc_marry_remove_asked_request}
	export class sc_marry_token_status_request {
		public grade: number; // tag 0
		public isopen: boolean; // tag 1
	}

	function _decode_sc_marry_token_status_request(d: SprotoTypeDeserialize) {
		let o = new sc_marry_token_status_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.grade = d.ri ();
				break;
			case 1:
				o.isopen = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_marry_token_status_request(self: sc_marry_token_status_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.grade != undefined) {
			se.wi (self.grade, 0);
		}

		if (self.isopen != undefined) {
			se.wb (self.isopen, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_marry_token_status_request"] = {en: _encode_sc_marry_token_status_request, de: _decode_sc_marry_token_status_request}
}

