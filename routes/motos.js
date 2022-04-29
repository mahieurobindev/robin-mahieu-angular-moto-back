var express = require('express');
var router = express.Router();

// Controller
var motos_controller = require("../controllers/moto");

/* GET moto listing. */
router.get('/', motos_controller.getAll);

router.get('/:id', motos_controller.getById);

router.post('/', motos_controller.create);

router.put('/:id', motos_controller.update);

router.delete('/:id', motos_controller.delete);

module.exports = router;
