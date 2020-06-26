import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {
  id: string;
  openContactForm: boolean = false;
  content: Entry<any>;
  constructor(private route: ActivatedRoute, 
    private contentfulService: ContentfulService) { 

  }

  ngOnInit(): void {
   

    this.route.paramMap.subscribe(params =>{
        this.id = params.get('id');
        if(this.id==='6adwu9S9S9pLyAb4sEG0co')
        this.openContactForm=true; else  this.openContactForm=false;
        
        this.contentfulService.getPage(this.id)
        .then(content => {
          this.content = content;              
        });
    })


  }

}
