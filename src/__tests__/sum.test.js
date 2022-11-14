const sum = require('../sum')
const { db } = require('../database')

// jest.mock('../sum')

// jest.mock('../sum', () => {
//     return () => 3
// })

describe('sum', () => {
    beforeEach(()=>{
        // some setup for the integration test
        db.oneOrNone('SELECT * FROM information_schema.tables LIMIT 1');
    })
    it('should return 2 when given 1 and 1', async () => {
        const result = await sum(1,1)
        expect(result).toEqual(2)
    });
});
