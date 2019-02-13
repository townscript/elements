import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { TsInputTextComponent, TsSelectComponent } from '@base/modules/ts-forms/components';
import { TsInputCardComponent } from './components/ts-input-card/ts-input-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [TsInputTextComponent, TsSelectComponent, TsInputCardComponent],
  exports: [
    TsInputTextComponent, TsSelectComponent
  ]
})
export class TsFormsModule { }
