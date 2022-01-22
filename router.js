const express = require('express')
const router = express.Router()

const credential={
    email:'admin@gmail.com',
    password:'password'
}

router.post('/login',(req, res) =>{
    if(req.body.email ==credential.email && req.body.password==credential.password) {
        req.session.user = req.body.email;
        res.redirect('/route/dashboard')
    } else {
        res.send('invalid username')
    }
})

router.get('/dashboard', (req, res) =>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send('Unauthorized User')
    }
})

router.get('/logout',(req, res)=>{
    req.session.destroy((error)=>{
    error ? res.send("Error") : res.render('base', {title:"Express", logout:"Logout Successfully"})
    })
})

module.exports=router