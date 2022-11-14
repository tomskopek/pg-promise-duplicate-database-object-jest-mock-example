const initOptions = {};
const pgp = require('pg-promise')(initOptions);

const connection = {
    "user": "dev",
    "password": "password",
    "host": "localhost",
    "port": 5432,
    "database": "test_duplicate_connections"
}

const db = pgp(connection)

module.exports = { db, pgp }
