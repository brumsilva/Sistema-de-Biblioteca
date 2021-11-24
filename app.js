app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('cadastro', (req, res) => {
    let _cadastro = new cadastro()
    _cadastro.
})

app.post('/acessarlogin', (req, res) => {
    let usuario = req.body.usuario
    let senha = req.body.senha

    
})

