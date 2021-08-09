import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewConsumerBusinessComponent } from './viewConsumerBusiness/viewConsumerBusiness.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewConsumerPropertyComponent } from './view-consumer-property/view-consumer-property.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewConsumerBusinessComponent,
    ViewConsumerPropertyComponent,
    ViewPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
