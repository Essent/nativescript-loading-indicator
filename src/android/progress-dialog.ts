import {OptionsCommon} from '../interfaces';
import * as application from 'application'; 

declare var android: any; 
declare var com: any;

export class LoadingIndicator {
  private _progressDialog: any;  

  public show(options?: OptionsCommon) {
    let context = this._getContext();
    if (context) {
      if (typeof options === 'undefined') options = {};
      if (typeof this._progressDialog === 'undefined') {
        // Create
        let indeterminate = true;
        let cancelable = false;
        if (options.android) {
          if (options.android.indeterminate !== undefined) indeterminate = options.android.indeterminate;
          if (options.android.cancelable !== undefined) cancelable = options.android.cancelable;
        } 
        const progressBar = com.kaopiz.kprogresshud.KProgressHUD;
        this._progressDialog = progressBar.create(context).show();  
      } 

      return this._progressDialog;
    }
  }

  public hide() {
    if (typeof this._progressDialog !== 'undefined') { 
      this._progressDialog.dismiss();
    }
    this._progressDialog = undefined;
  }

  private _getContext() {
    return application.android.foregroundActivity;
  }
}
