var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* Contacto */
router.get('/', function(req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});

/*
formulario de contacto
*/

router.post('/enviar', function(req,res,next){
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'cvoa710@gmail.com',
			pass: 'Cvoa1794@#'
		}
	});

	var mailOptions = {
		from: 'Jhon Doe <jhondoe@gmail.com>',
		to: 'cvoa710@gmail.com',
		subject: 'formulario de contacto',
		text: 'Se ha enviado un mensaje desde un formulario de conacto Nombre.'+req.body.nombre+'Email: '+req.body.email+'Mensaje: '+req.body.mensaje,
		html: '<p> Se ha enviado un mensaje desde un forulario de contacto</p><ul><li>Nombre: '+req.body.nombre+'</li><li>Email: '+req.body.email+'</li><li>Mensaje: '+req.body.mensaje+'</li></ul>'		
	};

	transporter.sendMail(mailOptions, function(error,info){
		if(error){
			console.log(error);
			res.redirect('/');
		}else{
			console.log('Mensaje enviado '+info.response);
			res.redirect('/');
		}
	});
});

module.exports = router;
