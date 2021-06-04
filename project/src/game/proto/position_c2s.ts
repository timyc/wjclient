// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_position_getawards_request {
		public no: number; // tag 0
	}

	function _decode_cs_position_getawards_request(d: SprotoTypeDeserialize) {
		let o = new cs_position_getawards_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.no = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_position_getawards_request(self: cs_position_getawards_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.no != undefined) {
			se.wi (self.no, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_position_getawards_request"] = {en: _encode_cs_position_getawards_request, de: _decode_cs_position_getawards_request}
	export class cs_position_getawards_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_position_getawards_response(d: SprotoTypeDeserialize) {
		let o = new cs_position_getawards_response;
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

	function _encode_cs_position_getawards_response(self: cs_position_getawards_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_position_getawards_response"] = {en: _encode_cs_position_getawards_response, de: _decode_cs_position_getawards_response}
}

