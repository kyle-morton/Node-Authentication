let express = require('express'),
    router = express.Router(),
    User = require('../models/user');

router.post('/', (req, res) => {
    
    //get user from db
    User.findOne({
        name: req.body.name
    }, (err, user) => {

        if (err) throw err;

        //authentication logic goes here...


    });
});

module.exports = router;