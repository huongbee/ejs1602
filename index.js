const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({
    extended:false // string || array
}))
const routerSinger = require('./router/singer')
const routerUser = require('./router/user')

app.use('/',routerSinger)
app.use('/user',routerUser)

app.listen(3000);