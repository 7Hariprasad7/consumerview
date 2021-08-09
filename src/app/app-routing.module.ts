import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewConsumerPropertyComponent } from './view-consumer-property/view-consumer-property.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { ViewConsumerBusinessComponent } from './viewConsumerBusiness/viewConsumerBusiness.component';
const routes: Routes = [
  {path:'viewConsumerBusiness',component:ViewConsumerBusinessComponent},
  {path:'viewConsumerProperty',component:ViewConsumerPropertyComponent},
  {path:'viewPolicy',component:ViewPolicyComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
