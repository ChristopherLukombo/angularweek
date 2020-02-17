"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(nom, speed, defense, pv, position) {
        this.attacks = new Array(4);
        this.position = 0;
        this.nom = nom;
        this.speed = speed;
        this.defense = defense;
        this.pv = pv;
        this.position = position;
    }
    Pokemon.prototype.canAttacked = function (pokemon1, pokemon2) {
        if (pokemon1.speed > pokemon2.speed) {
            return 1;
        }
        else if (pokemon1.speed < pokemon2.speed) {
            return -1;
        }
        else {
            return 0;
        }
    };
    ;
    Pokemon.prototype.getAttacks = function () {
        return this.attacks;
    };
    Pokemon.prototype.attack = function (target) {
        var a = this.attacks[Math.floor(Math.random() * Math.floor(2))];
        target.pv -= a.degat;
        return a.degat;
    };
    Pokemon.prototype.setAttacks = function (attacks) {
        this.attacks = attacks;
    };
    Pokemon.prototype.isDead = function () {
        return this.pv <= 0;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
