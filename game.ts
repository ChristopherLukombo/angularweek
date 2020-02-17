import { Pokemon } from "./pokemon";
import { Attack } from './attack';

export class Game {

    launch() {
        setTimeout(function () {
            let finished = false;
            while (!finished) {
                let pokemon1 = new Pokemon('salameche', 24, 23, 12, 13);
                let pokemon2 = new Pokemon('pikachu', 24, 23, 50, 13);

                const attacksList = [
                    new Attack('bbule de neige', 12, 12),
                    new Attack('boule de feu', 12, 12),
                    new Attack('bbule de neige', 12, 12),
                    new Attack('bbule de neige', 12, 12)
                ];
                pokemon1.setAttacks(attacksList);
                pokemon2.setAttacks(attacksList);

                console.log('pokemon 1 attack');
                pokemon1.attack(pokemon2);
                console.log(pokemon2.pv);

                console.log('pokemon 2 attack');
                pokemon2.attack(pokemon1);
                console.log(pokemon1.pv);

                if (pokemon1.isDead() || pokemon2.isDead()) {
                    finished = true;
                    console.log("Fin de la partie !");
                }
            };
        }, 3000);

    }

}
