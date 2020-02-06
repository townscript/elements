import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
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
  TsInputContactComponent,
  TsCheckboxComponent,
  TsTextareaComponent,
  ContactValidatorDirective,
  TsRadiosComponent,
  TsCheckboxListComponent,
  TsCalendarComponent,
  TsInputTimeComponent
} from './components/index';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InputTrimModule } from 'ng2-trim-directive';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
    MatCheckboxModule,
    InputTrimModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
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
    TsInputContactComponent,
    TsCheckboxComponent,
    TsTextareaComponent,
    ContactValidatorDirective,
    TsRadiosComponent,
    TsCheckboxListComponent,
    TsCalendarComponent,
    TsInputTimeComponent
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
    MatRippleModule,
    TsCheckboxComponent,
    TsTextareaComponent,
    TsRadiosComponent,
    TsCheckboxListComponent,
    TsCalendarComponent,
    TsInputTimeComponent
  ]
})
export class TsFormsModule { }
