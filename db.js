const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'std',
    password: 'VILLSdv2244',
    port: 5432,
});

module.exports = pool;