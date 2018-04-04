"use strict";
const express = require('express');
const app = express();
const server = require('http').createServer(app);

module.exports = {
    app
};

require('./routes/endpoints')(app, express);

server.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Panel app listening at http://%s:%s', host, port);
});
