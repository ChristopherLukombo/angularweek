
import {Attack} from "./attack";

export class Pokemon {
    public nom: string;
    public speed: number;
    public defense: number;
    public pv: number;
    public attacks: Attack[] = new Array(4);
    public position: number = 0;

    constructor(nom: string, speed: number, defense: number, pv: number, position: number) {
        this.nom = nom;
        this.speed = speed;
        this.defense = defense;
        this.pv = pv;
        this.position = position;
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

    public getAttacks() {
        return this.attacks;
    }

    public attack(target: Pokemon) {
        const a = this.attacks[Math.floor(Math.random() * Math.floor(2))];
        target.pv -= a.degat;
    }

    public setAttacks(attacks: Attack[]) {
        this.attacks = attacks;
    }


}
