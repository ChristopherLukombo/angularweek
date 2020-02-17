function multiplyBy4(tab = []) {
    return tab;
}

describe('Speed test', () => {
    test('Pokemon A is the fastest', () => {
        const A = new Pokemon('A', 2);
        const B = new Pokemon('B', 1);
        const round = new Round();

        expect(round.getFastestPokemon(A, B)).toBe(A);
    });
});