import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TsControlValueAccessor } from '../../../../core';
import { Option } from '../ts-select/ts-select.component';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'ts-checkbox-list',
  templateUrl: './ts-checkbox-list.component.html',
  styleUrls: [
    './ts-checkbox-list.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsCheckboxListComponent),
    multi: true
  }]
})
export class TsCheckboxListComponent extends TsControlValueAccessor implements OnInit {

  @Input() required = false;
  @Input() name: string;
  @Input() state = 'primary';
  @Input() disabled = false;
  @Input() options: Array<Option>;
  @Input() inline = false;

  private _selectedValues: Array<Option> = [];

  ngOnInit() {
  }

  set selectedValues(values: Array<Option>) {
    this._selectedValues = values;
    if (this.required && (!values || values.length < 1)) {
      this.onChangePropagation();
      this.onTouchedPropagation();
    } else {
      this.onChangePropagation(values);
      this.onTouchedPropagation(values);
    }
  }

  get selectedValues(): Array<Option> {
    return this._selectedValues;
  }

  writeValue(values: Array<Option>): void {
    this.selectedValues = values;
  }

  private readonly getOption = (value: any): Option => {
    return this.options.filter(o => o.value === value)[0];
  }

  checkBoxChange = (event: MatCheckboxChange) => {
    const value = event.source.value;
    if (event.checked) {
      if (this.selectedValues) {
        this.selectedValues = this.selectedValues.concat(this.getOption(value));
      } else {
        this.selectedValues = [this.getOption(value)];
      }
    } else {
      this.selectedValues = this.selectedValues.filter(o => o.value !== value);
    }
  }

  checked = (opt: Option): boolean => {
    return this.selectedValues && this.selectedValues.includes(opt);
  }
}
