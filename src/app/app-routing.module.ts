import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './page/main/main.component'
import { AboutUsComponent } from './page/about-us/about-us.component'
import { MemberComponent } from './page/member/member.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'home', component: MainComponent},
  { path: 'member', component: MemberComponent},
  { path: 'aboutus', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
