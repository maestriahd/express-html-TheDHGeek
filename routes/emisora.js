var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('emisora',
    {
      title: 'Proyecto Séneca',
      texto: 'Emisora de la comunidad uniandina - La hacemos todos',
      logo: 'http://www.proyectoseneca.com/wp-content/uploads/2017/01/cropped-Logo-01.png'
  }
  );
});

module.exports = router;
