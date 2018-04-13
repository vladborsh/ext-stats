const router = require('express').Router();
const config = require('../config/config');
const MongoClient = require('mongodb').MongoClient;

router.post('/action', (req,res) => {
    MongoClient.connect( config.db_url, (err, client) => {
        if (err) res.send(err);
        const db = client.db('ext-stats');
        console.log(req.body);
        db.collection('actions').insertOne( req.body, (err, result) => {
            if (err) res.send(err);
            res.send("Connected successfully to server. Actions have added")
            client.close();
        });
    });
})

module.exports = router;

