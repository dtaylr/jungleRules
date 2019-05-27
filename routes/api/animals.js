const express = require('express');
     router = express.Router();

//Animal Model
//const Animal = require('../../models/Animal');

//@GET api/animals
//@desc Get ALL animals
//@access Public

router.get('/', function (req, res) {
    res.send("Animals Route");
});

module.exports = router;