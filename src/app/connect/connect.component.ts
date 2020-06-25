import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  id: string;
  content: Entry<any>;
  constructor(private contentfulService: ContentfulService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params =>{
      this.id = params.get('id');
      
      this.contentfulService.getPage(this.id)
      .then(content => {
        this.content = content;   
        console.log(this.content)           
      });
  })
  }

}
