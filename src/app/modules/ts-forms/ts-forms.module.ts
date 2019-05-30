import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  TsPanelBodyComponent
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
    MatButtonModule,
    CreditCardDirectivesModule,
    MatRippleModule,
    MatProgressSpinnerModule
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
    TsPanelBodyComponent
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
    TsPanelBodyComponent
  ]
})
export class TsFormsModule { }
