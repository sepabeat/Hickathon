const pool = require('../../db');
const queries = require('./queries');

const getAbsence = (req, res) => {
	pool.query(queries.getAbsence, (err, results) => {
		if (err) {
			throw err;
		}
		res.status(200).json(results.rows);
	})
};

const getAbsenceById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.getAbsenceById, [id], (err, results) => {
		if (err) {
			throw err;
		}
		res.status(200).json(results.rows);
	})
};

const addAbsence = (req, res) => {
	const { name, email, phone } = req.body;
	pool.query('INSERT INTO absence (name, email, phone) VALUES ($1, $2, $3)', [name, email, phone], (err, results) => {
		if (err) {
			throw err;
		}
		res.status(201).send(`Absence added with ID: ${results.insertId}`);
	});
};

module.exports = {
	getAbsence,
	getAbsenceById,
	addAbsence,
};