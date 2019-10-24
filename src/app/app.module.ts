import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, BottomSheetOverviewExampleSheet } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TsFormsModule } from './modules/ts-forms/ts-forms.module';
import { FormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetOverviewExampleSheet
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TsFormsModule,
    MatBottomSheetModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BottomSheetOverviewExampleSheet]
})
export class AppModule { }
