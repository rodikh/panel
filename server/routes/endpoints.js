
"use strict";

const path = require('path');
const app = require('../server').app;
const express = require('express');
const bodyParser = require('body-parser');

const sampleRouter = require('./sample-endpoints');

module.exports = function () {
    app.use(express.static('../dist'));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.use('/sample-api', sampleRouter);

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../../src/index.html'));
    });

};