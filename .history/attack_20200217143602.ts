import {Pokemon} from "./pokemon";
export class Attack {
    public pourcentage: number;
    public degat: number;

    constructor() {
    }

    public attack(pokemon: Pokemon, degat: number) {
        pokemon.pv -= degat;
    }

}
