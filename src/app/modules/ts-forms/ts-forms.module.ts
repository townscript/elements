import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  TsInputTextComponent,
  TsSelectComponent,
  TsInputCardComponent,
  TsInputExpiryComponent,
  TsInputCvcComponent
} from '@base/modules/ts-forms/components';
import {CreditCardDirectivesModule} from 'angular-cc-library';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    CreditCardDirectivesModule
  ],
  declarations: [TsInputTextComponent, TsSelectComponent, TsInputCardComponent, TsInputExpiryComponent, TsInputCvcComponent],
  exports: [
    TsInputTextComponent, TsSelectComponent, TsInputCardComponent, TsInputExpiryComponent, TsInputCvcComponent
  ]
})
export class TsFormsModule { }
