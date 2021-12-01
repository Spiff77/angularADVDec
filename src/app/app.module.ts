import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AmModule} from './am/am.module';
import {BmModule} from './bm/bm.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AmModule,
    BmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
