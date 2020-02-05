import { Component, OnInit, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { config, TsControlValueAccessor } from '../../../../core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { TS_DATE_FORMATS, TsDateAdapter } from './ts-date.adapter';


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
    { provide: DateAdapter, useClass: TsDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: TS_DATE_FORMATS }
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

  @ViewChild('inputModelRef', { static: false }) el: NgModel;

  private _calendarValue: Date;

  ngOnInit() {
  }

  get calendarValue(): Date {
    return this._calendarValue;
  }

  set calendarValue(val: Date) {
    if (val && !this.el.control.errors) {
      this._calendarValue = val;
      this.onChangePropagation(val);
    } else {
      this._calendarValue = undefined;
      this.onChangePropagation();
    }
  }

  writeValue(value: Date): void {
    this.calendarValue = value;
  }

  onBlur = () => {
    this.onTouchedPropagation(this.calendarValue);
  }

}
