import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appContactValidate]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ContactValidatorDirective, multi: true }
  ]
})
export class ContactValidatorDirective implements Validator {

  constructor(private readonly elementRef: ElementRef) { }

  validate(control: AbstractControl) {
    const intlInpGlobals = (window as any).intlTelInputGlobals;
    if (!this.elementRef || !this.elementRef.nativeElement || !intlInpGlobals) {
      return null;
    }
    const nativeElm = this.elementRef.nativeElement;
    const itiRef = intlInpGlobals.getInstance(nativeElm);
    if (itiRef && !itiRef.isValidNumber()) {
      return { contact: 'Invalid contact number' };
    }
    return null;
  }
}
