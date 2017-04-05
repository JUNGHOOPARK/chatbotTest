const emotion = require('./emotion');
const util = require('./util');

module.exports.getConciergeExpress = function (type,opt) {

    if(type === 'spaces1'){
        var result = [
            {
                "success": true,
                "resultCode": "00",
                "resultMessage": "success",
                "request": {
                    "event": "send",
                    "sender": "partner",
                    "user": opt.user,
                    "partner": opt.partner,
                    "compositeContent":{
                        "compositeList":[
                            {
                                "title": "어떠한 공간을 인테리어 하시나요?", /* bold스타일의 텍스트 (최대 200자) */
                                "description": "인테리어 하실 공간을 선택해주세요!", /* gray스타일의 title아래 텍스트 (최대 1,000자) */
                                /* imageContent와 상동 */
                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/img/main/qualityPortfolios.png", /* 전송하고자하는 이미지 URL */
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
            }
        ];
    }else if(type === 'spaces2'){
        var temp, prop,
            cnt = 0;
        temp = util.portfolioDivision[opt];
        var actions = new Array();
        var obj = new Object();

        for (prop in temp) {

            if (temp.hasOwnProperty(prop) && prop !== 'name') {
                if(cnt < 4){
                    console.log(temp[prop].name);
                    obj.type = "message";
                    obj.label = temp[prop].name;
                    obj.text = temp[prop].name;
                    actions.push(obj);
                    ++cnt;
                    obj = new Object();
                }else{
                    break;
                }

            }
        }

        var result = [
            {
                "type": "template",
                "altText": "어떠한 공간을 인테리어 하시나요?",
                "template": {
                    "type": "buttons",
                    "thumbnailImageUrl": "https://interiorbrothers.com/img/main/qualityPortfolios.png",
                    "title": "어떠한 공간을 인테리어 하시나요?",
                    "text": "인테리어 하실 공간을 선택해주세요!",
                    "actions": actions
                }
            }
        ];
    }else if(type === 'spaces3'){
        var temp, prop,
            cnt = 0;
        temp = util.portfolioDivision[opt[0]][opt[1]];
        var actions = new Array();
        var obj = new Object();

        var html = "";
        for (prop in temp) {
            if (temp.hasOwnProperty(prop) && prop !== 'name') {
                if(cnt < 4){
                    console.log(temp[prop]);
                    obj.type = "message";
                    obj.label = temp[prop];
                    obj.text = temp[prop];
                    actions.push(obj);
                    ++cnt;
                    obj = new Object();
                }else{
                    break;
                }

            }
        }


        var result = [
            {
                "type": "template",
                "altText": "어떠한 공간을 인테리어 하시나요?",
                "template": {
                    "type": "buttons",
                    "thumbnailImageUrl": "https://interiorbrothers.com/img/main/qualityPortfolios.png",
                    "title": "어떠한 공간을 인테리어 하시나요?",
                    "text": "인테리어 하실 공간을 선택해주세요!",
                    "actions": actions
                }
            }
        ];

    }else if(type === 'specialtyRange'){


        var result = [
            {
                "type": "template",
                "altText": "범위를 선택해주세요!!",
                "template": {
                    "type": "buttons",
                    "thumbnailImageUrl": "https://interiorbrothers.com/img/main/qualityPortfolios.png",
                    "title": "범위 선택",
                    "text": "전문가의 도움이 필요한 범위를 선택해 주세요!",
                    "actions": [
                        {
                            "type": "message",
                            "label": "인테리어 디자인+시공",
                            "text": "인테리어 디자인,인테리어 시공"
                        },
                        {
                            "type": "message",
                            "label": "인테리어 디자인",
                            "text": "인테리어 디자인"
                        },
                        {
                            "type": "message",
                            "label": "인테리어 시공",
                            "text": "인테리어 시공"
                        },
                        {
                            "type": "message",
                            "label": "스타일링",
                            "text": "스타일링"
                        }
                    ]
                }
            }
        ];


    }else if(type === 'spaceBranding'){


        var result = [
            {
                "type": "template",
                "altText": "공간브랜딩 여부!!",
                "template": {
                    "type": "buttons",
                    "thumbnailImageUrl": "https://interiorbrothers.com/img/main/qualityPortfolios.png",
                    "title": "공간브랜딩이 필요하신가요??",
                    "text": "공간브랜딩:공간에 대한 차별화된 가치를 높여주는것.",
                    "actions": [
                        {
                            "type": "message",
                            "label": "네, 필요합니다",
                            "text": "네"
                        },
                        {
                            "type": "message",
                            "label": "아니오, 필요없습니다",
                            "text": "아니오"
                        }
                    ]
                }
            }
        ];


    }else if(type === 'spaceMeasure'){


        var result = [
            {
                "type": "text",
                "text": "인테리어 하는 공간의 면적이 어떻게 되나요?\n\n" +
                "ex) 숫자만 입력하면 평으로 이해합니다:) \n 제곱미터로 입력하길 원하시면\n  숫자 뒤에 m 을 입력해주세요.  \n"

            }
        ];

    }else if(type === 'budget'){

        var result = [
            {
                "type": "text",
                "text": "인테리어 하는 공간의 예산은 얼마인가요? \n\n" +
                "만원 단위로 입력해주세요! \n"+
                "ex) 1000 5000 또는 1000~5000 으로 입력해주세요! \n"

            }
        ];


    }else if(type === 'styles'){
        var result = [
            {
                "type": "template",
                "altText": "스타일을 선택해주세요! ",
                "template": {
                    "type": "buttons",
                    "thumbnailImageUrl": "https://interiorbrothers.com/img/main/qualityPortfolios.png",
                    "title": "스타일 선택",
                    "text": "인테리어 하는 공간의 스타일을 선택해주세요!",
                    "actions": [
                        {
                            "type": "message",
                            "label": "모던",
                            "text": "모던"
                        },
                        {
                            "type": "message",
                            "label": "북유럽",
                            "text": "북유럽"
                        },
                        {
                            "type": "message",
                            "label": "클래식",
                            "text": "클래식"
                        },
                        {
                            "type": "message",
                            "label": "빈티지",
                            "text": "빈티지"
                        }
                    ]
                }
            }
        ];

    }else if(type === 'experts'){

        for(var i = 0 ; i < 5 ; i++){
            var match =  opt[i].src.split('/file/download/');
            opt[i].src = '/file/download/small-' + match[1];
        }


        var result =
            [{
                "type": "template",
                "altText": "브라더스 컨시어지 결과가 도착했습니다 :]",
                "template": {
                    "type": "carousel",
                    "columns": [
                        {
                            "thumbnailImageUrl": "https://interiorbrothers.com/"+opt[0].src,
                            "title": opt[0].businessName+"-"+opt[0].title,
                            "text": "구분 "+opt[0].spaceName+"\n면적 "+(opt[0].size).toFixed(2)+"m²("+(opt[0].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[0].budget],
                            "actions": [
                                {
                                    "type": "uri",
                                    "label": "상세보러가기",
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[0].userId+"/portfolio?portfolioId="+opt[0].portfolioId
                                }
                            ]
                        },
                        {
                            "thumbnailImageUrl": "https://interiorbrothers.com/"+opt[1].src,
                            "title": opt[1].businessName+"-"+opt[1].title,
                            "text":  "구분 "+opt[1].spaceName+"\n면적 "+(opt[1].size).toFixed(2)+"m²("+(opt[1].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[1].budget],
                            "actions": [
                                {
                                    "type": "uri",
                                    "label": "상세보러가기",
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[1].userId+"/portfolio?portfolioId="+opt[1].portfolioId
                                }
                            ]
                        },
                        {
                            "thumbnailImageUrl": "https://interiorbrothers.com/"+opt[2].src,
                            "title": opt[2].businessName+"-"+opt[2].title,
                            "text":  "구분 "+opt[2].spaceName+"\n면적 "+(opt[2].size).toFixed(2)+"m²("+(opt[2].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[2].budget],
                            "actions": [
                                {
                                    "type": "uri",
                                    "label": "상세보러가기",
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[2].userId+"/portfolio?portfolioId="+opt[2].portfolioId
                                }
                            ]
                        },
                        {
                            "thumbnailImageUrl": "https://interiorbrothers.com/"+opt[3].src,
                            "title": opt[3].businessName+"-"+opt[3].title,
                            "text":  "구분 "+opt[3].spaceName+"\n면적 "+(opt[3].size).toFixed(2)+"m²("+(opt[3].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[3].budget],
                            "actions": [
                                {
                                    "type": "uri",
                                    "label": "상세보러가기",
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[3].userId+"/portfolio?portfolioId="+opt[3].portfolioId
                                }
                            ]
                        },
                        {
                            "thumbnailImageUrl": "https://interiorbrothers.com/"+opt[4].src,
                            "title": opt[4].businessName+"-"+opt[4].title,
                            "text":  "구분 "+opt[4].spaceName+"\n면적 "+(opt[4].size).toFixed(2)+"m²("+(opt[4].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[4].budget],
                            "actions": [
                                {
                                    "type": "uri",
                                    "label": "상세보러가기",
                                    "uri": "https://www.interiorbrothers.com/experts/"+opt[4].userId+"/portfolio?portfolioId="+opt[4].portfolioId
                                }
                            ]
                        }


                    ]
                }
            }];
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
        }else{
            result.push('interiorFull');
        }

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