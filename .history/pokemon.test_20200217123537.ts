

describe('Speed test', () => {
    test('Pokemon A isthe fastest', () => {
        const A = new pokemon('A');
        const B = new pokemon('B');
        expect(A.canAttacked(A, B)).toEqual(true);
    });
});