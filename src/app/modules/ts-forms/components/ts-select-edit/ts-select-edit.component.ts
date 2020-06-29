import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { config, TsControlValueAccessor } from '../../../../core';
import { Option } from '../ts-select/ts-select.component';

@Component({
  selector: 'ts-select-edit',
  templateUrl: './ts-select-edit.component.html',
  styleUrls: [
    // './ts-select-edit.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsSelectEditComponent),
    multi: true
  }]
})
export class TsSelectEditComponent extends TsControlValueAccessor implements OnInit {

  @Input() placeholder = '';
  floatLabel = config.floatLabel;
  @Input() required = false;
  @Input() name: string;
  @Input() options: Array<Option>;
  @Input() disabled = false;
  form: FormGroup;
  private _selectValue: Option;

  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this._fb.group({value: ['', []]});
    this.form.valueChanges.subscribe(data => this.onChange(data, true));
  }

  get selectValue(): Option {
    return this._selectValue;
  }

  set selectValue(value: Option) {
    this._selectValue = value;
    this.onChangePropagation(value);
  }

  writeValue(value: Option): void {
    if (value) {
      this.onChange(value, false);
    }
  }

  onChange = (val: Option, isChangedFromInput: boolean) => {
    let tempValue = val && val.value && val.value.value? val.value.value : (val && val.value) ? val.value : val;
    if (tempValue instanceof Object) {
      tempValue = "";
    }
    if ((tempValue.length === 0 && !isChangedFromInput) || tempValue !== this.selectValue) {
      this.selectValue = tempValue;
      this.form.setValue({ value: this.selectValue });
    }
  }

  onBlur = () => {
    this.onTouchedPropagation(this.selectValue);
  }

}
