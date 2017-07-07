export interface OptionsAndroid {
    cancelable?: boolean;
    indeterminate?: boolean;
    max?: number;
    progressNumberFormat?: string;
    progressPercentFormat?: number;
    progressStyle?: number;
    secondaryProgress?: number;
}
export interface OptionsIOS {
    details?: string;
    square?: boolean;
    margin?: number;
    dimBackground?: boolean;
    hideBezel?: boolean;
    color?: string;
    backgroundColor?: string;
    view?: any;
    mode?: any;
    customView?: string;
}
export interface OptionsCommon {
    message?: string;
    progress?: number;
    ios?: OptionsIOS;
    android?: OptionsAndroid;
}
