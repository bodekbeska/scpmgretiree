import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageDetailsComponent } from './page-details/page-details.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mybenefits',
    component: BenefitsComponent
  },
  {
    path: 'mybenefits/:id',
    component: BenefitsComponent
  },
  {
    path: 'myretirement/:id',
    component: PageDetailsComponent
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
