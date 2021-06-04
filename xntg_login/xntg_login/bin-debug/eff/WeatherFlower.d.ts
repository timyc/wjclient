declare class WeatherFlower extends WeatherBase {
    MAX_COUNT: number;
    r_P_List: RainLine[];
    r_R_List: any[];
    r_Max: number;
    r_L_Delay: number;
    r_L_Last_Time: number;
    r_R_Delay: number;
    r_R_Last_Time: number;
    s_C_Delay: number;
    s_C_Last_Time: number;
    timerFrame: number;
    stageTarget: any;
    _lastTime: any;
    constructor();
    setStageTarget(t: any): void;
    onWeatherStart(): void;
    onWeatherUpdate(): void;
    onWeatherStop(): void;
    private Remove(e);
}
