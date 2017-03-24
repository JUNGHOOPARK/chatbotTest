const requestSender = require('request');
const config = require('./config');
const actionConcierge = require('./action/concierge');

module.exports.send = function (channelAccessToken, replyToken, messages) {
    var headers = {
        'Content-type' : 'application/json',
        'Authorization' : 'Bearer ' + channelAccessToken
    };

    var options = {
        url: 'https://api.line.me/v2/bot/message/reply',
        method: 'POST',
        headers: headers,
        json: {
            replyToken : replyToken,
            messages : messages
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


        console.log("◎◎◎"+config.CHANNEL_ACCESS_TOKEN);
        console.log("◎◎◎"+eventObj.replyToken);
        console.log("◎◎◎"+actionConcierge.getConciergeExpress("expertsTest",''));

        var options2 = {
            url: 'https://api.line.me/v2/bot/message/reply',
            method: 'POST',
            headers: headers,
            json: {
                replyToken : eventObj.replyToken,
                messages : actionConcierge.getConciergeExpress("expertsTest",body.experts)
            }
        };

        console.log(actionConcierge.getConciergeExpress("expertsTest",body.experts));

        requestSender(options2, function (error, response, body) {
            console.log('response', response.statusCode);
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
            else{
                console.log('requestSender', error);
            }
        })


    })


};