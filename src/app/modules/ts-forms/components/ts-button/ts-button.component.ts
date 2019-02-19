import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ts-button',
  templateUrl: './ts-button.component.html',
  styleUrls: ['./ts-button.component.scss']
})
export class TsButtonComponent implements OnInit {

  @Input()
  state = 'accent';
  @Input()
  text: string;
  @Input()
  disabled = false;
  @Output()
  click = new EventEmitter<Event>();

  constructor() { }

  ngOnInit() {
  }

  onClick = (event) => {
    this.click.emit(event);
  }

}
