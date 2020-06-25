import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './carousel/carousel.component';

import { ContentfulService } from './contentful.service';
import { FooterComponent } from './footer/footer.component';
import { RichtextToHtmlPipe } from './richtext-to-html.pipe';
import { BenefitsComponent } from './benefits/benefits.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { PageDetailsComponent } from './page-details/page-details.component';
import { EventsComponent } from './events/events.component';
import { MdToHtmlPipe } from './md-to-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    RichtextToHtmlPipe,
    BenefitsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    PageDetailsComponent,
    EventsComponent,
    MdToHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
    
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
