import { Component, OnInit, Input, forwardRef, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { config, TsControlValueAccessor } from '../../../../core';
import { NG_VALUE_ACCESSOR, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import intlTelInput from 'intl-tel-input/build/js/intlTelInput';

@Component({
  selector: 'ts-input-contact',
  templateUrl: './ts-input-contact.component.html',
  styleUrls: [
    './ts-input-contact.component.scss'
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
  @ViewChild('contact', { static: false }) contactEl: ElementRef;
  private iti: any;
  form: FormGroup;
  private _contactValue: string;

  constructor(private readonly _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this._fb.group({
      contact: ['', this.contactNumberValidator]
    });
  }

  private readonly contactNumberValidator = () => {
    if (this.iti && !this.iti.isValidNumber()) {
      return { contact: 'Invalid contact number' };
    }
    return null;
  }

  ngAfterViewInit() {
    this.iti = intlTelInput(this.contactEl.nativeElement, {
      initialCountry: 'in',
      preferredCountries: ['in', 'id'],
      utilsScript: '../../../../../../node_modules/intl-tel-input/build/js/utils.js',
    });
  }

  get contactValue(): string {
    return this._contactValue;
  }

  set contactValue(val: string) {
    this._contactValue = val;
    this.onChangePropagation(val);
  }

  writeValue(value: string): void {
    this.form.setValue({ 'contact': value });
    this.onChange(value);
  }

  onBlur = () => {
    this.onTouchedPropagation(this.contactValue);
  }

  onChange = (val: string) => {
    this.contactValue = this.form.valid ? this.iti.getNumber() : '';
  }

}
