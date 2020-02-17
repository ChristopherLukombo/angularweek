import {pokemon} from ".//pokemon";

function multiplyBy4(tab = []) {
    return tab;
}

describe('multiplyBy4', () => {
    it('should return empty array', () => {
        expect(multiplyBy4([])).toEqual([]);
    });
});

describe('Speed test', () => {
    test('Pokemon A is the fastest', () => {
        const A = new pokemon('A');
        const B = new pokemon('B');
        expect(B.canAttacked(A, B)).toBe(true);
    });
});