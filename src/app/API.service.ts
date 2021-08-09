import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { ConsumerBusiness } from './Models/consumerBusiness';
import { ConsumerPolicy } from './Models/consumerPolicy';
import { ConsumerProperty } from './Models/consumerProperty';

@Injectable({
  providedIn: 'root'
})

export class APIService
{
  consumerApiUrl:string;
  policyApiUrl:string;

  constructor(private http:HttpClient)
  {
    this.consumerApiUrl="https://microserviceapiconsumer.azurewebsites.net/api/Consumer";
    this.policyApiUrl="https://policymicroserviceapi.azurewebsites.net/api/Policy";
  }


  viewConsumerBusiness(ConsumerId :string,BusinessId:string ):Observable<ConsumerBusiness>
  {
    return this.http.get<ConsumerBusiness>(this.consumerApiUrl+"/viewConsumerBusiness/"+ConsumerId+"/"+BusinessId,{
      headers:new HttpHeaders({'Content-Type':'application/json;charset=UTF-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Method':'*'})});
  }

  viewConsumerProperty(ConsumerId :string,PropertyId:string ):Observable<ConsumerProperty>
  {
    return this.http.get<ConsumerProperty>(this.consumerApiUrl+"/viewConsumerProperty/"+ConsumerId+"/"+PropertyId,{
      headers:new HttpHeaders({'Content-Type':'application/json;charset=UTF-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Method':'*'})});
  }

  viewPolicy(ConsumerId :string,PolicyId:string ):Observable<ConsumerPolicy>
  {
    return this.http.get<ConsumerPolicy>(this.policyApiUrl+"/viewPolicy/"+ConsumerId+"/"+PolicyId,{
      headers:new HttpHeaders({'Content-Type':'application/json;charset=UTF-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Method':'*'})});
  }


}
