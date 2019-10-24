import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutofocusFixModule } from 'ngx-autofocus-fix';

import {
  TsInputTextComponent,
  TsSelectComponent,
  TsInputCardComponent,
  TsInputExpiryComponent,
  TsInputCvcComponent,
  TsButtonComponent,
  TsBoxRadioComponent,
  TsProgressSpinnerComponent,
  TsPanelComponent,
  TsPanelHeaderComponent,
  TsPanelBodyComponent,
  TsInputContactComponent
} from './components/index';
import { CreditCardDirectivesModule } from 'angular-cc-library';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    CreditCardDirectivesModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    AutofocusFixModule.forRoot({ triggerDetectChanges: true })
  ],
  declarations: [
    TsInputTextComponent,
    TsSelectComponent,
    TsInputCardComponent,
    TsInputExpiryComponent,
    TsInputCvcComponent,
    TsButtonComponent,
    TsBoxRadioComponent,
    TsProgressSpinnerComponent,
    TsPanelComponent,
    TsPanelHeaderComponent,
    TsPanelBodyComponent,
    TsInputContactComponent
  ],
  exports: [
    TsInputTextComponent,
    TsSelectComponent,
    TsInputCardComponent,
    TsInputExpiryComponent,
    TsInputCvcComponent,
    TsButtonComponent,
    TsBoxRadioComponent,
    TsProgressSpinnerComponent,
    MatDialogModule,
    TsPanelComponent,
    TsPanelHeaderComponent,
    TsPanelBodyComponent,
    TsInputContactComponent,
    MatRippleModule
  ]
})
export class TsFormsModule { }
