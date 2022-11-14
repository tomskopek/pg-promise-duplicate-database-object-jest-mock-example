const { db } = require('./database')

async function sum(a, b) {
    await db.oneOrNone('SELECT * FROM information_schema.tables LIMIT 1');
    return a + b;
}

module.exports = sum;
