import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  
  })

  constructor() { }

  getCarousel(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type:'carousel'
    }, query))
    .then(res => res.items);
    
  }





  getLiving(query?: object): Promise<Entry<any>> {
    return this.client.getEntry('2A7M4G46JxSGf9PzSiABvV')
    .then(res => res);
  }
  getContactUs(query?: object): Promise<Entry<any>> {
    return this.client.getEntry('4LnMS2qBP6yEZ8tctRWGcD')
    .then(res => res);
  }
  getWelcomeMessage(query?: object): Promise<Entry<any>> {
    return this.client.getEntry('2HdffBnQqiOoVi2mbli0gq')
    .then(res => res);
  }


  _returnHtmlFromRichText(richText) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
}

}
