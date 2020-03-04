import { Component, OnInit, forwardRef, Input, ViewChild } from '@angular/core';
import { config, TsControlValueAccessor } from '../../../../core';
import { NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { RegEx } from '../../../../shared/regex.constant';

@Component({
  selector: 'ts-input-time',
  templateUrl: './ts-input-time.component.html',
  styleUrls: [
    //  './ts-input-time.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsInputTimeComponent),
    multi: true
  }]
})
export class TsInputTimeComponent extends TsControlValueAccessor implements OnInit {

  @Input() placeholder = '';
  floatLabel = config.floatLabel;
  @Input() required = false;
  @Input() name: string;
  pattern = RegEx.time;
  private _timeValue: string;
  @Input() autofocus = false;

  @ViewChild('inputModelRef', { static: false }) el: NgModel;

  ngOnInit() {
  }

  get timeValue(): string {
    return this._timeValue;
  }

  set timeValue(val: string) {
    this._timeValue = val;
    if (val && val.match(this.pattern)) {
      this.onChangePropagation(val);
    } else {
      this.onChangePropagation();
    }
  }

  writeValue(value: string): void {
    this.timeValue = value;
  }

  onBlur = () => {
    this.onTouchedPropagation(this.timeValue);
  }

  onKeyEventHandler(event: KeyboardEvent): void {

    let currentValue = this.el.value;
    if (currentValue === '' || currentValue == null) {
      return;
    }

    const key = Number(event.key);
    if (isNaN(key)) {
      return;
    }

    const numChars = currentValue.length;
    if (numChars === 2 || numChars === 5) {
      currentValue = currentValue + ':';
    }
    this.el.control.setValue(currentValue);
    this.el.control.updateValueAndValidity();
  }

}
