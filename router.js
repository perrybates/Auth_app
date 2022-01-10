const express = require('express')
const router = express.Router()

const credential={
    email:'admin@gmail.com',
    password:'password'
}

router.post('/login',(req, res) =>{
    if(req.body.email ==credential.email && req.body.password==credential.password) {
        req.session.user = req.body.email;
        console.log(req.session.secret)
        res.send('login successful')
    } else {
        res.send('invalid username')
    }
})

module.exports=router