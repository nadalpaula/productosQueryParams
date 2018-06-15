var express = require('express');
var router = express.Router();
const paginaController = require('../controllers/paginaController')
/* GET home page. */
router.get('/list', paginaController.home) 

module.exports = router;
