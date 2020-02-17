import { pokemon } from "./pokemon";

function multiplyBy4(tab = []) {
    return tab;
}

describe('Speed test', () => {
    test('Pokemon A isthe fastest', () => {
        const A = new pokemon('A');
        const B = new pokemon('B');
        const round = new Round();

        expect(round.getFastestPokemon(A, B)).toBe(A);
    });
});