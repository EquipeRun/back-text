
/*
	Arquivo de conexão para o MariaDb
*/

var myArgs = process.argv.slice(2);
var port = 0;

// if(myArgs[0] == '-port'){
// 	port = myArgs[1]
// }
// else{
// 	port = '3306'
// }

port = process.env.PORT || 3306

console.log('Porta para o banco de dados: '+port)

module.exports = function(){

	var mysql      = require('mysql');
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'hacka_ima',
		port: port
	});

	connection.connect(function(err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}

		console.log('Conexão realizada com sucesso!');

	});

	return connection
}
