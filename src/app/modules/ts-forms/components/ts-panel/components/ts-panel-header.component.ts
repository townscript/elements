import { Component, AfterContentInit, HostListener, EventEmitter } from '@angular/core';

@Component({
    selector: 'ts-panel-header',
    template: '<ng-content></ng-content>'
})
export class TsPanelHeaderComponent implements AfterContentInit {
    clickEmitter = new EventEmitter<any>();
    constructor() { }

    ngAfterContentInit() {
    }

    @HostListener('click', ['$event'])
    handleClick(e) {
        this.clickEmitter.emit(e);
    }
}
