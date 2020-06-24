import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  benlinks: Entry<any>[] = [];
  menu: Entry<any>[] = [];
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getBenefits()
    .then(links => {this.benlinks = links;     
    });

    this.contentfulService.getMainMenu()
    .then(links => {
      links.sort((a,b) => (a.fields.orderid > b.fields.orderid)? 1 :-1);      
      this.menu = links.filter((el) => el.fields.category==='main');      
    });
  }

}
