declare class Base64 {
    static _keyStr: string;
    static encode(input: any): string;
    static decode(input: any): string;
    static _utf8_encode(string: any): string;
    static _utf8_decode(utftext: any): string;
}
