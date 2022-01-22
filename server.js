const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyparser = require('body-parser')
const router = require('./router')
const {v4:uuidv4}=require("uuid")
const app = express()

app.set('view engine','ejs')
app.use('/css',express.static(path.join(__dirname,'public/css')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
app.use(bodyparser.urlencoded({extended:true}))

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

app.use('/route',router)
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.render('base',{titl:'Login system'})
})

app.listen(port, ()=>{
    console.log('listening to the server on http://localhost:3000')
})