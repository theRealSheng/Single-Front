import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  @Output() success: any = new EventEmitter<string>();
  @Input() user: any;

  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/uploads`
  });

  error: string;
  name: string;
  picture: any;
  message: string;

  constructor() { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.message = 'Upload success!';
      const newImage = JSON.parse(response).picture;
      this.success.emit(newImage);
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.error = 'There was an error, please try again';
    };
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', name);
    };

    this.uploader.uploadAll();
  }
  
}
