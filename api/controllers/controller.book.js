
var shortid = require('shortid');
var db = require('../../db');



//List book
module.exports.book = function (req, res) {
    var titles= db.get("titles").value()
    res.json(titles);
};
