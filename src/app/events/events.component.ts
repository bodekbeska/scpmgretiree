import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
events: Entry<any>[] = [];
verbiage : Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {

    this.contentfulService.getEvents()
    .then(events => {
      events.sort((a,b) => (a.fields.date > b.fields.date)? 1 :-1);    
      this.events = events.filter((el) => new Date(el.fields.date).getTime() > Date.now());                   
    });

    this.contentfulService.getEventsVerbiage()
    .then(verbiage => {     
      this.verbiage = verbiage;                  
    });
  }

}
