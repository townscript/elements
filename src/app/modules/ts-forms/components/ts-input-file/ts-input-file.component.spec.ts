import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsInputFileComponent } from './ts-input-file.component';

describe('TsInputFileComponent', () => {
  let component: TsInputFileComponent;
  let fixture: ComponentFixture<TsInputFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsInputFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsInputFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
