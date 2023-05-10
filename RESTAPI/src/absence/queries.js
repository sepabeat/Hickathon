const getAbsence = "SELECT * FROM absence";
const getAbsenceById = "SELECT * FROM absence WHERE id = $1";
const addabsence = "INSERT INTO absence (name, email, phone) VALUES ($1, $2, $3)";

module.exports = {
	getAbsence,
	getAbsenceById,
	addabsence,
};