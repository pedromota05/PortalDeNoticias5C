const mysql=require('mysql');//Importação do módulo mysql
module.exports=()=>{
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'portal_noticias'
	});//Cria conexão com o banco de dados portal_noticias
}