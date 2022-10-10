var express = require('express');
var dotenv = require('dotenv');
var app = express();
dotenv.config();
var port = process.env.PING_LISTEN_PORT;
app.use(express.json());
app.get('/ping', function (req, res) {
    res.json(req.headers);
});
app.listen(port, function () {
    console.log("Server listening on ".concat(port));
});
