import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from 'app/interfaces/agent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AgentServiceService {
  private url: string;

  constructor(private http: HttpClient) { 
    this.url='http://localhost:8080/agent';
  }
  public getAll(){
    console.log('get agents');
    return this.http.get<Agent[]>(`http://localhost:8080/agent/getall`);
  }
  
  public updateAgent(agentId : number, agent: Agent){
    return this.http.put<Agent>(`${this.url}/updateAgent/${agentId}`,agent);
  }
  
}
