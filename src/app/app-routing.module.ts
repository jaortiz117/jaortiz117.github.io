import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { AboutComponent } from './about/about.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { ResumePopupComponent } from './landing/resume-popup/resume-popup.component'


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'resume', component: ResumePopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
