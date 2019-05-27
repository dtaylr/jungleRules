const express = require('express'),
        router = express.Router();

//User Model
//const User = require('../../models/User');

//@GET api/animals
//@desc Get ALL animals
//@access Public

router.get('/', function (req, res) {
    res.send("hello");
});

module.exports = router;