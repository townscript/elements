import { Component, AfterContentInit, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'ts-panel-body',
    template: '<ng-content></ng-content>'
})
export class TsPanelBodyComponent implements AfterContentInit {
    private maxHeight = 0;
    private _open = false;
    private childEl: HTMLElement;
    @Input() transitionTime = '.8s';

    constructor(private elRef: ElementRef) { }
    @Input()
    set open(val: boolean) {
        this._open = val;
        this.toggleView();
    }
    get open() {
        return this._open;
    }

    ngAfterContentInit() {
        if (this.elRef.nativeElement.childNodes.length > 1) {
            throw new Error('There are multiple nodes in panel body.');
        }
        if (this.elRef.nativeElement.childNodes.length < 1) {
            return;
        }
        this.childEl = this.elRef.nativeElement.childNodes[0];
        this.childEl.style.overflow = 'hidden';
        this.childEl.style.transition = 'max-height ' + this.transitionTime + ' ease-in-out';
        this.childEl.style.maxHeight = '0';
        if (this.open) {
            this.toggleView();
        }
    }

    toggleView() {
        if (!this.childEl) {
            return;
        }
        if (this.maxHeight === 0) {
            //this.maxHeight = this.childEl.scrollHeight ? this.childEl.scrollHeight : 10000;
            this.maxHeight = 10_000;
        } else {
            this.maxHeight = 0;
        }
        this.childEl.style.maxHeight = this.maxHeight + 'px';
    }
}
