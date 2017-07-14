import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent, DynamicList, ImageCmp, TextCmp} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicList,
    ImageCmp,
    TextCmp
  ],
  entryComponents: [
    ImageCmp,
    TextCmp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
