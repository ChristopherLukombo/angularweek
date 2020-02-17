import {pokemon} from "./pokemon";

describe('Speed test', () => {
    test('Pokemon A is the fastest', () => {
        const A = new pokemon('A', 1);
        const B = new pokemon('B', 1);
        expect(B.canAttacked(A, B)).toBe(0);
    });

    test('Pokemon A is the fastest', () => {
        const A = new pokemon('A', 1);
        const B = new pokemon('B', 2);
        expect(B.canAttacked(A, B)).toBe(1);
    });
});