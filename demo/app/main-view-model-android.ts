import { Observable } from 'data/observable';
import { Page } from 'ui/page';
import { LoadingIndicator } from '@essent/nativescript-loading-indicator';

export class LoadingAndroidTest extends Observable {
  private indicator: LoadingIndicator;

  constructor(page: Page) {
    super();
    this.indicator = new LoadingIndicator();
  }

  public showLoader() {
    this.indicator.show();
    this.demoLoader();
  }

  public showLoaderIndeterminate() {
    this.indicator.show({ android: { indeterminate: true } });
    this.demoProgress();
  }

  private demoLoader() {
    setTimeout(() => {
      this.indicator.hide();
    }, 3000);
  }

  private demoProgress() {
    setTimeout(() => {
      this.indicator.show({ progress: 15 });
    }, 500);
    setTimeout(() => {
      this.indicator.show({ progress: 35 });
    }, 1500);
    setTimeout(() => {
      this.indicator.show({ progress: 65 });
    }, 2500);
    setTimeout(() => {
      this.indicator.show({ progress: 85 });
    }, 4000);
    setTimeout(() => {
      this.indicator.show({ progress: 99 });
    }, 4500);
    setTimeout(() => {
      this.indicator.hide();
    }, 5000);
  }
};
