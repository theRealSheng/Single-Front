import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizer'
})
export class SanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){
    this.sanitizer = sanitizer;
  }

  transform(style) {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

}
