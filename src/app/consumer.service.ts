import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { ConsumerBusiness } from './Models/consumerBusiness';

@Injectable({
  providedIn: 'root'
})

export class ConsumerService
{
  url:string;

  constructor(private http:HttpClient)
  {
    this.url="https://consumerapimicroservicefinal.azurewebsites.net/api/Consumer";
  }


  viewConsumerBusiness(ConsumerId :string,BusinessId:string ):Observable<ConsumerBusiness>
  {
    return this.http.get<ConsumerBusiness>(this.url+"/viewConsumerBusiness/"+ConsumerId+"/"+BusinessId,{
      headers:new HttpHeaders({'Content-Type':'application/json;charset=UTF-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Method':'*'})});
  }



}
