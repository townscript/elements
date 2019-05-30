import { Component, ContentChild, AfterContentInit, OnDestroy, Input } from '@angular/core';
import { TsPanelHeaderComponent } from './components/ts-panel-header.component';
import { TsPanelBodyComponent } from './components/ts-panel-body.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ts-panel',
  template: '<ng-content></ng-content>'
})
export class TsPanelComponent implements AfterContentInit, OnDestroy {

  @Input() disable = false;
  @Input() default = 'closed';
  @ContentChild(TsPanelHeaderComponent) panelHeader: TsPanelHeaderComponent;
  @ContentChild(TsPanelBodyComponent) panelBody: TsPanelBodyComponent;

  subscription: Subscription;
  constructor() { }

  ngAfterContentInit() {
    if (this.disable) {
      return;
    }
    if (this.default === 'open') {
      this.panelBody.toggleView();
    }
    this.subscription = this.panelHeader.clickEmitter.subscribe((e) => {
      this.panelBody.toggleView();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
