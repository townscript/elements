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
  @ContentChild(TsPanelHeaderComponent, { static: true }) panelHeader: TsPanelHeaderComponent;
  @ContentChild(TsPanelBodyComponent, { static: true }) panelBody: TsPanelBodyComponent;

  constructor() { }

  ngAfterContentInit() {
    if (this.disable) {
      return;
    }
  }

}
