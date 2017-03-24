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

        var html = "";
        for (prop in temp) {

            if (temp.hasOwnProperty(prop) && prop !== 'name') {
                ++cnt;
                html += cnt+"."+temp[prop]+"\n";
            }
        }


        var result = [
            {
                "type": "text",
                "text": "어떠한 공간을 인테리어 하시나요?\n\n" +html
            }
        ];
    }else if(type === 'specialtyRange'){
        var result = [
            {
                "type": "text",
                "text": "전문가의 도움이 필요한 범위를 모두 선택해 주세요!\n\n" +
                "1.인테리어 디자인\n" +
                "2.인테리어 시공\n" +
                "3.스타일링\n\n" +
                "ex) 1,2,3 || 인테리어 디자인,인테리어 시공,스타일링\n"

            }
        ];
    }else if(type === 'spaceBranding'){
        var result = [
            {
                "type": "text",
                "text": "인테리어 하는 공간의 공간 브랜딩을 해줄 수 있는 전문가가 필요하신가요??!\n\n" +
                "ex) 네,아니오 로 답해주세요. \n"

            }
        ];
    }else if(type === 'spaceMeasure'){
        var result = [
            {
                "type": "text",
                "text": "인테리어 하는 공간의 면적이 어떻게 되나요?\n\n" +
                "ex) 100m2 || 100평 \n"

            }
        ];
    }else if(type === 'budget'){
        var result = [
            {
                "type": "text",
                "text": "인테리어 하는 공간의 예산은 얼마인가요? \n\n" +
                "만원 단위로 입력해주세요! \n"+
                "ex) 100~500 \n"

            }
        ];
    }else if(type === 'styles'){
        var result = [
            {
                "type": "text",
                "text": "인테리어 하는 공간의 예산은 얼마인가요? \n\n" +
                "1.모던\n" +
                "2.북유럽\n" +
                "3.클래식\n" +
                "4.프로방스&로맨틱\n" +
                "5.빈티지\n" +
                "6.한국&아시아\n" +
                "7.미니멀리즘\n" +
                "8.인더스트리얼\n" +
                "9.기타\n" +
                "10.앤틱\n" +
                "11.내추럴\n\n" +
                "ex) 1 || 모던 \n"

            }
        ];
    }else if(type === 'experts'){

        var result =
            {
                "type": "template",
                "altText": "this is a carousel template",
                "template": {
                    "type": "carousel",
                    "columns": [
                        {
                            "thumbnailImageUrl": "https://interiorbrothers.com"+opt[0].src,
                            "title": "this is menu",
                            "text": "description",
                            "actions": [
                                {
                                    "type": "uri",
                                    "label": opt[0].businessName,
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[0].userId
                                },
                                {
                                    "type": "uri",
                                    "label": opt[0].title,
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[0].userId
                                },
                                {
                                    "type": "uri",
                                    "label": "상세보러가기",
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[0].userId
                                }
                            ]
                        },
                        {
                            "thumbnailImageUrl": "https://interiorbrothers.com"+opt[1].src,
                            "title": "this is menu",
                            "text": "description",
                            "actions": [
                                {
                                    "type": "uri",
                                    "label": opt[1].businessName,
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[1].userId
                                },
                                {
                                    "type": "uri",
                                    "label": opt[1].title,
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[1].userId
                                },
                                {
                                    "type": "uri",
                                    "label": "상세보러가기",
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[1].userId
                                }
                            ]
                        },
                        {
                            "thumbnailImageUrl": "https://interiorbrothers.com"+opt[2].src,
                            "title": "this is menu",
                            "text": "description",
                            "actions": [
                                {
                                    "type": "uri",
                                    "label": opt[2].businessName,
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[2].userId
                                },
                                {
                                    "type": "uri",
                                    "label": opt[2].title,
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[2].userId
                                },
                                {
                                    "type": "uri",
                                    "label": "상세보러가기",
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[2].userId
                                }
                            ]
                        },
                        {
                            "thumbnailImageUrl": "https://interiorbrothers.com"+opt[3].src,
                            "title": "this is menu",
                            "text": "description",
                            "actions": [
                                {
                                    "type": "uri",
                                    "label": opt[3].businessName,
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[3].userId
                                },
                                {
                                    "type": "uri",
                                    "label": opt[3].title,
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[3].userId
                                },
                                {
                                    "type": "uri",
                                    "label": "상세보러가기",
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[3].userId
                                }
                            ]
                        },
                        {
                            "thumbnailImageUrl": "https://interiorbrothers.com"+opt[4].src,
                            "title": "this is menu",
                            "text": "description",
                            "actions": [
                                {
                                    "type": "uri",
                                    "label": opt[4].businessName,
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[4].userId
                                },
                                {
                                    "type": "uri",
                                    "label": opt[4].title,
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[4].userId
                                },
                                {
                                    "type": "uri",
                                    "label": "상세보러가기",
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[4].userId
                                }
                            ]
                        }

                    ]
                }
            };
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
};

