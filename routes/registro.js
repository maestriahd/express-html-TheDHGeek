var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('emisora',
    {

      texto: 'La hacemos todos',
      logo: 'http://www.proyectoseneca.com/wp-content/uploads/2017/01/cropped-Logo-01-e1488680044708.png'

  }
  );
});

module.exports = router;
