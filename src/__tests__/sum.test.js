const sum = require('../sum')

describe('sum', () => {
    it('should return 2 when given 1 and 1', () => {
        expect(sum(1, 1)).toEqual(2)
    });
});