module.exports.getSpaces3 = function (spaces1,spaces2,msg) {
    var temp, prop,
        cnt = 0;
    temp = util.portfolioDivision[spaces1][spaces2];

    for (prop in temp) {

        if (temp.hasOwnProperty(prop) && prop !== 'name') {
            ++cnt;
            if(msg.indexOf(temp[prop]) != -1){
                return cnt;
            }

        }
    }

};

module.exports.getSpecialtyRange = function (msg) {
     var result = [],temp = [],arr = [];

    if(msg.indexOf(",") != -1){
       temp = msg.split(",");
       for(var i = 0 ; i < temp.length ; i++){
           if(temp[i] === '1' || temp[i] === '인테리어 디자인'){
               arr.push('interiorDesign');
           }else if(temp[i] === '2' || temp[i] === '인테리어 시공'){
               arr.push('interiorContractor');
           }else if(temp[i] === '3' || temp[i] === '스타일링'){
               arr.push('interiorStyling');
           }


       }

        if(arr.length > 1){
               if(arr[0] === 'interiorDesign' && arr[1] === 'interiorContractor'){
                    result.push('interiorFull');
                    if(arr[2] === 'interiorStyling'){
                        result.push('interiorStyling');
                    }

               }else{
                   for(var i = 0 ; i < arr.length ; i++){
                       result.push(arr[i]);
                   }
               }

        }else{
            result.push(arr[0]);
        }
    }else{
        if(msg === '1' || msg === '인테리어 디자인'){
            result.push('interiorDesign');
        }else if(msg === '2' || msg === '인테리어 시공'){
            result.push('interiorContractor');
        }else if(msg === '3' || msg === '스타일링'){
            result.push('interiorStyling');
        }

    }

    return result;

};

module.exports.getMeasure = function (msg) {
    var result = [];
    var num = [];
    if(msg.indexOf("평") != -1){
        num = msg.split("평");
        result[0] = num[0];
        result[1] = (num[0] * 3.3).toFixed(2);
    }else if(msg.indexOf("m2") != -1){
        num = msg.split("m2");
        result[0] = ( num[0] / 3.3).toFixed(2);
        result[1] =  num[0];
    }

    return result;

};

module.exports.getStyles = function (msg) {
    var result = "";

    if(msg.indexOf("1") != -1 || msg === "모던" ){
        result = "1";
    }else if(msg.indexOf("2") != -1 || msg === "북유럽" ){
        result = "2";
    }else if(msg.indexOf("3") != -1 || msg === "클래식"){
        result = "3";
    }else if(msg.indexOf("4") != -1 || msg === "프로방스&로맨틱" ){
        result = "4";
    }else if(msg.indexOf("5") != -1 || msg === "빈티지"){
        result = "5";
    }else if(msg.indexOf("6") != -1 || msg === "한국&아시아"){
        result = "6";
    }else if(msg.indexOf("7") != -1 || msg === "미니멀리즘"){
        result = "7";
    }else if(msg.indexOf("8") != -1 || msg === "인더스트리얼"){
        result = "8";
    }else if(msg.indexOf("9") != -1 || msg === "기타"){
        result = "9";
    }else if(msg.indexOf("10") != -1 || msg === "앤틱"){
        result = "10";
    }else if(msg.indexOf("11") != -1 || msg === "내추럴"){
        result = "11";
    }

    return result;

};
