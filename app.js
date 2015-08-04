var app = require('./app_config.js');



var language = require('./controller/languageController.js');




var validator = require('validator');

app.get('/', function(req, res){

	res.end('Servidor online');

});



app.get('/language', function(req, res){

	language.list(function(resp) { 
		res.json(resp);
	});

});

app.get('/language/:id', function(req, res){
		
	id = validator.trim(validator.escape(req.param('id')));

	language.findLang(id, function(resp) {
		res.json(resp);
	});
});

app.post('/language', function(req, res){
	
	var name = validator.trim(validator.escape(req.param('name')));
	var paradigm = validator.trim(validator.escape(req.param('paradigm')));
	var author = validator.trim(validator.escape(req.param('author')));

	language.save(name, paradigm, author, function(resp) {
		res.json(resp);
	});

});

app.put('/language', function(req, res){
	
	var id = validator.trim(validator.escape(req.param('id')));
	var name = validator.trim(validator.escape(req.param('name')));
	var paradigm = validator.trim(validator.escape(req.param('paradigm')));
	var author = validator.trim(validator.escape(req.param('author')));

	language.update(id, name, paradigm, author, function(resp) {
		res.json(resp);
	});

});

app.delete('/language/:id', function(req, res){
	
	id = validator.trim(validator.escape(req.param('id')));

	language.delete(id, function(resp) {
		res.json(resp);
	});

});