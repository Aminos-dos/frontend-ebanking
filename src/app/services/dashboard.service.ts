import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from 'app/interfaces/client';
import { Compte } from 'app/interfaces/compte';
import { Virement} from 'app/interfaces/virement';
import { Operation} from 'app/interfaces/operation';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private urlVirement: string;
  private urlCompte: string;
  private urlOperation: string;

  constructor(private http: HttpClient) { 
    this.urlVirement='http://localhost:8080/virement'; 
    this.urlCompte='http://localhost:8080/compte';
    this.urlOperation='http://localhost:8080/operation'; 
  }

  getComptes(clientId:number){
    return this.http.get<Compte[]>(`${this.urlCompte}/getComptes/${clientId}`);
  }
  getAllVirEnv(compte:Compte){
    return this.http.get<Virement[]>(`${this.urlVirement}/getAllVirEnv/${compte.id}`);
  }
  getAllVirRec(compte:Compte){
    return this.http.get<Virement[]>(`${this.urlVirement}/getAllVirRec/${compte.id}`);
  }
  getAllOper(compte:Compte){
    return this.http.get<Operation[]>(`${this.urlOperation}/getAllOper/${compte.id}`);
  }
}
