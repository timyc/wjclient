// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_vip_get_awards_request {
		public lv: number; // tag 0
	}

	function _decode_cs_vip_get_awards_request(d: SprotoTypeDeserialize) {
		let o = new cs_vip_get_awards_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.lv = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_vip_get_awards_request(self: cs_vip_get_awards_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.lv != undefined) {
			se.wi (self.lv, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_vip_get_awards_request"] = {en: _encode_cs_vip_get_awards_request, de: _decode_cs_vip_get_awards_request}
	export class cs_vip_get_other_awards_request {
		public lv: number; // tag 0
	}

	function _decode_cs_vip_get_other_awards_request(d: SprotoTypeDeserialize) {
		let o = new cs_vip_get_other_awards_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.lv = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_vip_get_other_awards_request(self: cs_vip_get_other_awards_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.lv != undefined) {
			se.wi (self.lv, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_vip_get_other_awards_request"] = {en: _encode_cs_vip_get_other_awards_request, de: _decode_cs_vip_get_other_awards_request}
}

