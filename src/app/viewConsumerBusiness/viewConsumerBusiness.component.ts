import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { ConsumerBusiness } from '../Models/consumerBusiness';
import { ConsumerProperty } from '../Models/consumerProperty';

@Component({
  selector: 'app-consumer',
  templateUrl: './viewConsumerBusiness.component.html',
  styleUrls: ['./viewConsumerBusiness.component.css']
})
export class ViewConsumerBusinessComponent implements OnInit {
  consumerBusiness:ConsumerBusiness;
  consumerProperty:ConsumerProperty;
  consumerId:string;
  businessId:string;
  flag:boolean;
  constructor(private apiService:APIService) {
    this.consumerBusiness={
      "consumerId": "",
      "consumerName": "",
      "email": "",
      "pan": "",
      "agentId": 0,
      "agentName": "",
      "businessId": "",
      "validityofConsumer": 0,
      "businessOverview": "",
      "businessType": "",
      "annualTurnOver": 0,
      "totalEmployees": 0,
      "capitalInvested": 0,
      "businessValue": 0
    }
    this.consumerProperty={
    "consumerId": "",
    "propertyId": "",
    "buildingSqft": 0,
    "buildingType": "",
    "buildingStoreys": 0,
    "buildingAge": 0,
    "costOfTheAsset": 0,
    "salvageValue": 0,
    "usefulLifeOfTheAsset": 0,
    "propertyValue": 0
  }
    this.consumerId="";
    this.businessId="";
    this.flag=true;
   }

  ngOnInit(): void {
  }

  viewConsumerBusiness(ConsumerId:string,BusinessId:string)
  {
    this.apiService.viewConsumerBusiness(ConsumerId,BusinessId).subscribe(data=>{this.consumerBusiness=data;});
    setTimeout(() => this.flag=false, 650);
  }

  viewConsumerProperty(ConsumerId:string,PropertyId:string)
  {
    this.apiService.viewConsumerProperty(ConsumerId,PropertyId).subscribe(data=>{this.consumerProperty=data;});
    setTimeout(() => this.flag=false, 650);
  }

}
