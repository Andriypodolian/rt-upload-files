## RT upload file

Module for uploading files to the server, error handling, download process

### Api

| Name          | Type            | Default |
|---------------|-----------------|---------|
| [disabled]    | boolean         | false   |
| [progress]    | number          | 0       |
| [errorServer] | FileUploadError | null    |
| [formats]     | FormatsFile[ ]  | [ ]     |
| [isUploaded]  | boolean         | false   |
| (outFile)     | File            |
| (removeFile)  | null            | null    |    

## exemple

exemple.component.html

```html

<rt-upload-file
        [disabled]="false"
        [progress]="proccessUploading$ | async"
        [errorServer]="errorUploading"
        [formats]="formatsFile"
        [isUploaded]="isUploaded"
        (outFile)="onFile($event)">
</rt-upload-file>
```

exemple.component.ts

```ts

import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'app-example-component',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ExampleComponent implements OnInit {
    /** Procentage uploading file from server */
    proccessUploading$: Observable<number>;
    /** Error uploading from server */
    errorUploading: FileUploadError = null;
    /** Formats for uploading file */
    formatsFile: FormatsFile[] = [FormatsFile.pdf, FormatsFile.docx];
    /** State uploaded file */
    isUploaded = false;

    constructor(cd: ChangeDetectorRef) {
    }

    onFile(file: File) {

        this.isUploaded = false;

        /**
         * proccessUploading$: observable<number> 0.. 100
         * */

    }
}
```
https://www.regulus.team/
