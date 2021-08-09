import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../consumer.service';
import { ConsumerBusiness } from '../Models/consumerBusiness';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  consumerBusiness:ConsumerBusiness;
  consumerId:string;
  businessId:string;
  constructor(private consumerService:ConsumerService) {
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
    this.consumerId="";
    this.businessId=""
   }

  ngOnInit(): void {
  }

  viewConsumerBusiness(ConsumerId:string,BusinessId:string)
  {
    this.consumerService.viewConsumerBusiness(ConsumerId,BusinessId).subscribe(data=>{this.consumerBusiness=data;});
  }

}
