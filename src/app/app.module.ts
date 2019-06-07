import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, BottomSheetOverviewExampleSheet } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TsFormsModule} from './modules/ts-forms/ts-forms.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetOverviewExampleSheet
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TsFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BottomSheetOverviewExampleSheet]
})
export class AppModule { }
