import { Compte } from "./compte";

export interface Operation {
    id: number;
    compte: Compte;
    date: Date;
    sommeEspece: number;
    sommeCompte: number;
    type: string;
    devise: string;
}