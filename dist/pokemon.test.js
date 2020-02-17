"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./pokemon");
var attack_1 = require("./attack");
describe('Speed test', function () {
    test('Pokemon A and B are equal', function () {
        var A = new pokemon_1.Pokemon('A', 23, 1, 12, 12);
        var B = new pokemon_1.Pokemon('B', 23, 1, 12, 12);
        expect(B.canAttacked(A, B)).toBe(0);
    });
    test('Pokemon A is faster than B', function () {
        var A = new pokemon_1.Pokemon('A', 2, 1, 12, 12);
        var B = new pokemon_1.Pokemon('B', 1, 1, 12, 12);
        expect(B.canAttacked(A, B)).toBe(1);
    });
    test('Pokemon B is faster than B', function () {
        var A = new pokemon_1.Pokemon('A', 1, 1, 12, 12);
        var B = new pokemon_1.Pokemon('B', 2, 1, 12, 12);
        expect(B.canAttacked(A, B)).toBe(-1);
    });
    test('add attack', function () {
        var A = new pokemon_1.Pokemon('A', 1, 1, 12, 12);
        var attacksList = [
            new attack_1.Attack('bule de neige', 12, 12),
            new attack_1.Attack('bbule de glace', 12, 12),
            new attack_1.Attack('lance flamme', 12, 12),
            new attack_1.Attack('attaque qui pu', 12, 12)
        ];
        A.setAttacks(attacksList);
        var B = new pokemon_1.Pokemon('B', 2, 1, 12, 12);
        expect(A.attack(B)).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=pokemon.test.js.map