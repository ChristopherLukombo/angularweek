"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./pokemon");
var Game = (function () {
    function Game() {
    }
    Game.prototype.launch = function () {
        var finished = false;
        while (!finished) {
            var pokemon1 = new pokemon_1.Pokemon('salameche', 24, 23, 23, 13);
            var pokemon2 = new pokemon_1.Pokemon('pikachu', 24, 23, 23, 13);
            console.log('pokemon 1 attack');
            pokemon1.attack(pokemon2);
            console.log('pokemon 2 attack');
            pokemon2.attack(pokemon1);
            if (pokemon1.isDead() || pokemon2.isDead()) {
                finished = false;
                console.log("Fin de la partie !");
            }
        }
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map