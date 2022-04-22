const express = require('express')
const router = express.Router()
/*
router.get('/', function(req, res){
    res.send('Hola IVAN');
});
*/

router.get('/', function(req, res){
    res.render("pages/index")
});
router.get('/login', function(req, res){
    res.send('Hola IVAN');
});

module.exports = router