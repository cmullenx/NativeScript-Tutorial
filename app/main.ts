import { setStatusBarColors } from "./utils/status-bar-util";
setStatusBarColors();
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
