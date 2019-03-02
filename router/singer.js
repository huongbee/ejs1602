const express = require('express');
const router = express.Router();

const { Singer, arrSinger, domain, domainImg } = require('../models/Singer')

router.get('/list',(req,res)=>{
    res.render('list',{arrSinger,domainImg,domain});
});
router.get('/add',(req,res)=>{
    // req.params
    res.render('add');
});
router.post('/add-singer',(req,res)=>{
    const { txtName, txtAvatar, txtLink } = req.body
    const id = Math.floor(Math.random()*1000)
    const singer = new Singer(id,txtName,txtAvatar,txtLink)
    arrSinger.push(singer);
    res.redirect('/')
});

module.exports = router
