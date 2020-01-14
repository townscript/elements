import { Component, OnInit, Input, forwardRef, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { config, TsControlValueAccessor } from '../../../../core';
import { NG_VALUE_ACCESSOR, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import intlTelInput from 'intl-tel-input/build/js/intlTelInput';

@Component({
  selector: 'ts-input-contact',
  templateUrl: './ts-input-contact.component.html',
  styleUrls: [
    // './ts-input-contact.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsInputContactComponent),
    multi: true
  }],
  encapsulation: ViewEncapsulation.None
})
export class TsInputContactComponent extends TsControlValueAccessor implements OnInit, AfterViewInit {

  @Input() placeholder = 'Placeholder';
  floatLabel = config.floatLabelOptions[1];
  @Input() required = false;
  @Input() name: string;
  @Input() country?: string;
  @ViewChild('contact', { static: false }) contactEl: ElementRef;
  iti: any;
  private _contactValue: string;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  contactNumberValidator = () => {
    if (this.iti && !this.iti.isValidNumber()) {
      return { contact: 'Invalid contact number' };
    }
    return null;
  }

  ngAfterViewInit() {
    this.iti = intlTelInput(this.contactEl.nativeElement, {
      initialCountry: this.country || 'in',
      preferredCountries: ['in', 'id'],
      utilsScript: '../../../../../../node_modules/intl-tel-input/build/js/utils.js',
    });
  }

  get contactValue(): string {
    return this._contactValue;
  }

  set contactValue(val: string) {
    this._contactValue = val;
    if (this.iti.isValidNumber()) {
      this.onChangePropagation(this.iti.getNumber());
    } else {
      this.onChangePropagation('');
    }
  }

  writeValue(value: string): void {
    if (value) {
      this.iti.setNumber(value);
      this.contactValue = value;
    }
  }

  onBlur = () => {
    this.onTouchedPropagation(this.contactValue);
  }

  onCountryChange = (val: string) => {
    this.onChangePropagation(this.iti.getNumber());
  }

}
