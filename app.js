const express = require('express')
const app = express()
const port = 3030
const path = require('path')
//dirección de la carpeta con las imágenes y estilos
const publicPath= path.resolve(__dirname, './public')
app.use(express.static(publicPath))//(path.join(__dirname, './public')))
//listen hacés que el puerto se quede escuchando. Para cortar "ctrl c"
app.listen(port,()=> console.log(`Server en el puerto ${port}!`))

app.get('/',(req, res)=>{res.sendFile(path.join(__dirname,'/views/index.html'))})

app.get('/babbage',(req,res)=>{res.sendFile(path.join(__dirname,'/views/babbage.html'))})

app.get('/berners-lee',(req,res)=> {res.sendFile(path.join(__dirname,'/views/berners-lee.html'))})

app.get('/clarke',(req, res)=> {res.sendFile(path.join(__dirname,'/views/clarke.html'))})

app.get('/hamilton', (req, res) => {res.sendFile(path.join(__dirname,'/views/hamilton.html'))})

app.get('/hopper',(req,res)=>{res.sendFile(path.join(__dirname,'/views/hopper.html'))})

app.get('/lovelace',(req,res)=>{res.sendFile(path.join(__dirname,'/views/lovelace.html'))})

app.get('/turing',(req,res)=>{res.sendFile(path.join(__dirname,'/views/turing.html'))})

