const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({
    extended:false // string || array
}))

const { Singer, arrSinger, domain, domainImg } = require('./models/Singer')

app.get('/',(req,res)=>{
    res.render('list',{arrSinger,domainImg,domain});
});
app.get('/add',(req,res)=>{
    // req.params
    res.render('add');
});
app.post('/add-singer',(req,res)=>{
    const { txtName, txtAvatar, txtLink } = req.body
    const id = Math.floor(Math.random()*1000)
    const singer = new Singer(id,txtName,txtAvatar,txtLink)
    arrSinger.push(singer);
    res.redirect('/')
});

app.listen(3000);