import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RtUploadFilesComponent} from './rt-upload-files.component';
import {NgxFileDropModule} from 'ngx-file-drop';
import {SizeFormat} from './rt-upload-files.pipe';

@NgModule({
  declarations: [RtUploadFilesComponent, SizeFormat],
  imports: [CommonModule, NgxFileDropModule],
  exports: [RtUploadFilesComponent],
})
export class RtUploadFilesModule {}
