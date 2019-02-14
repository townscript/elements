import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TsInputTextComponent, TsSelectComponent } from '@base/modules/ts-forms/components';
import { TsInputCardComponent } from './components/ts-input-card/ts-input-card.component';
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
  declarations: [TsInputTextComponent, TsSelectComponent, TsInputCardComponent],
  exports: [
    TsInputTextComponent, TsSelectComponent, TsInputCardComponent
  ]
})
export class TsFormsModule { }
