import application = require('tns-core-modules/application');
if (application.ios) {
  application.start({ moduleName: "main-page" });
} else if (application.android) {
  application.start({ moduleName: "main-page-android" });
}
