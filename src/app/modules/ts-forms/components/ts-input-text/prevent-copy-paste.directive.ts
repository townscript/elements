import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPreventCopyPaste]'
})
export class PreventCopyPasteDirective {
  @Input() appPreventCopyPaste: boolean = false;

  // @HostListener('cut', ['$event'])
  // onCut(event: ClipboardEvent): void {
  //   this.handleEvent(event);
  // }

  @HostListener('copy', ['$event'])
  onCopy(event: ClipboardEvent): void {
    this.handleEvent(event);
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    this.handleEvent(event);
  }

  private handleEvent(event: ClipboardEvent): void {
    if (this.appPreventCopyPaste) {
      event.preventDefault();
    }
  }
}
