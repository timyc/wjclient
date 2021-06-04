declare class WeatherBase {
    _runing: boolean;
    _first: boolean;
    timerFrame: number;
    index: number;
    imageList: egret.Texture[];
    private m_Temp;
    constructor(t: any);
    playWeather(tex: egret.Texture[]): void;
    stopWeather(): void;
    weatherUpdateHandler(time: number): boolean;
    onWeatherInit(): void;
    onWeatherStart(): void;
    onWeatherUpdate(): void;
    onWeatherStop(): void;
}
