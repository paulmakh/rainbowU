﻿import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';
//import Appmodule = require("./app.module");

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);