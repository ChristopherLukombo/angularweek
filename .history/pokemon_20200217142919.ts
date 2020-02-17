
import {attack} from "./attack";
export class pokemon {
    public nom: string;
    public speed: number;
    public defense: number = 200;
    public attack: atta;
    public pv: number = 200;
    public position: number = 0;

    constructor(nom: string, speed: number) {
        this.nom = nom;
        this.speed = speed;
    }

    canAttacked(pokemon1: pokemon, pokemon2: pokemon): number {
        if (pokemon1.speed > pokemon2.speed) {
            return 1;
        } else if (pokemon1.speed < pokemon2.speed) {
            return -1;
        } else {
            return 0;
        }
    };

}
