const emotion = require('./emotion');

module.exports.getConciergeExpress = function () {

    return [{
        "type": "template",
        "altText": "this is a confirm template",
        "template": {
            "type": "confirm",
            "text": "브라더스 컨시어지를 시작하시겠습니까?",
            "actions": [
                {
                    "type": "message",
                    "label": "Yes",
                    "text": "yes"
                },
                {
                    "type": "message",
                    "label": "No",
                    "text": "no"
                }
            ]
        }
    }];
};