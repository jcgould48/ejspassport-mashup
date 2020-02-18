const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
let MongoStore = require('connect-mongo')(session);
const random = require ('./models/random')
// const movies = require ('./models/movies')


require('dotenv').config();
const port=process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=> {
    console.log('Mongodb connected');
})
.catch(err => console.log(`Mongodb error: ${err}`));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        url: process.env.MONGODB_URI,
        mongooseConnection : mongoose.connection,
        autoReconnect : true,
    }),
    cookie:{
        secure: false,
        maxAge: 600000
    }
})
);


app.get('/random/', (req, res)=>{
    res.render('main/random', {random});
});

// app.get('/movies/', (req, res)=>{
//     res.render('main/random', {movies});
// });




app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});


