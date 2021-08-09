import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { ConsumerProperty } from '../Models/consumerProperty';

@Component({
  selector: 'app-view-consumer-property',
  templateUrl: './view-consumer-property.component.html',
  styleUrls: ['./view-consumer-property.component.css']
})
export class ViewConsumerPropertyComponent implements OnInit {
  consumerId:string;
  propertyId:string;
  flag:boolean;
  consumerProperty:ConsumerProperty;
  constructor(private apiService:APIService) {
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
      this.propertyId="";
      this.flag=true;
  }

  ngOnInit(): void {
  }

  viewConsumerProperty(ConsumerId:string,PropertyId:string)
  {
    this.apiService.viewConsumerProperty(ConsumerId,PropertyId).subscribe(data=>{this.consumerProperty=data;});
    setTimeout(() => this.flag=false, 650);
  }
}
