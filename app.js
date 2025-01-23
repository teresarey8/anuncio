const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req,res)=>{
    let oferta = req.cookies.preferencia;
    res.render('index',{oferta});
})

app.post('/anuncio', (req, res) => {
    let preferencia = req.body.preferencia;
    res.cookie('preferencia', preferencia, { maxAge: 60 * 1000 }); 
})

app.listen(8001);