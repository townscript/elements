import { Component, AfterContentInit, ElementRef, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'ts-panel-body',
    template: '<ng-content></ng-content>'
})
export class TsPanelBodyComponent implements AfterContentInit, OnDestroy {
    private maxHeight = 0;
    private _open = false;
    private childEl: HTMLElement;
    @Input() transitionTime = '.4s';

    private observer: MutationObserver;

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
        this.observer = new MutationObserver(this.observerChanges);
        if (this.open) {
            this.toggleView();
        }
    }

    private observerChanges(records: MutationRecord[], observer: MutationObserver) {
        let tar: any = records[0].target;
        let notFound = false;
        while (tar.parentElement.tagName.toUpperCase() !== 'TS-PANEL-BODY') {
            if (tar.parentElement.tagName.toUpperCase() === 'TS-PANEL'
                || tar.parentElement.tagName.toUpperCase() === 'BODY') {
                notFound = true;
                break;
            }
            tar = tar.parentElement;
        }
        if (notFound) {
            return;
        }
        if (tar.scrollHeight !== tar.offsetHeight) {
            tar.style.maxHeight = tar.scrollHeight + 'px';
        }
    }

    toggleView() {
        if (!this.childEl) {
            return;
        }
        if (this.maxHeight === 0) {
            this.maxHeight = this.childEl.scrollHeight;
            this.childEl.style.maxHeight = this.maxHeight + 'px';
            this.observer.observe(this.childEl, {
                childList: true, subtree: true
            });
        } else {
            this.observer.disconnect();
            this.maxHeight = 0;
            this.childEl.style.maxHeight = this.maxHeight + 'px';
        }
    }

    ngOnDestroy(): void {
        this.observer.disconnect();
    }
}
