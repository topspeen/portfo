var createError = require('http-errors');
var express = require('express');
var axios = require('axios');
let dataFromCMC;
let metaDataFromCMC;
const cors = require('cors');

var app = express();

app.use(express.json());

var corsOptions = {
    origin: 'http://localhost:3000 ',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));




// fetch data from CMC;
var data_config = {
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=1,2,74,1024,6636,1839',
    headers: {
        'X-CMC_PRO_API_KEY': '69e3b39b-71c3-4c16-bf79-12a42a042a25',
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip'
    }
};

axios(data_config)
    .then(function(response) {
        dataFromCMC = response.data;
    }).then(function(response) {
        // console.log(JSON.stringify(dataFromCMC));
    }).catch(function(error) {
        console.log(error);
    }).then(function() {

    });

// fetch metaData from CMC;
var metaData_config = {
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=1,2,74,1024,6636,1839',
    headers: {
        'X-CMC_PRO_API_KEY': '69e3b39b-71c3-4c16-bf79-12a42a042a25',
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip'
    }
};

axios(metaData_config)
    .then(function(response) {
        metaDataFromCMC = response.data;
    }).then(function(response) {
        console.log(JSON.stringify(metaDataFromCMC.data[2]));
    }).catch(function(error) {
        console.log(error);
    }).then(function() {

    });

// send data to ReactApp
app.get('/', (req, res) => {
    res.json(dataFromCMC);
})

// send metaData to ReactApp
app.get('/meta', (req, res) => {
    res.json(metaDataFromCMC);
})

app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: err });
});


module.exports = app;