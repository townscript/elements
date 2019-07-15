import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
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
