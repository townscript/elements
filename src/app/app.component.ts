import { Component, OnInit } from '@angular/core';
import { Option } from './modules/ts-forms/components';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
    <ul>
      <li>
        <a href="https://keep.google.com/" (click)="openLink($event)">
          <span>Google Keep</span>
          <span>Add to a note</span>
        </a>
      </li>
      <li>
        <a href="https://docs.google.com/" (click)="openLink($event)">
          <span>Google Docs</span>
          <span>Embed in a document</span>
        </a>
      </li>
      <li>
        <a href="https://plus.google.com/" (click)="openLink($event)">
          <span>Google Plus</span>
          <span>Share with your friends</span>
        </a>
      </li>
      <li>
        <a href="https://hangouts.google.com/" (click)="openLink($event)">
          <span>Google Hangouts</span>
          <span>Show to your coworkers</span>
        </a>
      </li>
    </ul>
  `})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'elements';
  myName = '';
  myEmail = '';
  myContact = '';
  myGender: Option;
  options: Array<Option> = [];
  myCard = '';
  myExpiry = '';
  panelOpen = false;
  myCVC = '';
  myRadio = '';
  showError = false;
  myCheckboxVal = true;
  myAddress = '';

  constructor(private readonly _bottomSheet: MatBottomSheet) {
    let option: Option = { text: 'Male', value: 'Male' };
    this.options.push(option);
    option = { text: 'Female', value: 'Female' };
    this.options.push(option);
    this.myGender = option;
  }

  ngOnInit() {
  }

  onSubmit = () => {
    alert('Form submitted!');
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet, {
      panelClass: 'remove-padding'
    });
  }

  sayHi = () => {
    alert('Hello');
  }
}
