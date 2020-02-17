import { Pokemon } from "./pokemon";

export class Attack {
    public pourcentage: number;
    public degat: number;
    public name: string;

    constructor() {
    }

    public attack(pokemon: Pokemon, degat: number) {
        pokemon.pv -= degat;
        return pokemon.pv;
    }

    public attackRand(pokemon: Pokemon) {
        pokemon.pv -= Math.floor(Math.random() * Math.floor(5));
        return pokemon.pv;
    }

}
