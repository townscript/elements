import { Component, AfterContentInit, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'ts-panel-body',
    template: '<ng-content></ng-content>'
})
export class TsPanelBodyComponent implements AfterContentInit {
    private maxHeight = 0;
    @Input() default = 'closed';
    private childEl: HTMLElement;

    constructor(private elRef: ElementRef) { }

    ngAfterContentInit() {
        if (this.elRef.nativeElement.childNodes.length > 1) {
            throw new Error('There are multiple nodes in panel body.');
        }
        if (this.elRef.nativeElement.childNodes.length < 1) {
            return;
        }
        this.childEl = this.elRef.nativeElement.childNodes[0];
        this.childEl.style.overflow = 'hidden';
        this.childEl.style.transition = 'max-height .2s ease';
        this.childEl.style.maxHeight = '0';
        if (this.default === 'open') {
            this.toggleView();
        }
    }

    toggleView() {
        if (!this.childEl) {
            return;
        }
        if (this.maxHeight === 0) {
            this.maxHeight = this.childEl.scrollHeight;
        } else {
            this.maxHeight = 0;
        }
        this.childEl.style.maxHeight = this.maxHeight + 'px';
    }
}
