var express = require('express');
var router = express.Router();
const fs = require("fs");
 
router.get('/', function (req, res) {

    fs.mkdir("./Copia", function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("New directory successfully created.")
        }
    });

    fs.writeFile("./Copia/holaMundo.txt", "Andrés", function (err) {
        if (err) {
            return console.log(err);
        }
        res.render('../views/escribir.html');

    }); 

})


module.exports = router;
