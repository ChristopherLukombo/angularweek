import {pokemon} from "./pokemon";

describe('Speed test', () => {
    test('Pokemon A is the fastest', () => {
        const A = new pokemon('A');
        const B = new pokemon('B');
        expect(B.canAttacked(A, B)).toBe(true);
    });
});