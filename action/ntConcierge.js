
const emotion = require('./emotion');
const util = require('./util');

module.exports.getConciergeExpress = function (type,body,opt) {

    if(type === 'spaces1'){
        var result =
             {
                "event": "send",
                "user": body.user,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "어떤 공간을 인테리어 하시나요?", /* bold스타일의 텍스트 (최대 200자) */
                            "description": "인테리어 하려는 공간에 해당하는 카테고리를 선택해 주세요.",
                            /* imageContent와 상동 */
                            "image": {
                                "imageUrl": "https://interiorbrothers.com/images/chatbot/a3.png", /* 전송하고자하는 이미지 URL */
                            },
                            /* composite 메시지 하단 버튼 정의 (최대 10개가능) */
                            "buttonList": [
                                /* TEXT 버튼은 유저가 textContent 를 보내는 것처럼 동작 */
                                {
                                    "type": "TEXT",
                                    "data" : {
                                        "title": "상업공간",
                                        "code": '1'
                                    }
                                },
                                {
                                    "type": "TEXT",
                                    "data" : {
                                        "title": "업무공간",
                                        "code": "2"
                                    }
                                },
                                {
                                    "type": "TEXT",
                                    "data" : {
                                        "title": "주거공간",
                                        "code": "3"
                                    }
                                },
                                {
                                    "type": "TEXT",
                                    "data" : {
                                        "title": "문화/종교공간",
                                        "code": "4"
                                    }
                                },
                                {
                                    "type": "TEXT",
                                    "data" : {
                                        "title": "기타공간",
                                        "code": "5"
                                    }
                                }

                            ]
                        }
                    ]
                }
            };

    }else if(type === 'spaces2'){
        var temp, prop,
            cnt = 0;
        temp = util.portfolioDivision[opt];
        var actions = [];
        var obj = {};
        var obj2 = {};

        for (prop in temp) {

            if (temp.hasOwnProperty(prop) && prop !== 'name') {
                if(cnt < 10){
                    ++cnt;
                    obj.type = "TEXT";
                    console.log(temp[prop].name);
                    obj2.title = temp[prop].name;
                    obj2.code = cnt;
                    obj.data = obj2;
                    actions.push(obj);
                    console.log(obj);
                    obj = new Object();
                }else{
                    break;
                }

            }
        }
        obj.type = "TEXT";
        obj.data.title = "← 이전 단계로 돌아가기";
        obj.data.code = "-1";
        actions.push(obj);
        obj = {};

        var result =
            {
                "event": "send",
                "user": body.user,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "어떤 공간을 인테리어 하시나요?",
                            "description": "인테리어 하려는 공간의 상세 분류를 선택해 주세요." +
                            "\n\n원하는 공간 분류가 없는 경우 " +
                            "\n'← 이전 단계로 돌아가기' 를 눌러 다른 공간 카테고리를 선택해 주세요.",

                            "image": {
                                "imageUrl": "https://interiorbrothers.com/images/chatbot/a3.png",
                            },

                            "buttonList": actions
                        }
                    ]
                }
            };
        console.log(JSON.stringify(result));
    }else if(type === 'spaces3'){
        var temp, prop,
            cnt = 0;
        temp = util.portfolioDivision[opt[0]][opt[1]];
        var actions = new Array();
        var obj = new Object();
        obj.data = {};
        var html = "";
        for (prop in temp) {
            if (temp.hasOwnProperty(prop) && prop !== 'name') {
                if(cnt < 10){
                    ++cnt;
                    obj.type = "TEXT";
                    obj.data.title = temp[prop];
                    obj.data.code = cnt;
                    actions.push(obj);

                    obj = new Object();
                }else{
                    break;
                }

            }
        }

        obj.type = "TEXT";
        obj.data.title = "← 이전 단계로 돌아가기";
        obj.data.code = "-1";
        actions.push(obj);

        obj = new Object();

        var result =
            {
                "event": "send",
                "user": body.user,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "어떤 공간을 인테리어 하시나요?",
                            "description": "인테리어 하려는 공간을 선택해 주세요." +
                            "\n\n원하는 공간이 없는 경우 \n'← 이전 단계로 돌아가기' 를 눌러 다른 공간 카테고리를 선택해 주세요.",


                            "image": {
                                "imageUrl": "https://interiorbrothers.com/images/chatbot/a3.png",
                            },

                            "buttonList": actions
                        }
                    ]
                }
            };


    }else if(type === 'specialtyRange'){

        var result =
            {
                "event": "send",
                "user": body.user,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "전문가의 도움이 필요한 범위를 선택해 주세요",
                            "description": "일반적으로는" +
                            "\n'인테리어 디자인' + '시공'" +
                            "\n을 선택하시면 됩니다.",

                            "image": {
                                "imageUrl": "https://interiorbrothers.com/images/chatbot/a4.png",
                            },

                            "buttonList":[
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "인테리어 디자인+시공",
                                        "code": "1"
                                    }
                                },
                                {
                                    "type": "TEXT",
                                    "data": {
                                        "title": "인테리어 디자인+시공+스타일링",
                                        "code": "5"
                                    }
                                },
                                {
                                    "type": "TEXT",
                                    "data": {
                                        "title": "← 이전 단계로 돌아가기",
                                        "code": "-1"
                                    }
                                }

                            ]
                        }
                    ]
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
                                "description": "공간브랜딩은 주로 상업공간에서, " +
                                "\n공간과 해당 브랜드의 아이덴티티를 일치시켜" +
                                "\n해당 공간에 대한 차별화된 가치를 높여주는 것을 말합니다." +
                                "\n\n많은 경우에 브랜드 로고 디자인 작업, 패키지, " +
                                "\n내부/외부 간판, 메뉴 판넬 등의 작업이 같이 진행됩니다.",


                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/a4.png",
                                    "width": 290,
                                    "height": 150
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
                                        "text": "← 이전 단계로 돌아가기",
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
                                "title": "인테리어 하는 공간의 면적을 알려주세요",
                                "description": "숫자만 입력하시면 ‘평’ 단위로 인식합니다." +
                                "\n제곱미터(㎡)단위로 입력하시려면 숫자 뒤에 " +
                                "\n영문자 m을 붙여주세요." +
                                "\n\n공간의 면적이 확실하지 않더라도 " +
                                "\n대략적인 면적을 입력해 주세요." +
                                "\n저희가 해당 조건에 맞는 사례를 보여드립니다." +
                                "\n\n예) 30 -> 30평, 119m -> 119㎡ (약 39평)",


                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/a5.png",
                                    "width": 290,
                                    "height": 150
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "← 이전 단계로 돌아가기",
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
                                "title": "인테리어 예산을 알려주세요",
                                "description": "만원단위로 범위를 입력해 주세요." +
                                "\n숫자 사이에 공백이나 ~기호를 넣어주세요." +
                                "\n\n예산이 확정 되어있지 않더라도, " +
                                "\n대략적인 금액범위를 입력해 주세요." +
                                "\n저희가 해당 조건에 맞는 사례를 보여드립니다." +
                                "\n\n예) 800 950 -> 800만원~950만원 범위" +
                                "\n1000~1500 -> 1,000만원~1,500만원 범위",



                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/a5.png",
                                    "width": 290,
                                    "height": 150
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "← 이전 단계로 돌아가기",
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
                                "title": "원하는 인테리어 스타일을 선택해 주세요",
                                "description": "원하는 스타일을 선택해 주세요." +
                                "\n저희가 가장 유사한 사례를 보여드립니다." +
                                "\n(이제 다 왔습니다. ^^)",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/a6.png",
                                    "width": 290,
                                    "height": 150
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
                                        "text": "← 이전 단계로 돌아가기",
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


            if(opt[i].businessName.length > 23){
                opt[i].businessName = opt[i].businessName.substring(0,23);
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



            obj.description = "구분 : "+ opt[i].spaceName +"\n시기 : "+ opt[i].deadLine +"\n면적 : "+(opt[i].size).toFixed(2)+"m²("+(opt[i].size / 3.3).toFixed(2) +" 평)\n예산 : "+util.budget[opt[i].budget];
            // obj.title = opt[i].businessName+"-"+opt[i].title;
            obj.image = {
                "imageUrl": "https://interiorbrothers.com/"+opt[i].src
            };

            obj2.type =  "LINK";
            obj2.link =  {
                "title": "상세 정보 보기",
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
                                "title": "오류가 발생한 것 같습니다.",
                                "description": "아래 버튼을 누르거나 “시작”, “컨시어지”를 입력해 처음부터 다시 시작해주세요.",


                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/status_oops.png",
                                    "width": 290,
                                    "height": 150
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "전문가 찾기 [컨시어지]",
                                        "code": '컨시어지'
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "처음부터 다시 시작하기 [시작]",
                                        "code": 'welcome'
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "← 이전 단계로 돌아가기",
                                        "code": opt
                                    }

                                ]
                            }
                        ]
                    }
                }
            };
    }else if(type === 'back'){
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
                                "title": "무슨 뜻인지 잘 모르겠습니다.",
                                "description": "선택지 중에서 선택해 주세요." +
                                "\n진행하고 있던 컨시어지를 계속하시려면 " +
                                "\n'이전 단계로 돌아가기' 를 하시거나" +
                                "\n'컨시어지'를 입력해 처음부터 다시 시작하거나" +
                                "\n'시작'을 입력해 첫 화면으로 갈 수 있습니다.",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/status_unexpected.png",
                                    "width": 290,
                                    "height": 150
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "전문가 찾기 [컨시어지]",
                                        "code": '컨시어지'
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "처음부터 다시 시작하기 [시작]",
                                        "code": 'welcome'
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "← 이전 단계로 돌아가기",
                                        "code": opt
                                    }

                                ]
                            }
                        ]
                    }
                }
            };
    }else if(type === 'welcome'){
        var result =
                {
                "event": "send",
                "user": body.user,
                    "compositeContent":{
                        "compositeList":[
                            {
                                "title": "인테리어브라더스의 챗봇서비스 입니다.\n원하는 서비스를 선택 해주세요.",
                                "description": "1. 『컨시어지』 : \n나의 조건에 맞는 전문가를 무료로 찾아줍니다." +
                                "\n2. 인테리어 사진보기 : \n국내 최정상급 인테리어 사진을 보여드립니다." +
                                "\n3. 전문가 리스트 : \n믿을 수 있는 전문가들이 모여 있습니다." +
                                "\n4. 컨텐츠 : \n인테리어 관련된 컨텐츠를 볼 수 있습니다. " +
                                "\n\n ※“시작”을 입력하면 이 화면으로 돌아옵니다.",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/welcome.png",
                                },

                                "buttonList":[
                                    {
                                        "type" : "TEXT",
                                        "data" : {
                                            "title": "전문가 찾기 [컨시어지]",
                                            "code": '컨시어지'
                                        }

                                    },
                                    {
                                        "type": "TEXT",
                                        "data" : {
                                            "title": "사진보기 [사진]",
                                            "code": '사진보기'
                                        }

                                    },
                                    {
                                        "type": "LINK",
                                        "data": {
                                            "title": "전문가 리스트 (웹사이트로 이동)",
                                            "url": "https://www.interiorbrothers.com/findexpert",
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/findexpert",
                                        }
                                    },
                                    {
                                        "type": "LINK",
                                        "data": {
                                            "title": "컨텐츠 (웹사이트로 이동)",
                                            "url": "https://www.interiorbrothers.com/webros",
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/webros",
                                        }
                                    }

                                ]
                            }
                        ]
                    }
                };

    }else if(type === 'none_expert'){
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
                                "title": "조건에 맞는 사례를 발견하지 못했습니다.",
                                "description": "최선을 다했지만, 조건에 맞는 최적의 추천 사례를 발견하지 못했습니다." +
                                "\n조건을 변경해서 다시 시도해 보시거나" +
                                "\n" +
                                "\n“컨시어지”를 입력해 처음부터 다시 시작하거나" +
                                "\n“시작”을 입력해 첫 화면으로 갈 수 있습니다.",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/concierge_fail.png",
                                    "width": 290,
                                    "height": 150
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "전문가 찾기[컨시어지]",
                                        "code": '컨시어지'
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "사진보기 [사진]",
                                        "code": '사진보기'
                                    },
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "전문가 리스트(웹사이트로 이동)",
                                            "url": "https://www.interiorbrothers.com/findexpert",
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/findexpert",
                                            "targetSelf": true,
                                            "pcTargetSelf": false
                                        }
                                    },
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "컨텐츠(웹사이트로 이동)",
                                            "url": "https://www.interiorbrothers.com/webros",
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/webros",
                                            "targetSelf": true,
                                            "pcTargetSelf": false
                                        }
                                    }

                                ]
                            }
                        ]
                    }
                }
            };
    }else if(type === 'what'){
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
                                "title": "무슨 뜻인지 잘 모르겠습니다.",
                                "description": "1. 『컨시어지』 : \n나의 조건에 맞는 전문가를 무료로 찾아줍니다." +
                                "\n2. 인테리어 사진보기 : \n국내 최정상급 인테리어 사진을 보여드립니다." +
                                "\n3. 전문가 리스트 : \n믿을 수 있는 전문가들이 모여 있습니다." +
                                "\n4. 컨텐츠 : \n인테리어 관련된 컨텐츠를 볼 수 있습니다. " +
                                "\n\n ※“시작”을 입력하면 이 화면으로 돌아옵니다.",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/status_unexpected.png",
                                    "width": 290,
                                    "height": 150
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "전문가 찾기 [컨시어지]",
                                        "code": '컨시어지'
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "사진보기 [사진]",
                                        "code": '사진보기'
                                    },
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "전문가 리스트 (웹사이트로 이동)",
                                            "url": "https://www.interiorbrothers.com/findexpert",
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/findexpert",
                                            "targetSelf": true,
                                            "pcTargetSelf": false
                                        }
                                    },
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "컨텐츠 (웹사이트로 이동)",
                                            "url": "https://www.interiorbrothers.com/webros",
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/webros",
                                            "targetSelf": true,
                                            "pcTargetSelf": false
                                        }
                                    }

                                ]
                            }
                        ]
                    }
                }
            };
    }else if(type === 'ready'){
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
                                "title": "사진보기는 아직 준비중 입니다! 조금만 기다려주세요.",
                                "description": "1. 『컨시어지』 : \n나의 조건에 맞는 전문가를 무료로 찾아줍니다." +
                                "\n2. 인테리어 사진보기 : \n국내 최정상급 인테리어 사진을 보여드립니다." +
                                "\n3. 전문가 리스트 : \n믿을 수 있는 전문가들이 모여 있습니다." +
                                "\n4. 컨텐츠 : \n인테리어 관련된 컨텐츠를 볼 수 있습니다. " +
                                "\n\n ※“시작”을 입력하면 이 화면으로 돌아옵니다.",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/cs.png",
                                    "width": 290,
                                    "height": 150
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "전문가 찾기 [컨시어지]",
                                        "code": '컨시어지'
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "사진보기 [사진]",
                                        "code": '사진보기'
                                    },
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "전문가 리스트 (웹사이트로 이동)",
                                            "url": "https://www.interiorbrothers.com/findexpert",
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/findexpert",
                                            "targetSelf": true,
                                            "pcTargetSelf": false
                                        }
                                    },
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "컨텐츠 (웹사이트로 이동)",
                                            "url": "https://www.interiorbrothers.com/webros",
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/webros",
                                            "targetSelf": true,
                                            "pcTargetSelf": false
                                        }
                                    }

                                ]
                            }
                        ]
                    }
                }
            };
    }else if(type === 'photoview'){

        var compositeList = new Array();
        var buttonList = new Array();
        var obj = new Object();
        var obj2 = new Object();

        for(var i = 0 ; i < 12; i++){
            var match =  opt[i].photo.split('/file/download/');
            opt[i].src = '/file/download/small-' + match[1];


            if(opt[i].title.length > 20){
                opt[i].title = opt[i].title.substring(0,20);
                opt[i].title += "&middot;&middot;&middot;";
            }
            obj.title = opt[i].title;

            obj.description = "design by "+ opt[i].companyName;

            obj.image = {
                "imageUrl": "https://interiorbrothers.com/"+opt[i].src

            };

            obj2.type =  "LINK";
            obj2.link =  {
                "title": "상세 정보 보기",
                "url": "https://www.interiorbrothers.com/experts/"+opt[i].creator+"/portfolio?portfolioId="+opt[i]._id,
                "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[i].creator+"/portfolio?portfolioId="+opt[i]._id,
                "targetSelf": true,
                "pcTargetSelf": false

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


    }


    return result;
};

module.exports.getOutBoundExpress = function (type,body,opt) {
    if(type === 'how'){
        var result =
            {

                    "event": "send",
                    "sender": "partner",
                    "user": body.user,
                    "partner": body.partner,
                    "compositeContent":{
                        "compositeList":[
                            {
                                "title": "조건에 적합한 전문가를 추천해 드렸습니다.",
                                "description": "" +
                                "“상세 정보 보기”를 누르면" +
                                "\n해당 포트폴리오의 더 많은 사진과" +
                                "\n자세한 정보를 볼 수 있습니다." ,
                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/concierge_success.png",
                                    "width": 290,
                                    "height": 150
                                },

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "text": "다시 시작 [컨시어지]",
                                        "code": '컨시어지'
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "시작페이지로 이동 [시작]",
                                        "code": 'welcome'
                                    }
                                ]
                            }
                        ]
                    }

            };

    }    if(type === 'photoHow'){
        var result =
            {

                "event": "send",
                "sender": "partner",
                "user": body.user,
                "partner": body.partner,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "공간 사진을 통해 아이디어를 얻으세요.",
                            "description": "" +
                            "“상세 정보 보기”를 누르면" +
                            "\n해당 포트폴리오의 더 많은 사진과" +
                            "\n자세한 정보를 볼 수 있습니다." ,
                            "image": {
                                "imageUrl": "https://interiorbrothers.com/images/chatbot/cs.png",
                                "width": 290,
                                "height": 150
                            },

                            "buttonList":[
                                {
                                    "type": "TEXT",
                                    "text": "사진 더보기 [사진]",
                                    "code": '사진 더보기'
                                },
                                {
                                    "type": "TEXT",
                                    "text": "시작페이지로 이동 [시작]",
                                    "code": 'welcome'
                                }
                            ]
                        }
                    ]
                }

            };

    }

    return result;
}

module.exports.getSpaces1 = function (msg) {
    var result = [];

    switch(msg) {
        case '상업공간' :
            result.push('1');
            break;
        case '업무공간' :
            result.push('2');
            break;
        case '주거공간' :
            result.push('3');
            break;
        case '문화/종교공간' :
            result.push('4');
            break;
        case '기타공간' :
            result.push('5');
            break;
        default:
            result.push('-1');


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
        result = "-1";
    }

    return result;

};
