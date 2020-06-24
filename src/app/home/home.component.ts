import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   welcome: Entry<any> = null;


  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {

    this.contentfulService.getWelcomeMessage()
    .then(welcome => {this.welcome = welcome;
    
    })


  

  }

 

}
