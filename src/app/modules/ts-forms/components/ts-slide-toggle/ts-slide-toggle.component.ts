import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TsControlValueAccessor } from '../../../../core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ts-slide-toggle',
  templateUrl: './ts-slide-toggle.component.html',
  styleUrls: [
    // './ts-slide-toggle.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsSlideToggleComponent),
    multi: true
  }]
})
export class TsSlideToggleComponent extends TsControlValueAccessor implements OnInit {

  @Input() required = false;
  @Input() name: string;
  @Input() disabled = false;
  @Input() color: ThemePalette = 'primary';

  private _slideToggleValue: boolean;
  get slideToggleValue(): boolean {
    return this._slideToggleValue;
  }

  set slideToggleValue(val: boolean) {
    this._slideToggleValue = val;
    if (this.required && (val === undefined || val === null)) {
      this.onChangePropagation();
    } else {
      this.onChangePropagation(val);
    }
  }

  writeValue(value: boolean): void {
    this.slideToggleValue = value;
    if (value !== undefined && value !== null) {
      this.slideToggleValue = value;
    }
  }

  slideToggleChange = (event: any) => {
    this.onTouchedPropagation(this._slideToggleValue);
  }

  ngOnInit() {
  }

}
