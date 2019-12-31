import { Component, OnInit, Input, Output } from '@angular/core';
import { TsControlValueAccessor } from 'src/app/core';
import { NG_VALUE_ACCESSOR, FormBuilder } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'ts-file-upload',
  templateUrl: './ts-file-upload.component.html',
  styleUrls: [
    // './ts-file-upload.component.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TsFileUploadComponent),
    multi: true
  }]
})
export class TsFileUploadComponent extends TsControlValueAccessor implements OnInit {

  @Input() label: String;
  @Input() placeholder: String;
  @Input() id = '';
  @Input() allowedTypes: String;
  uploadUrl: String;
  @Input() disabled = false;
  @Input() downloadBaseURL = '';
  @Output() fileChanges = new EventEmitter();
  fileName: any;
  uploadedFileName: string;

  constructor(private _fb: FormBuilder) {
    super();
  }

  onChange = (url: String) => {
    this.uploadUrl = url;
  }

  onTouched = () => {
  }

  writeValue(url: String): void {
    this.uploadUrl = url;
    if (this.uploadUrl) {
      this.fileName = this.uploadUrl.split('/')[this.uploadUrl.split('/').length - 1];
    }
    this.onChange(this.uploadUrl);
  }

  registerOnChange(fn: (uploadUrl: String) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleFiles = (files) => {
    try {
      this.uploadedFileName = files[0].name;
      this.fileChanges.emit(files[0]);
    } catch (e) {
      if (!this.uploadedFileName) {
        this.uploadedFileName = undefined;
      }
    }
  }

  ngOnInit() {
  }

}
