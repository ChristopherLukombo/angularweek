import { Pokemon } from "./pokemon";

export class Game {
    public pokemon1: Pokemon;
    public pokemon2: Pokemon;

    constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    launch() {
        var userInput = prompt('Please enter your name.');
        
    }

}
