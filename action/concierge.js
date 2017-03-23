const emotion = require('./emotion');
const util = require('./util');

module.exports.getConciergeExpress = function (type,opt) {

    if(type === 'spaces1'){
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
    }else if(type === 'spaces2'){
        var temp, prop,
            cnt = 0;
        temp = util.portfolioDivision[opt];
        var html = "";
        for (prop in temp) {

            if (temp.hasOwnProperty(prop) && prop !== 'name') {
                ++cnt;
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
    }else if(type === 'spaces3'){
        var temp, prop,
            cnt = 0;
        temp = util.portfolioDivision[opt[0]][opt[1]];
        console.log(temp);
        var html = "";
        for (prop in temp) {

            if (temp.hasOwnProperty(prop) && prop !== 'name') {
                ++cnt;
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

module.exports.getSpaces2 = function (spaces1,msg) {
    var temp, prop,
        cnt = 0;
    temp = util.portfolioDivision[spaces1];

    for (prop in temp) {
        if (temp.hasOwnProperty(prop) && prop !== 'name') {
            ++cnt;
            if(msg.indexOf(temp[prop].name) != -1){
                return cnt;
            }
        }
    }
}