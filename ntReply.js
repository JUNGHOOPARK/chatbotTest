const requestSender = require('request');
const config = require('./config');
const actionConcierge = require('./action/concierge');

module.exports.send = function (user, messages) {
    var headers = {
        'Content-type' : 'application/json;charset=UTF-8',
        'X-Naver-Client-Id': 'kxknP0SrJqrMohAQsT4V',
        'X-Naver-Client-Secret': 'OD6sEB94LH'
    };

    var options = {
        url: 'https://dev.apis.naver.com/test_bot/talk-bot/event',
        method: 'POST',
        headers: headers,
        json: {
            event : 'send',
            sender : 'user',
            user : '',
            partner:'wc8bqd',
            textContent:messages

        }
    };

    requestSender(options, function (error, response, body) {
        console.log('response', response.statusCode);
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
        else{
            console.log('requestSender', error);
        }
    })

};

module.exports.concierge = function (data,eventObj) {

    var options = {
        url: 'https://interiorbrothers.com/api/doConcierge',
        method: 'POST',
        json: data
    };

    requestSender(options, function (error, response, body) {
        if (error) {
            return console.error('upload failed:', error);
        }

        var headers = {
            'Content-type' : 'application/json',
            'Authorization' : 'Bearer ' + config.CHANNEL_ACCESS_TOKEN
        };

        if(!body.experts){
            var options2 = {
                url: 'https://api.line.me/v2/bot/message/reply',
                method: 'POST',
                headers: headers,
                json: {
                    replyToken : eventObj.replyToken,
                    messages : actionConcierge.getConciergeExpress("error",'')
                }
            };


            requestSender(options2, function (error, response, body) {
                console.log('response', response.statusCode);
                if (!error && response.statusCode == 200) {
                    console.log(body)
                }
                else{
                    console.log('requestSender', error);
                }
            })
        }else{
            var options2 = {
                url: 'https://api.line.me/v2/bot/message/reply',
                method: 'POST',
                headers: headers,
                json: {
                    replyToken : eventObj.replyToken,
                    messages : actionConcierge.getConciergeExpress("experts",body.experts)
                }
            };


            requestSender(options2, function (error, response, body) {
                console.log('response', response.statusCode);
                if (!error && response.statusCode == 200) {
                    console.log(body)
                }
                else{
                    console.log('requestSender', error);
                }
            })
        }



    })


};