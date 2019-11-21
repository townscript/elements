import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { config, TsControlValueAccessor } from '../../../../core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RegEx } from '../../../../shared/regex.constant';

@Component({
  selector: 'ts-input-text',
  templateUrl: './ts-input-text.component.html',
  styleUrls: [
    // './ts-input-text.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsInputTextComponent),
    multi: true
  }]
})
export class TsInputTextComponent extends TsControlValueAccessor implements OnInit {

  @Input() placeholder = 'Placeholder';
  floatLabel = config.floatLabel;
  @Input() required = false;
  @Input() name: string;
  @Input() type = 'text';
  @Input() pattern = /.*/;
  private _inputTextValue: string;
  @Input() autofocus = false;
  @Input() maxlength?: number;

  ngOnInit() {
    if (this.type == 'email') {
      this.pattern = RegEx.email;
    }
  }

  get inputTextValue(): string {
    return this._inputTextValue;
  }

  set inputTextValue(val: string) {
    this._inputTextValue = val;
    if (val && val.match(this.pattern)) {
      this.onChangePropagation(val);
    } else {
      this.onChangePropagation('');
    }
  }

  writeValue(value: string): void {
    this.inputTextValue = value;
  }

  onBlur = () => {
    this.onTouchedPropagation(this.inputTextValue);
  }

}
