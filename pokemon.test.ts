import {Pokemon} from "./pokemon";
import { Attack } from "./attack";

describe('Speed test', () => {
    test('Pokemon A and B are equal', () => {
        const A: Pokemon = new Pokemon('A', 23, 1, 12, 12);
        const B: Pokemon = new Pokemon('B', 23, 1, 12, 12);
        expect(B.canAttacked(A, B)).toBe(0);
    });

    test('Pokemon A is faster than B', () => {
        const A: Pokemon = new Pokemon('A', 2, 1, 12, 12);
        const B: Pokemon = new Pokemon('B', 1, 1, 12, 12);
        expect(B.canAttacked(A, B)).toBe(1);
    });

    test('Pokemon B is faster than B', () => {
        const A: Pokemon = new Pokemon('A', 1, 1, 12, 12);
        const B: Pokemon = new Pokemon('B', 2, 1, 12, 12);
        expect(B.canAttacked(A, B)).toBe(-1);
    });

    test('add attack', () => {
        const A: Pokemon = new Pokemon('A', 1, 1, 12, 12);

        const attacksList = [
            new Attack('bule de neige', 12, 12),
            new Attack('bbule de glace', 12, 12),
            new Attack('lance flamme', 12, 12),
            new Attack('attaque qui pu', 12, 12)
        ];

        A.setAttacks(attacksList);


        const B = new Pokemon('B', 2, 1, 12, 12);

        expect(A.attack(B)).toBeGreaterThan(0);
    });
});