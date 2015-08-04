var db = require('../db_config.js');

exports.list = function(callback){

	db.programmer.find({}, function(error, languages) {

		if(error){
			callback({error: 'Não foi possivel listar as linguagens'});
		}else{
			callback(languages);
		}

	});

};

exports.findLang = function(id, callback){//alterar o nome desse metodo

	db.programmer.findById(id, function(error, language){

		if(error){
			callback({error: 'Não foi possivel encontrar a linguagem'});
		}else{
			callback(language);
		}	

	});

};

exports.save = function(name, paradigm, author, callback){

	new db.programmer({
		'name': name,
		'paradigm': paradigm,
		'author': author,
		created_at: new Date()

	}).save(function(error, language) {
		if(error){
			callback({error: 'Não foi possivel salvar a linguagem'});
		}else{
			callback(language);
		}
	});

};

exports.update = function(id, name, paradigm, author, callback) {

	db.programmer.findById(id, function(error, language){

		if(name) {
			language.name = name;
		}

		if(paradigm) {
			language.paradigm = paradigm;
		}

		if(author) {
			language.author = author;
		}

		language.save(function(error, language) {
			
			if(error){
				callback({error: 'Não foi possivel editar a linguagem'});
			}else{
				callback(language);
			}

		});

	});
};

exports.delete = function(id, callback){

	db.programmer.findById(id, function(error, language){

		if(error){
			callback({error: 'Não foi possivel retornar a linguagem'});
		}else{
			language.remove(function(error) {
				if(!error) {
					callback({response: 'Linguagem deletada com sucesso'});
				}

			});
		}	

	});

}; 