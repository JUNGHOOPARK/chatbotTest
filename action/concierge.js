const emotion = require('./emotion');

module.exports.getConciergeExpress = function (type) {

    if(type === 'start'){
        var result = [
                {
                    "type": "text",
                    "text": "어떠한 공간을 인테리어 하시나요?\n\n" +
                    "상업공간\n" +
                    "업무공간\n" +
                    "주거공간\n" +
                    "문화/종교 공간\n" +
                    "기타공간"
                }
            ];
    }else if(type === 'spaces1'){
        var result = [
            {
                "type": "template",
                "altText": "this is a buttons template",
                "template": {
                    "type": "buttons",
                    "thumbnailImageUrl": "https://interiorbrothers.com/img/menu/logo_beta.png",
                    "title": "Menu",
                    "text": "어떠한 상업 공간을 인테리어 하시나요?",
                    "actions": [
                        {
                            "type": "message",
                            "label": "요식 식당",
                            "text": "@category=1"
                        },
                        {
                            "type": "message",
                            "label": "상업 공간",
                            "text": "@category=2"
                        },
                        {
                            "type": "message",
                            "label": "교육 공간",
                            "text": "@category=3"
                        },
                        {
                            "type": "message",
                            "label": "의료 공간",
                            "text": "@category=4"
                        }


                    ]
                }
            }
        ];
    }

    return result;
};