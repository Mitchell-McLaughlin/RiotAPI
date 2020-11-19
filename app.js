const express = require('express');
var https = require('https');
const app = express();
var host = 'https://na1.api.riotgames.com/lol/';
var apiKey = 'RGAPI-a8281754-1d0d-4a91-ae49-ac7a0d7c36a7';

//ROUTES
app.get('/', (req, res) => {
    var request=require("request");
    const options = {
        url: 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/8Oo075uXu-2FwhdQmxuLWDP91pRfzuZPF9onwW2z6pMU8O01yOEOt9bGn',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'X-Riot-Token': 'RGAPI-a8281754-1d0d-4a91-ae49-ac7a0d7c36a7'
        }
    };
    request.get(options,function(error,response,body){
        res.append('X-Riot-Token','RGAPI-a8281754-1d0d-4a91-ae49-ac7a0d7c36a7');
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
        url: 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Gazzwaka',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'X-Riot-Token': 'RGAPI-a8281754-1d0d-4a91-ae49-ac7a0d7c36a7'
        }
    };
    request.get(options,function(error,response,body){
        res.append('X-Riot-Token','RGAPI-a8281754-1d0d-4a91-ae49-ac7a0d7c36a7');
           if(error){
                 console.log(error);
                 res.send(error);
           }else{
                 console.log(response);
                 res.send(response);
         }
        });
});

//Listening to the server
app.listen(3000);