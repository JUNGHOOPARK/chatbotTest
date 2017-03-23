const emotion = require('./emotion');

module.exports.getConciergeExpress = function (type,opt) {

    if(type === 'start'){
        var result = [
                {
                    "type": "text",
                    "text": "어떠한 공간을 인테리어 하시나요?\n\n" +
                    "1.상업공간\n" +
                    "2.업무공간\n" +
                    "3.주거공간\n" +
                    "4.문화/종교 공간\n" +
                    "5.기타공간"
                }
            ];
    }else if(type === 'spaces1'){
        var result = [
                {
                    "type": "text",
                    "text": "어떠한 "+opt+"을 인테리어 하시나요?\n\n" +
                    "1.요식/식당\n" +
                    "2.상업공간\n" +
                    "3.교육공간\n" +
                    "4.의료공간\n" +
                    "5.운동공간"
                }
            ];
    }

    return result;
};