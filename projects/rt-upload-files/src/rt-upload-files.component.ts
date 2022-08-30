import {Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import {FileUploadError, FormatsFile} from "./rt-upload-files.simbol";


@Component({
  selector: 'rt-upload-files',
  templateUrl: './rt-upload-files.component.html',
  styleUrls: ['./rt-upload-files.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RtUploadFilesComponent {
  @Input() disabled = false;
  @Input() errorServer: FileUploadError | null = null;
  errorFrontend: FileUploadError | null = null;
  @Input() formats: FormatsFile[] = [];
  @Input() progress = 0;
  @Input() isUploaded = false;
  @Output() outFile = new EventEmitter<File | null>();
  @Output() removeFile = new EventEmitter<null>();
  @ViewChild('inputFile') inputFileRef!: ElementRef;

  constructor(private cd: ChangeDetectorRef) {}

  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.emitFile(file);
        });
      }
    }
  }

  private emitFile(file: File) {
    if (this.formats) {
      if (!this.formats.find(f => f === file.type)) {
        this.errorFrontend = {title: 'ERROR', message: 'This format is not supported'};
        this.cd.detectChanges();
        return;
      }
    }
    this.outFile.emit(file);
    this.cd.detectChanges();
  }

  public openBrowser() {
    this.inputFileRef.nativeElement.click();
  }

  public uploadBrowser(event: any) {
    const file = event.target.files[0];
    this.emitFile(file);
    this.cd.detectChanges();
  }

  public clearErrorFrontend() {
    this.errorFrontend = null;
    this.cd.detectChanges();
  }

  public clearErrorServer() {
    this.errorServer = null;
    this.outFile.emit(null);
    this.cd.detectChanges();
  }

  public _removeFile() {
    this.outFile.emit(null);
    this.removeFile.emit(null);
    this.isUploaded = false;
    this.inputFileRef.nativeElement.value = null;
    this.cd.detectChanges();
  }
}
