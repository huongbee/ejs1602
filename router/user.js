const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send({
        username:"Ti"
    })
});

router.get('/list',(req,res)=>{
    res.send({
        user:"Ti Nguyen"
    })
});

module.exports = router