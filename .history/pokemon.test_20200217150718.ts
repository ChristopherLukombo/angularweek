import {Pokemon} from "./pokemon";

describe('Speed test', () => {
    test('Pokemon A and B are equal', () => {
        const A = new Pokemon('A', 23, 1, 12, 12);
        const B = new Pokemon('B', 23, 1, 12, 12);
        expect(B.canAttacked(A, B)).toBe(0);
    });

    test('Pokemon A is faster than B', () => {
        const A = new Pokemon('A', 2);
        const B = new Pokemon('B', 1);
        expect(B.canAttacked(A, B)).toBe(1);
    });

    test('Pokemon B is faster than B', () => {
        const A = new Pokemon('A', 1);
        const B = new Pokemon('B', 2);
        expect(B.canAttacked(A, B)).toBe(-1);
    });
});