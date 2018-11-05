let express = require('express'),
    router = express.Router(),
    User = require('../models/user');

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        res.json(users);
    });
});

module.exports = router;