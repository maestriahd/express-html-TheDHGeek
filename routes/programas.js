var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('programas',
    {
      title: 'Programas',
      texto: 'Éstos son los programas de ésta temporada',
      logo: 'http://www.proyectoseneca.com/wp-content/uploads/2017/01/cropped-Logo-01.png'
  }
  );
});

module.exports = router;
