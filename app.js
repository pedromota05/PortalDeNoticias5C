const app=require('./config/server.js');//Importação da configuração do servidor

//Impotação das rotas
const rotaHome=require('./app/routes/home.js')(app);
const rotaAdmin=require('./app/routes/admin.js')(app);
const rotaNoticias=require('./app/routes/noticias.js')(app);


//Cria um servidor rodando na porta 3000
app.listen('3000', ()=>{
	console.log('Servidor rodando na porta 3000');
});