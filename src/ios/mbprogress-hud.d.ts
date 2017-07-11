/// <reference path="../../node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="objc!MBProgressHUD.d.ts" />
import { OptionsCommon } from '../interfaces';
export declare class LoadingIndicator {
    private _hud;
    private _targetView;
    show(options?: OptionsCommon): any;
    hide(targetView?: any): void;
    private _getRootWindow();
}
