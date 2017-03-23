const emotion = require('./emotion');

module.exports.getConciergeExpress = function () {

    return [
                {
                    "type": "template",
                    "altText": "this is a buttons template",
                    "template": {
                        "type": "buttons",
                        "thumbnailImageUrl": "https://interiorbrothers.com/img/menu/logo_beta.png",
                        "title": "Menu",
                        "text": "어떠한 공간을 인테리어 하시나요?",
                        "actions": [
                            {
                                "type": "message",
                                "label": "상업 공간",
                                "data": "1"
                            },
                            {
                                "type": "message",
                                "label": "업무 공간",
                                "data": "2"
                            },
                            {
                                "type": "message",
                                "label": "주거 공간",
                                "data": "3"
                            },
                            {
                                "type": "message",
                                "label": "문화/종교 공간",
                                "data": "4"
                            }


                        ]
                    }
            }
    ];
};