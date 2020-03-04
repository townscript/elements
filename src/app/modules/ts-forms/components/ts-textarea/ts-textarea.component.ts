import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { config, TsControlValueAccessor } from '../../../../core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ts-textarea',
  templateUrl: './ts-textarea.component.html',
  styleUrls: [
    // './ts-textarea.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsTextareaComponent),
    multi: true
  }]
})
export class TsTextareaComponent extends TsControlValueAccessor implements OnInit {

  @Input() placeholder = '';
  floatLabel = config.floatLabel;
  @Input() required = false;
  @Input() name: string;
  private _textAreaValue: string;
  @Input() maxlength?: number;

  ngOnInit() {
  }

  get textAreaValue(): string {
    return this._textAreaValue;
  }

  set textAreaValue(val: string) {
    this._textAreaValue = val;
    this.onChangePropagation(val);
  }

  writeValue(value: string): void {
    this.textAreaValue = value;
  }

  onBlur = () => {
    this.onTouchedPropagation(this.textAreaValue);
  }

}
