const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path = require('path')
// const multer = require('multer') ---> para Upload de arquivos!

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, './adminFiles/serverIndex.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './adminFiles/login.html'))
})

// UPLOAD DE ARQUIVOS!
// const storage = multer.diskStorage({
//     destination: function (req, file, callback){
//         callback(null, './upload')
//     },
//     filename: function (req, file, callback){
//         callback(null, file.originalname)
//     }
// })
// const upload = multer({storage}).single('arquivo')
// app.post('/upload', (req, res) => {
//     upload(req, res, err => {
//         if(err){
//             return res.end('Ocorreu um erro')
//         }

//         res.end('Upload concluído!')
//     })
// })

app.listen(8080, () => {
    console.log('Executando')
})