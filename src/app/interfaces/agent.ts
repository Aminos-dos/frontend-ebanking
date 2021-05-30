import { Admin } from "./admin";
import { Agence } from "./agence";
import { Utilisateur } from "./utilisateur";

export interface Agent extends Utilisateur{

    creationAdmin: Admin;
    agence: Agence;

    
}