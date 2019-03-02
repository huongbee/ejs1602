const express = require('express');
const app = express();
app.set('view engine','ejs');

const { Singer, arrSinger, domain, domainImg } = require('./models/Singer')

app.get('/',(req,res)=>{
    res.render('list',{arrSinger,domainImg,domain});
});
app.get('/add',(req,res)=>{
    res.render('add');
});

app.listen(3000);