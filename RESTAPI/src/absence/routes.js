const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getAbsence);
router.post('/', controller.addAbsence);
router.get('/:id', controller.getAbsenceById);

module.exports = router;