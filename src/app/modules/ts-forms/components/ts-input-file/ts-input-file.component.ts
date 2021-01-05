import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ts-input-file',
  templateUrl: './ts-input-file.component.html',
  styleUrls: ['./ts-input-file.component.scss']
})
export class TsInputFileComponent implements OnInit {
  constructor() { }
  @Input() fileSize: number;
  uploadPercentage = 50;
  uploadedFile: any;
  @Output() fileValueChangeEvent = new EventEmitter<any>();


  ngOnInit(): void {
    this.updatePer();
  }

  emitFileValueChange = () => {
    this.fileValueChangeEvent.emit(this.uploadedFile);
  }

  updatePer = () => {
    //to emulate
    setInterval(() => {
      this.uploadPercentage += 1;
    }, 1000);

  }

  setUploadedFileValue = async (event: any): Promise<any> => {
    this.uploadedFile = undefined;
    this.uploadedFile = event.target.files[0];
    this.emitFileValueChange();
  }

  deleteUploadedFileValue = () => {
    this.uploadedFile = undefined;
    this.uploadPercentage = 0;
    this.emitFileValueChange();
  }

}
