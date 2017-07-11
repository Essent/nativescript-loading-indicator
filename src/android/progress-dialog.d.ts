/// <reference path="../../node_modules/tns-platform-declarations/android.d.ts" />
import { OptionsCommon } from '../interfaces';
export declare class LoadingIndicator {
    private _progressDialog;
    show(options?: OptionsCommon): any;
    hide(): void;
    private _getContext();
}
