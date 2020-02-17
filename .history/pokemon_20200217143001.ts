
import {Attack} from "./attack";
export class Pokemon {
    public nom: string;
    public speed: number;
    public defense: number = 200;
    public attack: Attack;
    public pv: number = 200;
    public position: number = 0;

    constructor(nom: string, speed: number) {
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
