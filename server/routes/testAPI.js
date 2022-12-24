var express = require("express");
var router = express.Router();
var path = require('path');
var options = {
    root: path.join(__dirname,"../../client/src")
};
 

var fileName="App.js"
router.get("/", function(req, res, next) {
    res.sendFile(fileName,options,function(err){
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
            next();
        }
    });
});

module.exports = router;