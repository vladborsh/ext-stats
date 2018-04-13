const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const http       = require('path');
const api        = require('./routes/router');

const app = express();
const port = (process.env.PORT || 8080);
app.use(bodyParser.json());
app.use('/api', api)
app.use(bodyParser.urlencoded());
app.listen( port , function () {
    console.log(`Express app listening on port ${port}!`);
});