const emotion = require('./emotion');
const util = require('./util');
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
        var temp, prop,
            cnt = 0, arr = [];
        temp = util.portfolioDivision[opt];
        var html = "";
        for (prop in temp) {
            if (temp.hasOwnProperty(prop) && prop !== 'name') {
                arr.push({index: ++cnt, value: temp[prop].name});
                console.log(temp[prop].name);
                html += cnt+"."+temp[prop].name+"\n";
            }
        }


        var result = [
                {
                    "type": "text",
                    "text": "어떠한 공간을 인테리어 하시나요?\n\n" +html
                }
            ];
    }

    return result;
};