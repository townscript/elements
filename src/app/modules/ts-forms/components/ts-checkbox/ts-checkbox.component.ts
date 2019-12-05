import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TsControlValueAccessor } from '../../../../core';

@Component({
  selector: 'ts-checkbox',
  templateUrl: './ts-checkbox.component.html',
  styleUrls: [
    // './ts-checkbox.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsCheckboxComponent),
    multi: true
  }]
})
export class TsCheckboxComponent extends TsControlValueAccessor implements OnInit {

  @Input() required = false;
  @Input() name: string;
  @Input() state = 'primary';
  @Input() disabled = false;
  private _checkboxValue: string;

  ngOnInit() {
  }

  get checkboxValue(): string {
    return this._checkboxValue;
  }

  set checkboxValue(val: string) {
    this._checkboxValue = val;
    if (!val && this.required) {
      this.onChangePropagation('');
      this.onTouchedPropagation('');
    } else {
      this.onChangePropagation(val);
      this.onTouchedPropagation(val);
    }
  }

  writeValue(value: string): void {
    this.checkboxValue = value;
  }

}
