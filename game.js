"use strict";
exports.__esModule = true;
var pokemon_1 = require("./pokemon");
var attack_1 = require("./attack");
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.launch = function () {
        setTimeout(function () {
            var finished = false;
            while (!finished) {
                var pokemon1 = new pokemon_1.Pokemon('salameche', 24, 23, 12, 13);
                var pokemon2 = new pokemon_1.Pokemon('pikachu', 24, 23, 50, 13);
                var attacksList = [
                    new attack_1.Attack('bbule de neige', 12, 12),
                    new attack_1.Attack('boule de feu', 12, 12),
                    new attack_1.Attack('bbule de neige', 12, 12),
                    new attack_1.Attack('bbule de neige', 12, 12)
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
            }
            ;
        }, 3000);
    };
    return Game;
}());
exports.Game = Game;
