
const emotion = require('./emotion');
const util = require('./util');

module.exports.getConciergeExpress = function (type,body,opt) {

    if(type === 'spaces1'){
        var result =
            {
                "success": true,
                "resultCode": "00",
                "resultMessage": "success",
                "request": {
                    "event": "send",
                    "sender": "partner",
                    "user": body.user,
                    "partner": body.partner,
                    "compositeContent":{
                        "compositeList":[
                            {
                                "title": "어떠한 공간을 인테리어 하시나요?", /* bold스타일의 텍스트 (최대 200자) */
                                "description": "인테리어 하실 공간을 선택해주세요!", /* gray스타일의 title아래 텍스트 (최대 1,000자) */
                                /* imageContent와 상동 */
                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/a3.png", /* 전송하고자하는 이미지 URL */
                                    "width": 530, /* 이미지의 높이 (픽셀단위) */
                                    "height": 290 /* 이미지의 폭 (픽셀단위) */
                                },
                                /* composite 메시지 하단 버튼 정의 (최대 10개가능) */
                                "buttonList": [
                                    /* TEXT 버튼은 유저가 textContent 를 보내는 것처럼 동작 */
                                    {
                                        "type": "TEXT",
                                        "text": "상업공간", /* 버튼에 노출하는 버튼명 (최대 20자)*/
                                        "code": "1" /* code를 정의하는경우 유저가 보내는 send이벤트 textContent에 code가 삽입되어 전송됨 (최대 40자)*/
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "업무공간", /* 버튼에 노출하는 버튼명 (최대 20자)*/
                                        "code": "2" /* code를 정의하는경우 유저가 보내는 send이벤트 textContent에 code가 삽입되어 전송됨 (최대 40자)*/
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "주거공간", /* 버튼에 노출하는 버튼명 (최대 20자)*/
                                        "code": "3" /* code를 정의하는경우 유저가 보내는 send이벤트 textContent에 code가 삽입되어 전송됨 (최대 40자)*/
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "문화/종교공간", /* 버튼에 노출하는 버튼명 (최대 20자)*/
                                        "code": "4" /* code를 정의하는경우 유저가 보내는 send이벤트 textContent에 code가 삽입되어 전송됨 (최대 40자)*/
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "기타공간", /* 버튼에 노출하는 버튼명 (최대 20자)*/
                                        "code": "5" /* code를 정의하는경우 유저가 보내는 send이벤트 textContent에 code가 삽입되어 전송됨 (최대 40자)*/
                                    }

                                ]
                            }
                        ]
                    }
                }
            };

    }else if(type === 'spaces2'){
        var temp, prop,
            cnt = 0;
        temp = util.portfolioDivision[opt];
        var actions = new Array();
        var obj = new Object();

        for (prop in temp) {

            if (temp.hasOwnProperty(prop) && prop !== 'name') {
                if(cnt < 10){
                    ++cnt;
                    obj.type = "TEXT";
                    obj.text = temp[prop].name;
                    obj.code = cnt;
                    actions.push(obj);
                    obj = new Object();
                }else{
                    break;
                }

            }
        }
        obj.type = "TEXT";
        obj.text = "이전으로 돌아가기";
        obj.code = "-1";
        actions.push(obj);
        obj = new Object();

        var result =
            {
                "success": true,
                "resultCode": "00",
                "resultMessage": "success",
                "request": {
                    "event": "send",
                    "sender": "partner",
                    "user": body.user,
                    "partner": body.partner,
                    "compositeContent":{
                        "compositeList":[
                            {
                                "title": "어떠한 공간을 인테리어 하시나요?",
                                "description": "인테리어 하실 공간을 선택해주세요!",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/a3.png",
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList": actions
                            }
                        ]
                    }
                }
            };

    }else if(type === 'spaces3'){
        var temp, prop,
            cnt = 0;
        temp = util.portfolioDivision[opt[0]][opt[1]];
        var actions = new Array();
        var obj = new Object();

        var html = "";
        for (prop in temp) {
            if (temp.hasOwnProperty(prop) && prop !== 'name') {
                if(cnt < 10){
                    ++cnt;
                    obj.type = "TEXT";
                    obj.text = temp[prop];
                    obj.code = cnt;
                    actions.push(obj);

                    obj = new Object();
                }else{
                    break;
                }

            }
        }

        obj.type = "TEXT";
        obj.text = "이전으로 돌아가기";
        obj.code = "-1";
        actions.push(obj);
        obj = new Object();

        var result =
            {
                "success": true,
                "resultCode": "00",
                "resultMessage": "success",
                "request": {
                    "event": "send",
                    "sender": "partner",
                    "user": body.user,
                    "partner": body.partner,
                    "compositeContent":{
                        "compositeList":[
                            {
                                "title": "어떠한 공간을 인테리어 하시나요?",
                                "description": "인테리어 하실 공간을 선택해주세요!",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/a3.png",
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList": actions
                            }
                        ]
                    }
                }
            };


    }else if(type === 'specialtyRange'){



        var result =
            {
                "success": true,
                "resultCode": "00",
                "resultMessage": "success",
                "request": {
                    "event": "send",
                    "sender": "partner",
                    "user": body.user,
                    "partner": body.partner,
                    "compositeContent":{
                        "compositeList":[
                            {
                                "title": "범위 선택",
                                "description": "전문가의 도움이 필요한 범위를 선택해 주세요!",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/a4.png",
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "인테리어 디자인+시공",
                                        "code": "1"
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "인테리어 디자인+시공+스타일링",
                                        "code": "5"
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "이전으로 돌아가기",
                                        "code": "-1"
                                    }

                                ]
                            }
                        ]
                    }
                }
            };



    }else if(type === 'spaceBranding'){


        var result =
            {
                "success": true,
                "resultCode": "00",
                "resultMessage": "success",
                "request": {
                    "event": "send",
                    "sender": "partner",
                    "user": body.user,
                    "partner": body.partner,
                    "compositeContent":{
                        "compositeList":[
                            {
                                "title": "공간브랜딩이 필요하신가요?",
                                "description": "공간브랜딩이란? 공간에 대한 차별화된 가치를 높여주는것.",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/a4.png",
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "네"

                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "아니오"

                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "이전으로 돌아가기",
                                        "code": "-1"
                                    }
                                ]
                            }
                        ]
                    }
                }
            };



    }else if(type === 'spaceMeasure'){



        var result =
            {
                "success": true,
                "resultCode": "00",
                "resultMessage": "success",
                "request": {
                    "event": "send",
                    "sender": "partner",
                    "user": body.user,
                    "partner": body.partner,
                    "compositeContent":{
                        "compositeList":[
                            {
                                "title": "인테리어 하는 공간의 면적이 어떻게 되나요?",
                                "description": "ex) 숫자만 입력하면 평으로 이해합니다:) \n 제곱미터로 입력하길 원하시면\n  숫자 뒤에 m 을 입력해주세요.  \n",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/a5.png",
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "이전으로 돌아가기",
                                        "code": "-1"
                                    }
                                ]
                            }
                        ]
                    }
                }
            };




    }else if(type === 'budget'){

        var result =
            {
                "success": true,
                "resultCode": "00",
                "resultMessage": "success",
                "request": {
                    "event": "send",
                    "sender": "partner",
                    "user": body.user,
                    "partner": body.partner,
                    "compositeContent":{
                        "compositeList":[
                            {
                                "title": "인테리어 하는 공간의 예산은 얼마인가요?(만원 단위로 입력해주세요)",
                                "description": "ex) 1000 5000 또는 1000~5000 으로 입력해주세요!  \n",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/a5.png",
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "이전으로 돌아가기",
                                        "code": "-1"
                                    }
                                ]
                            }
                        ]
                    }
                }
            };


    }else if(type === 'styles'){

        var result =
            {
                "success": true,
                "resultCode": "00",
                "resultMessage": "success",
                "request": {
                    "event": "send",
                    "sender": "partner",
                    "user": body.user,
                    "partner": body.partner,
                    "compositeContent":{
                        "compositeList":[
                            {
                                "title": "스타일 선택",
                                "description": "인테리어 하는 공간의 스타일을 선택해주세요",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/a6.png",
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "모던",
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "북유럽",
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "클래식",
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "프로방스&로맨틱",
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "빈티지",
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "한국&아시아",
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "미니멀리즘",
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "인더스트리얼",
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "내추럴",
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "이전으로 돌아가기",
                                        "code": "-1"
                                    }

                                ]
                            }
                        ]
                    }
                }
            };

    }else if(type === 'experts'){

        var compositeList = new Array();
        var buttonList = new Array();
        var obj = new Object();
        var obj2 = new Object();

        for(var i = 0 ; i < opt.length; i++){
            var match =  opt[i].src.split('/file/download/');
            opt[i].src = '/file/download/small-' + match[1];

            if(opt[i].deadLine.substring(0,4) > 1000){
                opt[i].deadLine = opt[i].deadLine.substring(0,10);
            }else{
                opt[i].deadLine = "";
            }


            if(opt[i].businessName.length > 27){
                opt[i].businessName = opt[i].businessName.substring(0,27);
                opt[i].businessName += "&middot;&middot;&middot;";
            }
            if(opt[i].title.length > 20){
                opt[i].title = opt[i].title.substring(0,20);
                opt[i].title += "&middot;&middot;&middot;";
            }
            obj.title =opt[i].businessName+"\n\n"+opt[i].title;

            // var stringByteLength = obj.title.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
            // console.log(stringByteLength + " Bytes");
            // console.log(obj.title.length + " length");



            obj.description = "구분 "+ opt[i].spaceName +"\n시기 "+ opt[i].deadLine +"\n면적 "+(opt[i].size).toFixed(2)+"m²("+(opt[i].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[i].budget];
            // obj.title = opt[i].businessName+"-"+opt[i].title;
            obj.image = {
                "imageUrl": "https://interiorbrothers.com/"+opt[i].src,
                "width": 100,
                "height": 150
            };

            obj2.type =  "LINK";
            obj2.link =  {
                "title": "상세보러가기",
                "url": "https://www.interiorbrothers.com/experts/"+opt[i].userId+"/portfolio?portfolioId="+opt[i].portfolioId,
                "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[i].userId+"/portfolio?portfolioId="+opt[i].portfolioId,
                "targetSelf": true,
                "pcTargetSelf": false
                // "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
            };

            buttonList.push(obj2);
            obj.buttonList = buttonList;
            compositeList.push(obj);

            obj2 = new Object();
            obj = new Object();
            buttonList = new Array();
        }

        var result =
            {
                "success": true,
                "resultCode": "00",
                "resultMessage": "success",
                "request": {
                    "event": "send",
                    "sender": "partner",
                    "user": body.user,
                    "partner": body.partner,
                    "compositeContent": {
                        "compositeList": compositeList
                    }
                }
            };


    }else if(type === 'error'){
        var result = [
            {
                "type": "text",
                "text": "땡!! 데이터 입력 오류 발견! 처음부터 다시시작하세요 :))"
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
            if(msg.indexOf(temp[prop].name) != -1 || msg.indexOf(cnt+"") != -1){
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
            if(msg.indexOf(temp[prop]) != -1 || msg.indexOf(cnt+"") != -1){
                return cnt;
            }

        }
    }

};

module.exports.getSpecialtyRange = function (code) {
    var result = [];

    switch(code) {
        case '1' :
            result.push('interiorFull');
            break;
        case '2' :
            result.push('interiorDesign');
            break;
        case '3' :
            result.push('interiorContractor');
            break;
        case '4' :
            result.push('interiorStyling');
            break;
        case '5' :
            result.push('interiorFull');
            result.push('interiorStyling');
            break;
        case '6' :
            result.push('interiorDesign');
            result.push('interiorStyling');
            break;
        case '7' :
            result.push('interiorContractor');
            result.push('interiorStyling');
            break;

        default:
            result.push('interiorFull');
            result.push('interiorStyling');

    }

    return result;

};

module.exports.getMeasure = function (msg) {
    var result = [];
    var num = [];
    if(msg.indexOf("평") != -1){
        num = msg.replace(/[^0-9]/g,'');
        result[0] = num[0];
        result[1] = (num[0] * 3.3).toFixed(2);
    }else if(msg.indexOf("m2") != -1 || msg.indexOf("M2") != -1 || msg.indexOf("M") != -1 || msg.indexOf("m") != -1){
        num = msg.replace(/[^0-9]/g,'');
        result[0] = ( num[0] / 3.3).toFixed(2);
        result[1] =  num[0];
    }else if(msg.match(/[0-9]/)){
        result[0] =  msg;
        result[1] =  (msg * 3.3).toFixed(2);
    }else{
        result[0] = 0;
        result[1] = 0;
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
    }else{
        result = "1";
    }

    return result;

};
