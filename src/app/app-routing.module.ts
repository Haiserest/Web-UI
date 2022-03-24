import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './page/main/main.component'
import { AboutUsComponent } from './page/about-us/about-us.component'

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'home', component: MainComponent},
  { path: 'aboutus', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
