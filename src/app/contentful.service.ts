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

  getMainMenu(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type:'mainmenu'
    }, query))
    .then(res => res.items);    
  }

  getCarousel(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type:'carousel'
    }, query))
    .then(res => res.items);    
  }

  getBenefits(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type:'benefits'
    }, query))
    .then(res => res.items);    
  }

  getPage(pageId): Promise<Entry<any>> {  
    return this.client.getEntry(pageId)
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


  
  getEvents(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type:'events'
    }, query))
    .then(res => res.items);    
  }

  getEventsVerbiage(query?: object): Promise<Entry<any>> {    
    return this.client.getEntry('62vgCxi8ldTxjSRRjjJYcg')
    .then(res => res);
  }


  _returnHtmlFromRichText(richText) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
}

}
