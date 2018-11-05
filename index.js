let express = require('express'),
    app = express(),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    config = require('./config'),
    User = require('./app/models/user'),
    userRouter = require('./app/routers/user');

//config
let port = process.env.PORT || 8080; 
mongoose.connect(config.database);
app.set('superSecret', config.secret);

//config body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//use morgan for logging
app.use(morgan('dev'));

// basic route & setup
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
}); 
app.get('/setup', (req, res) => {
    
    let user = new User({
        name: 'Kyle',
        password: 'test123',
        admin: true
    });

    //save new user
    user.save((err) => {
        if (err) throw err;

        console.log('User saved successfully!');
        res.json({success: true});
    });
});

//app routes
app.use('/users', userRouter);


//start server
app.listen(port);
console.log('server listening at port: ' + port);