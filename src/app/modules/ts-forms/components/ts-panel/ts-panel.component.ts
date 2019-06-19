import { Component, ContentChild, AfterContentInit, OnDestroy, Input } from '@angular/core';
import { TsPanelHeaderComponent } from './components/ts-panel-header.component';
import { TsPanelBodyComponent } from './components/ts-panel-body.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ts-panel',
  template: '<ng-content></ng-content>'
})
export class TsPanelComponent implements AfterContentInit {

  @Input() disable = false;
  @ContentChild(TsPanelHeaderComponent) panelHeader: TsPanelHeaderComponent;
  @ContentChild(TsPanelBodyComponent) panelBody: TsPanelBodyComponent;

  constructor() { }

  ngAfterContentInit() {
    if (this.disable) {
      return;
    }
  }

}
