module.exports=(app)=>{
//Rota para a página noticia
	app.get('/noticia',(req,res)=>{
		const dbConnection=require('../../config/dbConnection');//Importa o banco de dados
		const connection=dbConnection();//Executa a conexão com o banco de dados
			connection.query('select * from noticias',(error,result)=>{
				if(error){
					console.log(error);//Mostra erros no terminal
				}
				res.render('noticias/noticia.ejs',{noticias:result}); //Renderização da tela noticia.ejs juntamente com o envio da variavel result
			});
	});
}