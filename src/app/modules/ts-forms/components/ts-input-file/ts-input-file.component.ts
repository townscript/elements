import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ts-input-file',
  templateUrl: './ts-input-file.component.html',
  styleUrls: ['./ts-input-file.component.scss']
})
export class TsInputFileComponent implements OnInit {
  constructor() { }
  @Input() maxFileSize;
  uploadPercentage: number;
  uploadedFile: any;
  @Input() uploadComplete: boolean;
  @Output() fileValueChangeEvent = new EventEmitter<any>();
  stopUploadBar = false;

  ngOnInit(): void {
  }

  emitFileValueChange = () => {
    this.fileValueChangeEvent.emit(this.uploadedFile);
  }

  setUploadedFileValue = async (event: any): Promise<any> => {
    this.uploadedFile = undefined;
    this.uploadedFile = event.target.files[0];
    if (this.uploadedFile.bytes > this.maxFileSize) {
      alert('Sorry maximum file limit is ' + this.maxFileSize + ' KB');
      this.uploadedFile = undefined;
      return;
    }
    this.emitFileValueChange();
    this.emulateUpload();
  }

  deleteUploadedFileValue = () => {
    this.uploadedFile = undefined;
    this.emitFileValueChange();
    this.stopUploadBar = true;
  }

  emulateUpload = () => {
    this.stopUploadBar = false;
    this.uploadPercentage = 0;
    let current_progress = 0;
    let step = 0.5;
    const interval = setInterval(() => {
      current_progress += step;
      this.uploadPercentage = Math.round(Math.atan(current_progress) / (Math.PI / 2) * 100 * 1000) / 1000
      if (this.uploadPercentage >= 100 || this.stopUploadBar || this.uploadComplete) {
        clearInterval(interval);
      } else if (this.uploadPercentage >= 70) {
        step = 0.1
      }
    }, 100);
  }

}
