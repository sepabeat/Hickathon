const Pool = require('pg').Pool;

const pool = new Pool({
	user: "salperez",
	host: "localhost",
	database: "absence",
	password: "0000",
	port: 5432,	
});

module.exports = pool;