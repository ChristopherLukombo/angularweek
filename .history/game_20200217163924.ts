import { pokemon } from './.history/pokemon_20200217115205';
import { Pokemon } from "./pokemon";

export class Game {

    launch() {
        let finished = false;
        while (!finished) {
            const pokemon1 = new Pokemon('salameche', 24, 23, 23, 13);
            const pokemon2 = new Pokemon('pikachu', 24, 23, 23, 13);

            console.log('first attack');
            pokemon1.attack(pokemon2);
            pokemon2.attack(pokemon1);

            if (pokemon1.isDead() || pokemon2.isDead()) {
                finished = false;
                console.log("Fin de la partie !");
            }
        }
    }

}
