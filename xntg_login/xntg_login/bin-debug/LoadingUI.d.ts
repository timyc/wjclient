declare class LoadingUI extends egret.DisplayObjectContainer {
    private m_Textures;
    constructor();
    private bg;
    private blackBg;
    private m_Label;
    private tipx1;
    private tipx2;
    private tipImg;
    private img01;
    private img01Tag;
    private img01W;
    private img02;
    private img02Tag;
    private img02W;
    private label03;
    private imgWidth;
    private str;
    private s1;
    private e1;
    private s2;
    private e2;
    private t;
    private et;
    private pt;
    private preveTime;
    private mt;
    private NewBar(y);
    private onAddToStage(event);
    private SetBarValue(bar, value, tag);
    private _LoadTexture(index);
    private _Loaded(obj, name);
    Close(): void;
    private Update(time);
    private _OnClick();
    private _UpdatePro(value);
    UpdateText(str: string, p1: number, p2: number, time: number): void;
    SetText(str: string, p1: number, p2: number, time: number): void;
    private onResize();
    getElasticOut(t: number): number;
    sineOut(t: number): number;
}
