import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TsControlValueAccessor } from '../../../../core';
import { Option } from '../ts-select/ts-select.component';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'ts-radios',
  templateUrl: './ts-radios.component.html',
  styleUrls: [
    './ts-radios.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsRadiosComponent),
    multi: true
  }]
})
export class TsRadiosComponent extends TsControlValueAccessor implements OnInit {

  @Input() required = false;
  @Input() name: string;
  @Input() state = 'primary';
  @Input() disabled = false;
  @Input() options: Array<Option>;
  @Input() inline = false;

  private _radioValue: boolean;

  ngOnInit() {
  }

  set radioValue(val: boolean) {
    this._radioValue = val;
    if (this.required && val === undefined) {
      this.onChangePropagation();
    } else {
      this.onChangePropagation(val);
    }
  }

  get radioValue(): boolean {
    return this._radioValue;
  }

  writeValue(value: boolean): void {
    if (value) {
      this.radioValue = value;
    }
  }

  radioChange(event: MatRadioChange) {
    this.onTouchedPropagation(this.radioValue);
  }
}
