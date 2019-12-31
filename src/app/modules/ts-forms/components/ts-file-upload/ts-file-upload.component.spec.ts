import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsFileUploadComponent } from './ts-file-upload.component';

describe('TsFileUploadComponent', () => {
  let component: TsFileUploadComponent;
  let fixture: ComponentFixture<TsFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
