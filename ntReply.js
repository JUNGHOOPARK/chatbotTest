const requestSender = require('request');
const config = require('./config');
const actionConcierge = require('./action/ntConcierge');



module.exports.concierge = function (data) {

    var options = {
        url: 'https://interiorbrothers.com/api/doConcierge',
        method: 'POST',
        json: data
    };

    requestSender(options, function (error, response, body) {
        if (error) {
            return console.error('upload failed:', error);
        }
        console.log(body.experts);
        return body.experts;


    })


};