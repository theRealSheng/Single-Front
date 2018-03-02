import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/uploads`
  });

  feedback: string;
  name: string;

  constructor() { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', name);
    };

    this.uploader.uploadAll();
  }

}
