const sum = require('../sum')
const { db } = require('../database')

// 1. run the test, should have no error

// 2. Uncomment this mock, run `yarn test`, see how it throws "Creating a duplicate database object for the same connection"
// jest.mock('../sum')

// 3. Comment the above mock, uncomment this mock, see how it doesnt throw that same error
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
