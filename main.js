"use strict";
exports.__esModule = true;
var pokemon_1 = require("./pokemon");
var attack_1 = require("./attack");
var game_1 = require("./game");
var pokemon1 = new pokemon_1.Pokemon('toto1', 23, 1, 12, 12);
var pokemon2 = new pokemon_1.Pokemon('toto2', 24, 23, 23, 13);
var attacksList = [
    new attack_1.Attack('bbule de neige', 12, 12)
];
pokemon1.setAttacks(attacksList);
var game = new game_1.Game();
game.launch();
