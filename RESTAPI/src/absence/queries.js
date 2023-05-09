const getAbsence = "SELECT * FROM absence";
const getAbsenceById = "SELECT * FROM absence WHERE id = $1";

module.exports = {
	getAbsence,
	getAbsenceById,
};