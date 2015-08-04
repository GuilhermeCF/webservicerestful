var db_string = 'localhost:27017/data/language';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

db.once('open', function() {
	var programmerSchema = mongoose.Schema({
		name: String,
		paradigm: String,
		author: String,
		created_at: Date
	});

	exports.programmer = mongoose.model('programmer', programmerSchema);
});