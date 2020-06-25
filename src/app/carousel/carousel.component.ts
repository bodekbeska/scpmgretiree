import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  carousels: Entry<any>[] = [];
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getCarousel()
    .then(carousels => {
      carousels.sort((a,b) => (a.fields.orderid > b.fields.orderid)? 1 :-1);  
      this.carousels = carousels; 
      
      
    });
  }

}
