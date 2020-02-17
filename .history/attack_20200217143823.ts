import { Pokemon } from "./pokemon";

export class Attack {
    public pourcentage: number;
    public degat: number;
    public 

    constructor() {
    }

    public attack(pokemon: Pokemon, degat: number) {
        pokemon.pv -= degat;
        return pokemon.pv;
    }

}
