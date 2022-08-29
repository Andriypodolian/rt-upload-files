import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtUploadFilesComponent } from './rt-upload-files.component';

describe('RtUploadFileComponent', () => {
  let component: RtUploadFilesComponent;
  let fixture: ComponentFixture<RtUploadFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtUploadFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtUploadFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
