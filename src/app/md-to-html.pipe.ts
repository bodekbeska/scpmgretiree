import { Pipe, PipeTransform } from '@angular/core';
import * as marked from "marked";
@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value && value.length > 0) {
      return marked(value);
    }
    return value;
  }

}
