import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
  TsInputTimeComponent,
  TsSlideToggleComponent,
  TsSelectEditComponent,
  TsInputFileComponent
} from './components/index';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InputTrimModule } from 'ng2-trim-directive';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PreventCopyPasteDirective } from 'src/app/shared/directives/prevent-copy-paste/prevent-copy-paste.directive';

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
    MatSlideToggleModule,
    MatAutocompleteModule,
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
    TsInputTimeComponent,
    TsSlideToggleComponent,
    TsSelectEditComponent,
    TsInputFileComponent,
    PreventCopyPasteDirective
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
    TsInputTimeComponent,
    TsSlideToggleComponent,
    TsSelectEditComponent,
    TsInputFileComponent
  ]
})
export class TsFormsModule { }
