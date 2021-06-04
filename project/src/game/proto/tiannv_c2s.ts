// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_tiannv_wash_replace_req_request {
		public pos: number; // tag 0
	}

	function _decode_cs_tiannv_wash_replace_req_request(d: SprotoTypeDeserialize) {
		let o = new cs_tiannv_wash_replace_req_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.pos = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_tiannv_wash_replace_req_request(self: cs_tiannv_wash_replace_req_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.pos != undefined) {
			se.wi (self.pos, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_tiannv_wash_replace_req_request"] = {en: _encode_cs_tiannv_wash_replace_req_request, de: _decode_cs_tiannv_wash_replace_req_request}
	export class cs_tiannv_wash_req_request {
		public pos: number; // tag 0
		public washType: number; // tag 1
		public lock: number[]; // tag 2
	}

	function _decode_cs_tiannv_wash_req_request(d: SprotoTypeDeserialize) {
		let o = new cs_tiannv_wash_req_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.pos = d.ri ();
				break;
			case 1:
				o.washType = d.ri ();
				break;
			case 2:
				o.lock = d.ria ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_tiannv_wash_req_request(self: cs_tiannv_wash_req_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.pos != undefined) {
			se.wi (self.pos, 0);
		}

		if (self.washType != undefined) {
			se.wi (self.washType, 1);
		}

		if (self.lock != undefined) {
			se.wia (self.lock, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_tiannv_wash_req_request"] = {en: _encode_cs_tiannv_wash_req_request, de: _decode_cs_tiannv_wash_req_request}
}

