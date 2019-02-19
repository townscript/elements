import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  TsInputTextComponent,
  TsSelectComponent,
  TsInputCardComponent,
  TsInputExpiryComponent,
  TsInputCvcComponent,
  TsButtonComponent
} from './components';
import {CreditCardDirectivesModule} from 'angular-cc-library';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CreditCardDirectivesModule
  ],
  declarations: [
    TsInputTextComponent,
    TsSelectComponent,
    TsInputCardComponent,
    TsInputExpiryComponent,
    TsInputCvcComponent,
    TsButtonComponent
  ],
  exports: [
    TsInputTextComponent,
    TsSelectComponent,
    TsInputCardComponent,
    TsInputExpiryComponent,
    TsInputCvcComponent,
    TsButtonComponent
  ]
})
export class TsFormsModule { }
