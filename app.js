const express = require('express')
const app = express()

const mongoose = require('mongoose')

const port = 3000


mongoose.connect('mongodb+srv://biblioteca:12345@cluster0.dg8eg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})


// CRIANDO UM MODELO  PARA INCLUSÃO DE LIVROS NO BANCO DE DADOS
const livros = mongoose.model('Cadastro de Livros', {
  titulo: String,
  nomeAutor: String,
  anoPublicacao: Number,
})

// CRIANDO UM MODELO PARA CADASTRAR OS USUARIOS NO BANCO DE DADOS
const cadastro = mongoose.model('cadastro', {
  nome: String,
  sobrenome: String,
  email: String,
  senha: String
})

// CRIANDO UM MODELO  PARA INCLUSÃO DE ALUNOS NO BANCO DE DADOS
// const alunos = mongoose.model('Cadastro de Alunos', {
//   nome: String,
//   email: String,
//   senha: String,
// })


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(express.urlencoded())
app.use(express.json())

app.use(express.static(__dirname + '/public'))

// ROTAS

// criei essa rota so pra testar, coloquei um h1 na pagina atualizacaoaluno.ejs, como teste.
app.get('/', (req, res) => {
  res.render('atualizacaoaluno')
})


// Ouvinte da porta de acesso
app.listen(port, () => {
  console.log('Biblioteca no ar, na porta: ' + port)
})