var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('episodios',
    {
      title: 'Episodios',
      texto: 'Estos son los episodios publicados en la temporada 2017',
      logo: 'http://www.proyectoseneca.com/wp-content/uploads/2017/01/cropped-Logo-01-e1488680044708.png'
  }
  );
});

module.exports = router;
