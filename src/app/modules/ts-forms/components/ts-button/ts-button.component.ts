import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ts-button',
  templateUrl: './ts-button.component.html',
  styleUrls: [
    './ts-button.component.scss'
  ]
})
export class TsButtonComponent implements OnInit {

  @Input()
  state = 'accent';
  @Input()
  text: string;
  @Input()
  disabled = false;
  @Input()
  width = 'inherit';
  @Input()
  showProgress = false;
  value = 10;
  clicked = false;
  @Output()
  click = new EventEmitter<Event>();

  private _interval: any;

  constructor() { }

  ngOnInit() {
  }

  onClick = (event) => {
    if (this.showProgress) {
      this.clicked = true;
      this._interval = setInterval(() => this.generateNumbers(), 100);
    }
    this.click.emit(event);
  }

  generateNumbers = () => {
    if (this.value < 90) {
      this.value += Math.floor(Math.random() * 5);
    } else if (this._interval) {
      clearInterval(this._interval);
    }
  }

}
