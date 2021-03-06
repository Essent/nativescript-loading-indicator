import * as common from './loading-indicator.common';
import { Color } from 'tns-core-modules/color';
import * as utils from 'tns-core-modules/utils/utils';

 declare var MBProgressHUD: any;
 declare var MBProgressHUDModeCustomView: any;
 declare var MBProgressHUDBackgroundStyle: any;
 declare var UIApplication: any;
 declare var UIImageView: any;
 declare var UIImage: any;

export class LoadingIndicator implements common.CommonLoadingIndicator {
  private _hud: any;

  // iOS allows indicator to be shown on specific views if desired
  // fallback to entire window
  private _targetView: any; // UIView

  public show(options?: common.OptionsCommon) {
    if (typeof options === 'undefined') options = {};
    let ios = options.ios;

    if (typeof this._hud === 'undefined') {
      // use specific target, fallback to entire window
      this._targetView = ios && ios.view ? ios.view : this._getRootWindow();
      this._hud = MBProgressHUD.showHUDAddedToAnimated(this._targetView, true);
    }

    // options
    if (options.message) this._hud.labelText = options.message;
    if (options.progress) this._hud.progress = options.progress;

    // ios specific
    if (ios) {
      if (ios.details) this._hud.detailsLabelText = ios.details;
      if (ios.square) this._hud.square = true;
      if (ios.margin) this._hud.margin = ios.margin;
      if (ios.dimBackground) this._hud.dimBackground = ios.dimBackground;
      if (ios.color) {
        // make activity and main label same color
        this._hud.activityIndicatorColor = new Color(ios.color).ios;
        this._hud.labelColor = new Color(ios.color).ios;
        if (ios.details) {
          // detail label same color with 80% opacity of that color
          // TODO: allow specific control
          this._hud.detailsLabelColor = new Color(ios.color).ios;
          this._hud.detailsLabel.opacity = .8;
        }
      }
      if (ios.backgroundColor) {
        this._hud.color = new Color(ios.backgroundColor).ios;
      }
      if (ios.hideBezel) {
        this._hud.backgroundColor = UIColor.clearColor;
        this._hud.bezelView.style = MBProgressHUDBackgroundStyle.SolidColor;
        this._hud.bezelView.backgroundColor = UIColor.clearColor;
      }

      if (ios.mode) {
        this._hud.mode = ios.mode;
        if (ios.mode === MBProgressHUDModeCustomView && ios.customView) {
          this._hud.customView = UIImageView.alloc().initWithImage(UIImage.imageNamed(ios.customView));
        }
      }
    }

    return this._hud;
  }

  public hide(targetView?: any) {
    targetView = targetView || this._targetView || this._getRootWindow();
    MBProgressHUD.hideHUDForViewAnimated(targetView, true);
    this._hud = undefined;
  }

  private _getRootWindow() {
    return utils.ios.getter(UIApplication, UIApplication.sharedApplication).windows[0];
  }
}
