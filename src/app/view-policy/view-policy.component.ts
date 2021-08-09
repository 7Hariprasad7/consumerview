import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { ConsumerPolicy } from '../Models/consumerPolicy';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {
  consumerPolicy:ConsumerPolicy;
  consumerId:string;
  policyId:string;
  flag:boolean;
  constructor(private apiService:APIService) {
    this.consumerPolicy ={
      "consumerId": "",
      "businessId": "",
      "policyId": "",
      "acceptedQuotes": "",
      "policyStatus": "",
      "paymentDetails": "",
      "acceptanceStatus": "",
      "effectiveDate": ""
    }
    this.consumerId="";
    this.policyId="";
    this.flag=true;
   }

  ngOnInit(): void {
  }

  viewPolicy(ConsumerId:string,PolicyId:string)
  {
    this.apiService.viewPolicy(ConsumerId,PolicyId).subscribe(data=>{this.consumerPolicy=data;});
    setTimeout(() => this.flag=false, 650);
  }
}
