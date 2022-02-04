var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
 
    var num = req.query.num;  
    var letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    var calc = num % 23;
    res.render('../views/instrucciones.html', { num: num, letter: letters[calc] });

})


module.exports = router;
