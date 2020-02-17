
import {Attack} from "./attack";
export class Pokemon {
    public nom: string;
    public speed: number;
    public defense: number;
    public pv: number;
    public position: number = 0;

    constructor(nom: string, speed: number, defense: number, pv: number, position: number) {
        this.nom = nom;
        this.speed = speed;
    }

    canAttacked(pokemon1: Pokemon, pokemon2: Pokemon): number {
        if (pokemon1.speed > pokemon2.speed) {
            return 1;
        } else if (pokemon1.speed < pokemon2.speed) {
            return -1;
        } else {
            return 0;
        }
    };


}
