import { attack } from './.history/attack_20200217142831';
import {Pokemon} from "./pokemon";
import { Attack } from "./attack";

describe('Speed test', () => {
    test('Pokemon A and B are equal', () => {
        const A = new Pokemon('A', 23, 1, 12, 12);
        const B = new Pokemon('B', 23, 1, 12, 12);
        expect(B.canAttacked(A, B)).toBe(0);
    });

    test('Pokemon A is faster than B', () => {
        const A = new Pokemon('A', 2, 1, 12, 12);
        const B = new Pokemon('B', 1, 1, 12, 12);
        expect(B.canAttacked(A, B)).toBe(1);
    });

    test('Pokemon B is faster than B', () => {
        const A = new Pokemon('A', 1, 1, 12, 12);
        const B = new Pokemon('B', 2, 1, 12, 12);
        expect(B.canAttacked(A, B)).toBe(-1);
    });

    test('add attack', () => {
        const A = new Pokemon('A', 1, 1, 12, 12);

        const attacksList = [
            new Attack('bbule de neige', 12, 12)
        ];

        A.setAttacks(attacksList);


        const B = new Pokemon('B', 2, 1, 12, 12);

        A.attack(B);
    });
});