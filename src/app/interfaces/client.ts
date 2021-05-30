import { Agence } from "./agence";
import { Agent } from "./agent";
import { Utilisateur } from "./utilisateur";

export interface Client extends Utilisateur{
    estOperateur: string;
    creationAgent: Agent;
    agence: Agence;

}