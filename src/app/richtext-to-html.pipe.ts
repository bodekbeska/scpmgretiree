import { Pipe, PipeTransform } from '@angular/core';
import { ContentfulService } from './contentful.service';

@Pipe({
  name: 'richtextToHtml'
})
export class RichtextToHtmlPipe implements PipeTransform {

  constructor(private contentful : ContentfulService){}
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.contentful._returnHtmlFromRichText(value);
  }

}
