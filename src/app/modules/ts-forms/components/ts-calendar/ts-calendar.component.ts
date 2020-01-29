import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { config, TsControlValueAccessor } from '../../../../core';
import { MAT_DATE_FORMATS, DateAdapter, NativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

export const DD_MM_YYYY_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'ts-calendar',
  templateUrl: './ts-calendar.component.html',
  styleUrls: [
    //  './ts-calendar.component.scss'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TsCalendarComponent),
      multi: true
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    { provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_FORMAT }
  ]
})
export class TsCalendarComponent extends TsControlValueAccessor implements OnInit {

  floatLabel = config.floatLabel;
  @Input() required = false;
  @Input() name: string;
  @Input() state = 'primary';
  @Input() disabled = false;
  @Input() placeholder: string;
  @Input() max: Date = null;
  @Input() min: Date = null;
  @Input() startView = 'multi-year';

  private _calendarValue: string;

  ngOnInit() {
  }

  get calendarValue(): string {
    return this._calendarValue;
  }

  set calendarValue(val: string) {
    this._calendarValue = val;
    if (val) {
      this.onChangePropagation(val);
    } else {
      this.onChangePropagation('');
    }
  }

  writeValue(value: string): void {
    this.calendarValue = value;
  }

  onBlur = () => {
    this.onTouchedPropagation(this.calendarValue);
  }

}
