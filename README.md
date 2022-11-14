1. create a new database to test with, modify connection details in database.js

2. run `yarn` or `npm install` to install jest and pg-promise

3. run `yarn test` - notice no errors

4. unccoment the first jest mock in the sum.test.js file - notice it throws:
`Creating a duplicate database object for the same connection`

5. comment the first one and uncomment the second jest mock, notice how it doesnt throw that error

why is this happening?
