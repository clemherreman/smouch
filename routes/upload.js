
/*
 * upload pages
 */

exports.upload = function(req, res) {
    var fs = require('fs');

    fs.readFile(req.file.image.path, function (err, data) {
        if (err) throw err;

        res.send(data);
    });
};

exports.getupload = function(req, res) {
    res.send('hello');
};
