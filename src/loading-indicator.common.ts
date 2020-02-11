export interface OptionsCommon {
  message?: string;
  progress?: number;
  ios?: OptionsIOS;
  android?: OptionsAndroid;
}

export interface OptionsIOS {
  details?: string;
  square?: boolean;
  margin?: number;
  dimBackground?: boolean;
  hideBezel?: boolean; // hide bezel around indicator
  color?: string;
  backgroundColor?: string;
  view?: any; // UIView
  mode?: any;
  customView?: string;
}

export interface OptionsAndroid {
  cancelable?: boolean;
  indeterminate?: boolean;
  max?: number;
  progressNumberFormat?: string;
  progressPercentFormat?: number;
  progressStyle?: number;
  secondaryProgress?: number;
}

export interface CommonLoadingIndicator {
  show(options?: OptionsCommon): any;
  hide(targetView?: any): void;
}
