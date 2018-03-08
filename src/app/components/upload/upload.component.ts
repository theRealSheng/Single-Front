import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader, FileSelectDirective } from "ng2-file-upload";


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  @Output() success: any = new EventEmitter<string>();
  @Input() user: any;

  @Input() varia: string;
  @Input() warehouseId: string;

  uploader: FileUploader;

  error: string;
  name: string;
  picture: any;
  message: string;

  constructor() { }

  ngOnInit() {

    this.uploader = new FileUploader({
      url: `http://localhost:3000/${this.varia}`
    });

    this.uploader.onSuccessItem = (item, response) => {
      this.message = 'Upload success!';
      const newImage = JSON.parse(response).picture;
      this.success.emit(newImage);
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.error = 'There was an error, please try again';
    };

    // document.getElementById('file').addEventListener('change', (evt) => {
    //   //console.log(evt.currentTarget.value);
    // })
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', name);

      if (this.warehouseId) {
        form.append('warehouseId', this.warehouseId);
      }
    };

    this.uploader.uploadAll();
  }
  
}
