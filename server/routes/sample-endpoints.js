const router = require('express').Router();
const sampleApi = require('../apis/api-sample');

router.get('/sample-endpoint', (req, res) => {
    sampleApi.getSampleStuff().then((result) => {
        res.json(result);
    });
});

module.exports = router;