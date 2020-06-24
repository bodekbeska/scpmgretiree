import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {
  id: string;
  content: Entry<any>;
  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) {

   }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>{
      this.id = params.get('id');
      
      this.contentfulService.getPage(this.id)
      .then(content => {
        this.content = content;            
      });
  })
  }

}
