module.exports=(app)=>{
//Rota para a página principal do app
	app.get('/',(req,res)=>{
		res.render('home/index.ejs');
	});
}