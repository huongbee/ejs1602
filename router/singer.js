const express = require('express');
const router = express.Router();

const { Singer, arrSinger, domain, domainImg } = require('../models/Singer')

router.get('/',(req,res)=>{
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

router.get('/update/:id',(req,res)=>{
    const { id } = req.params
    const singer = arrSinger.find(singer => singer.id == id)
    // if(!singer){
    //     res.send({error:'Singer not found!'})
    // }
    // else{
    //     res.render('update',{singer})
    // }
    !singer ? res.send({error:'Singer not found!'}) : res.render('update',{singer})
});


module.exports = router
