import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Compte } from '../../interfaces/compte';
import { Virement } from '../../interfaces/virement';
import { Operation } from '../../interfaces/operation';
import { DashboardService } from '../../services/dashboard.service';
import { OperationCanceledException } from 'typescript';
import { now } from 'jquery';



@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  idClient:number;
  comptes:Array<Compte>=[];


  constructor(private dashboardService:DashboardService){}
    ngOnInit(){
      this.idClient=8;
      this.dashboardService.getComptes(this.idClient).subscribe((res:Array<Compte>)=>{
        this.comptes=res;
        for(let compte of this.comptes){
        
          this.dashboardService.getAllVirEnv(compte).subscribe((res1:Array<Virement>)=>{
            compte.virementsEnvoyes = res1;
            console.log("virement envoyés : ",compte.virementsEnvoyes.length);
            compte.debitMois=0;
            for (let vire of res1) {
              compte.debitMois = compte.debitMois + vire.sommeEnv;
            }
            
          },err=>{
            console.log(err);
          });
          this.dashboardService.getAllVirRec(compte).subscribe((res2:Array<Virement>)=>{
            compte.virementsRecus = res2;
            console.log("virement recues : ",compte.virementsRecus.length);
            compte.creditMois=0;
            for (let vire of res2) {
              compte.creditMois = compte.creditMois + vire.sommeRecu;
            }
          },err=>{
            console.log(err);
          });
          this.dashboardService.getAllOper(compte).subscribe((res3:Array<Operation>)=>{
            compte.operations = res3;
          },err=>{
            console.log(err);
          });
          
          
          
        }
      },err=>{
        console.log(err);
      });
      
    }
}
