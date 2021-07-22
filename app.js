const express = require('express');
var https = require('https');
const app = express();
var host = 'https://na1.api.riotgames.com/lol/';
var apiKey = 'RGAPI-4730ecb2-ab17-4802-abcc-7937e56cef99';
const port = process.env.PORT || 3000

/* ROUTES */
app.get('/', (req, res) => {
    var request=require("request");
    const options = {
        url: `${host}match/v4/matchlists/by-account/8Oo075uXu-2FwhdQmxuLWDP91pRfzuZPF9onwW2z6pMU8O01yOEOt9bGn`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'X-Riot-Token': 'RGAPI-4730ecb2-ab17-4802-abcc-7937e56cef99'
        }
    };
    request.get(options,function(error,response,body){
        res.append('X-Riot-Token','RGAPI-4730ecb2-ab17-4802-abcc-7937e56cef99');
           if(error){
                 console.log(error);
                 res.send(error);
           }else{
                 console.log(response);
                 res.send(response);
         }
        });
});


app.get('/GetRiotAccount', (req, res) => {
    var request=require("request");
    const options = {
        url: `${host}summoner/v4/summoners/by-name/Immortal Mitch`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'X-Riot-Token': 'RGAPI-4730ecb2-ab17-4802-abcc-7937e56cef99'
        }
    };

    
    request.get(options,function(error,response,body){
        res.append('X-Riot-Token','RGAPI-4730ecb2-ab17-4802-abcc-7937e56cef99');
           if(error){
                 console.log(error);
                 res.setHeader("Access-Control-Allow-Credentials", "true");
                 res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
                 res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
                 res.send(error);
           }else{
                 console.log("[" + response.body + "]");
                 res.send(response.body);
         }
        });
});

app.get('/GetRiotAccount/:accountName', (req, res) => {
    var request=require("request");
    const options = {
        url: `${host}summoner/v4/summoners/by-name/${req.params.accountName}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'X-Riot-Token': 'RGAPI-4730ecb2-ab17-4802-abcc-7937e56cef99'
        }
    };

    
    request.get(options,function(error,response,body){
        res.append('X-Riot-Token','RGAPI-4730ecb2-ab17-4802-abcc-7937e56cef99');
           if(error){
                 console.log(error);
                 res.setHeader("Access-Control-Allow-Credentials", "true");
                 res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
                 res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
                 res.send(error);
           }else{
                 console.log("[" + response.body + "]");
                 res.send(response.body);
         }
        });
});

app.get('/MatchListByAccount', (req, res) => {
    var request=require("request");
    const options = {
        url: 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/6Qgbp2rkw34VNYjGsOeEVVOe9q_ngHb0atsSg3es8zbv4Q',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'X-Riot-Token': 'RGAPI-4730ecb2-ab17-4802-abcc-7937e56cef99'
        }
    };
    
    request.get(options,function(error,response,body){
        res.append('X-Riot-Token','RGAPI-4730ecb2-ab17-4802-abcc-7937e56cef99');
           if(error){
                 console.log(error);
                res.send(error);
           }else{
                const parsedData = JSON.parse(response.body);
                let result = parsedData.matches;
                 console.log(result);
                 res.send(result);
         }
        });
});

//Listening to the server
app.listen(port, () => console.log('listening on port ${port}'));