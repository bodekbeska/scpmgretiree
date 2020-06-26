import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormControl, FormBuilder, Form } from '@angular/forms';
 import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
 import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-tellus',
  templateUrl: './tellus.component.html',
  styleUrls: ['./tellus.component.css']
})
export class TellusComponent implements OnInit {
  contactForm: FormGroup;
  tellus: Entry<any> = null;
   constructor(private http: HttpClient, private fb: FormBuilder, 
    private contentfulService: ContentfulService ) { 
    this.contactForm = this.fb.group({
      name:'',
      email:'',
      phone:'',
      medcenter:'',
      retirementyear:'',
      sharing:''
    });
  }

  ngOnInit(): void {
    this.contentfulService.getPage('82tRwBbsYilF4j20FoT9y')
    .then(tellus => {this.tellus = tellus;          
    })
  }

  onSubmit() {
    console.log(this.contactForm.value.name);
    const body = new HttpParams()
    .set('form-name', 'contact')
    .append('name', this.contactForm.value.name)
    .append('email', this.contactForm.value.email)   
    .append('message', this.contactForm.value.message)
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
      res => {},
      err => {
        if (err instanceof ErrorEvent) {
          //client side error
          alert("Something went wrong when sending your message.");
          console.log(err.error.message);
        } else {
          //backend error. If status is 200, then the message successfully sent
          if (err.status === 200) {
            alert("Your message has been sent!");
          } else {
            alert("Something went wrong when sending your message.");
            console.log('Error status:');
            console.log(err.status);
            console.log('Error body:');
            console.log(err.error);
          };
        };
      }
    );
  };

}
