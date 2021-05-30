import { Component, OnInit } from '@angular/core';
import { Agent } from 'app/interfaces/agent';
import { AgentServiceService } from 'app/services/agent-service.service';


declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public emailT: string;
    public tempAgent : Agent;
    public tableData1: TableData;
    public tableData2: TableData;
    public agents: Agent[];
    public updatedAgent: Agent;
    public upAgent : Agent;
    constructor(private agentService: AgentServiceService){

    }
    ngOnInit(){
        this.getAgents();
    }
    public getAgents(): void {
        this.agentService.getAll().subscribe((response: Agent[])=>{this.agents=response; console.log(this.agents)});
        console.log(this.agents);
       console.log('ana hna');
       
     }
     
     register(form){
       console.log(form.controls['cin'].value);
     }
     public updateAgent(form, agentId: string): void {
       console.log(form.value);
      this.upAgent = form.value;
      console.log(this.upAgent.email);
        // this.agentService.updateAgent(agentId, agent).subscribe((response: Agent)=>{this.updatedAgent=response; console.log(this.updateAgent)});
       console.log('ana hna 2');       
     }
     public onOpenModal(agent: Agent, mode: string): void {
         console.log('clicked');
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
  
        if (mode === 'edit') {
          this.tempAgent = agent;
          button.setAttribute('data-target', '#updateAgentModal');
        }
        if (mode === 'delete') {
          this.tempAgent = agent;
          button.setAttribute('data-target', '#deleteAgentModal');
        }
        container.appendChild(button);
        button.click();
      }

    }
