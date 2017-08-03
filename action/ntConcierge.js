
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
                            "description": "인테리어 하려는 공간에 해당하는\n 카테고리를 선택해 주세요.",
                            /* imageContent와 상동 */
                            "image": {
                                "imageUrl": "https://interiorbrothers.com/images/chatbot/a3.png", /* 전송하고자하는 이미지 URL */
                                //"imageUrl": "http://easternsky.synology.me//images/chatbot/a3.png",
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
        var actions = [],
            obj = {} ,
            obj2 = {};

        for (prop in temp) {

            if (temp.hasOwnProperty(prop) && prop !== 'name') {
                if(cnt < 10){
                    ++cnt;
                    obj.type = "TEXT";
                    obj2.title = temp[prop].name;
                    obj2.code = cnt;
                    obj.data = obj2;
                    actions.push(obj);

                    obj = {};
                    obj2 = {};
                }else{
                    break;
                }

            }
        }
        obj.type = "TEXT";
        obj2.title = "← 이전 단계로 돌아가기";
        obj2.code = "-1";
        obj.data = obj2;
        actions.push(obj);

        obj = {};
        obj2 = {};

        var result =
            {
                "event": "send",
                "user": body.user,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "어떤 공간을 인테리어 하시나요?",
                            "description": "인테리어 하려는 공간의 \n상세 분류를 선택해 주세요." +
                            "\n\n원하는 공간 분류가 없는 경우 " +
                            "\n'← 이전 단계로 돌아가기' 를 눌러 \n다른 공간 카테고리를 선택해 주세요.",

                            "image": {
                               "imageUrl": "https://interiorbrothers.com/images/chatbot/a3.png",
                                //"imageUrl": "http://easternsky.synology.me//images/chatbot/a3.png",
                            },

                            "buttonList": actions
                        }
                    ]
                }
            };

    }else if(type === 'spaces3'){
        var temp, prop,
            cnt = 0;
        temp = util.portfolioDivision[opt[0]][opt[1]];
        var actions = [],
         obj = {} ,
         obj2 = {};

        var html = "";
        for (prop in temp) {
            if (temp.hasOwnProperty(prop) && prop !== 'name') {
                if(cnt < 10){
                    ++cnt;
                    obj.type = "TEXT";
                    obj2.title = temp[prop];
                    obj2.code = cnt;
                    obj.data = obj2;
                    actions.push(obj);

                    obj = {};
                    obj2 = {};
                }else{
                    break;
                }

            }
        }

        obj.type = "TEXT";
        obj2.title = "← 이전 단계로 돌아가기";
        obj2.code = "-1";
        obj.data = obj2;
        actions.push(obj);

        obj = {};
        obj2 = {};

        var result =
            {
                "event": "send",
                "user": body.user,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "어떤 공간을 인테리어 하시나요?",
                            "description": "인테리어 하려는 공간을 선택해 주세요." +
                            "\n\n원하는 공간이 없는 경우 \n'← 이전 단계로 돌아가기' 를 눌러 \n다른 공간 분류를 선택해 주세요.",

                            "image": {
                               "imageUrl": "https://interiorbrothers.com/images/chatbot/a3.png",
                                //"imageUrl": "http://easternsky.synology.me//images/chatbot/a3.png",
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
                            "title": "전문가의 도움이 필요한 범위를\n 선택해 주세요",
                            "description": "일반적으로는" +
                            "\n'인테리어 디자인' + '시공'" +
                            "\n을 선택하시면 됩니다.",

                            "image": {
                               "imageUrl": "https://interiorbrothers.com/images/chatbot/a4.png",
                                //"imageUrl": "http://easternsky.synology.me//images/chatbot/a4.png",
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
                "event": "send",
                "sender": "partner",
                "user": body.user,
                "partner": body.partner,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "공간브랜딩이 필요하신가요?",
                            "description": "공간브랜딩은" +
                            "\n주로 상업공간에서 " +
                            "\n브랜드 아이덴티티의 개발과" +
                            "\n공간 아이덴티티의 개발을 통해" +
                            "\n\n해당 브랜드 및 공간에 대한" +
                            "\n차별화된 가치를 높여줍니다." +
                            "\n\n브랜드 로고 디자인 작업, 패키지," +
                            "\n내부/외부 간판, 메뉴 판넬 등의 작업이" +
                            "\n진행됩니다. (범위는 전문가별 상이)",


                            "image": {
                                "imageUrl": "https://interiorbrothers.com/images/chatbot/a4.png",
                                //"imageUrl": "http://easternsky.synology.me//images/chatbot/a4.png",
                            },

                            "buttonList":[
                                {
                                    "type": "TEXT",
                                    "data": {
                                        "title": "네"
                                    }


                                },
                                {
                                    "type": "TEXT",
                                    "data": {
                                        "title": "아니오"
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



    }else if(type === 'spaceMeasure'){


        var result =
            {
                "event": "send",
                "user": body.user,
                    "compositeContent":{
                    "compositeList":[
                        {
                            "title": "인테리어 하는 공간의 \n면적을 알려주세요",
                            "description": "공간의 면적이 확실하지 않더라도" +
                            "\n대략적인 면적을 입력해 주세요." +
                            "\n해당 조건에 맞는 사례를 보여드립니다." +
                            "\n\n영문자 m을 붙이면 ‘제곱미터(㎡)’단위로" +
                            "\n숫자만 입력시 ‘평’ 단위로 인식합니다." +
                            "\n\n예) 30 -> 30평," +
                            "\n119m -> 119㎡ (약 39평)",

                            "image": {
                                "imageUrl": "https://interiorbrothers.com/images/chatbot/a5.png",
                                //"imageUrl": "http://easternsky.synology.me//images/chatbot/a5.png",
                            },

                            "buttonList":[
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "← 이전 단계로 돌아가기",
                                        "code": "-1"
                                    }

                                }
                            ]
                        }
                    ]
                }
            };


    }else if(type === 'budget'){

        var result =
            {
                "event": "send",
                "sender": "partner",
                "user": body.user,
                "partner": body.partner,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "인테리어 예산을 알려주세요",
                            "description": "예산이 확정 되어있지 않더라도," +
                            "\n대략적인 금액범위를 입력해 주세요." +
                            "\n해당 조건에 맞는 사례를 보여드립니다. " +
                            "\n\n숫자 사이에 공백이나 ~기호를 넣어주세요." +
                            "\n만원단위로 범위를 입력해 주세요." +
                            "\n\n예) 800 950 -> 800~950만원 범위" +
                            "\n1000~1500 -> 1,000~1,500만원 범위",


                            "image": {
                                "imageUrl": "https://interiorbrothers.com/images/chatbot/a5.png",
                                //"imageUrl": "http://easternsky.synology.me//images/chatbot/a5.png",
                            },

                            "buttonList":[
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "← 이전 단계로 돌아가기",
                                        "code": "-1"
                                    }
                                }
                            ]
                        }
                    ]
                }
            };


    }else if(type === 'styles'){

        var result =
            {
                "event": "send",
                "user": body.user,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "원하는 인테리어 스타일을\n 선택해 주세요",
                            "description": "원하는 스타일을 선택해 주세요." +
                            "\n가장 유사한 사례를 보여드립니다." +
                            "\n\n이제 다 왔습니다. ^^",

                            "image": {
                               "imageUrl": "https://interiorbrothers.com/images/chatbot/a6.png",
                                //"imageUrl": "http://easternsky.synology.me//images/chatbot/a6.png",
                            },

                            "buttonList":[
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "모던",
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "북유럽",
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "클래식",
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "프로방스&로맨틱",
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "빈티지",
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "한국&아시아",
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "미니멀리즘",
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "인더스트리얼",
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "내추럴",
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "← 이전 단계로 돌아가기",
                                        "code": "-1"
                                    }

                                }

                            ]
                        }
                    ]
                }
            };

    }else if(type === 'experts'){

        var compositeList = [],
             buttonList = [],
            elementList = {},
            elementList_data = [],
             obj = {},
             obj2 = {},
             obj3 = {};

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
            elementList.type = "LIST";
            obj3.title = opt[i].businessName;
            // obj.title = opt[i].businessName+"\n\n"+opt[i].title;
            obj.title = opt[i].title;

            obj3.description = "경력 : "+ opt[i].career +"년 \n전문분야 : "+util.mainSpecialty[opt[i].mainSpecialty];
            obj.description = "구분 : "+ opt[i].spaceName +"\n시기 : "+ opt[i].deadLine +"\n면적 : "+(opt[i].size).toFixed(2)+"m²("+(opt[i].size / 3.3).toFixed(2) +" 평)\n예산 : "+util.budget[opt[i].budget];
            obj3.image = {
                "imageUrl": "https://interiorbrothers.com"+opt[i].profileImage
            };

            obj.image = {
                "imageUrl": "https://interiorbrothers.com"+opt[i].src
            };

            obj2.type =  "LINK";
            obj2.data =  {
                "title": "상세 정보 보기",
                "url": "https://www.interiorbrothers.com/experts/"+opt[i].userId+"/portfolio?portfolioId="+opt[i].portfolioId,
                "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[i].userId+"/portfolio?portfolioId="+opt[i].portfolioId,
            };

            elementList_data.push(obj3);
            elementList.data = elementList_data;
            obj.elementList = elementList;
            buttonList.push(obj2);
            obj.buttonList = buttonList;
            compositeList.push(obj);

            obj3 = {};
            elementList = {};
            elementList_data = [];
            obj2 = {};
            obj = {};
            buttonList = [];

        }

        var result =
            {
                "event": "send",
                "user": body.user,
                "compositeContent": {
                    "compositeList": compositeList
                }
            };


    }else if(type === 'error'){
        var result =
            {
                "event": "send",
                "user": body.user,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "서비스 장애가 발생했습니다.",
                            "description": "예상치 못한 서비스 장애가 발생했습니다." +
                            "\n\n일시적인 장애인 경우 바로 복구됩니다." +
                            "\n\n서비스 장애가 반복적으로 발생시에는" +
                            "\n잠시 후에 다시 시도하시거나," +
                            "\n070-7775-5568로 문의해 주세요.",


                            "buttonList":[
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "전문가 찾기 [컨시어지]",
                                        "code": '컨시어지'
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "처음부터 다시 시작하기 [시작]",
                                        "code": 'welcome'
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "← 이전 단계로 돌아가기",
                                        "code": opt
                                    }

                                }

                            ]
                        }
                    ]
                }
            };
    }else if(type === 'back'){
        var result =
            {
                "event": "send",
                "user": body.user,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "입력하신 내용을 이해하지 못했습니다.",
                            "description": "선택지 중에서 선택해 주세요." +
                            "\n\n진행하고 있던 컨시어지를 계속하시려면 " +
                            "\n'←이전 단계로 돌아가기'를 누르세요." ,

                            "buttonList":[
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "전문가 찾기 다시 시작[컨시어지]",
                                        "code": '컨시어지'
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "처음부터 다시 시작하기 [시작]",
                                        "code": 'welcome'
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "← 이전 단계로 돌아가기",
                                        "code": opt
                                    }

                                }

                            ]
                        }
                    ]
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
                                "title": "내 조건과 가장 비슷한 실제 사례를" +
                                "\n가지고 있는 전문가를 추천",
                                "description": "'할 수 있다' 전문가와 '해본 적 있다' 전문가" +
                                "\n누굴 선택하시겠습니까? " +
                                "\n\n이제 실제 사례를 가지고 있는 전문가와" +
                                "\n실속있는 상담을 나눠보세요.",

                                "image": {
                                   "imageUrl": "https://interiorbrothers.com/images/chatbot/concierge.png",
                                    //"imageUrl": "http://easternsky.synology.me//images/chatbot/concierge.png",
                                },

                                "buttonList":[
                                    {
                                        "type" : "TEXT",
                                        "data" : {
                                            "title": "전문가 찾기 [컨시어지]",
                                            "code": '컨시어지'
                                        }

                                    }
                                ]
                            },
                            {
                                "title": "높은 퀄리티의 실 사례 사진으로" +
                                "\n내 공간에 필요한 아이디어를 손쉽게",
                                "description": "매일매일 새로운 인테리어 사진으로" +
                                "\n새로운 아이디어를 얻을 수 있습니다." +
                                "\n\n엄선한 국내 최정상급 인테리어 사진들을" +
                                "\n랜덤으로 보여드립니다.",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/photoView.png",
                                    //"imageUrl": "http://easternsky.synology.me//images/chatbot/photoView.png",
                                },

                                "buttonList":[

                                    {
                                        "type": "TEXT",
                                        "data" : {
                                            "title": "사진보기 [사진]",
                                            "code": '사진보기'
                                        }

                                    }

                                ]
                            },
                            {
                                "title": "실명인증 및 사업자 인증을 거친" +
                                "\n믿을 수 있는 전문가를 한자리에서",
                                "description": "내 공간을 맡길 인테리어 전문가," +
                                "\n전문성과 신뢰성이 가장 중요합니다." +
                                "\n\n인테리어브라더스에서 전문가의 전문성 및" +
                                "\n다양한 정보들을 확인해 보세요.",

                                "image": {
                                   "imageUrl": "https://interiorbrothers.com/images/chatbot/experts.png",
                                    //"imageUrl": "http://easternsky.synology.me//images/chatbot/experts.png",
                                },

                                "buttonList":[

                                    {
                                        "type": "LINK",
                                        "data": {
                                            "title": "전문가 리스트 (웹사이트로 이동)",
                                            "url": "https://www.interiorbrothers.com/findexpert",
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/findexpert",
                                        }
                                    }


                                ]
                            },
                            {
                                "title": "공간과 사람과 문화에 관한 이야기" +
                                "\n인테리어브라더스가 준비한 컨텐츠",
                                "description": "공간에 대한 비하인드 스토리, 전문가의" +
                                "\n진솔한 이야기, 공간에 대한 새로운 접근" +
                                "\n\n인테리어브라더스가 제공하는 다양한" +
                                "\n컨텐츠를 통해 그 이야기를 들어보세요.",

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/images/chatbot/webros.png",
                                    //"imageUrl": "http://easternsky.synology.me//images/chatbot/webros.png",
                                },

                                "buttonList":[

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
                "event": "send",
                "user": body.user,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "요청하신 조건에 가장 적합한" +
                            "\n사례를 발견하지 못했습니다.",
                            "description": "요청하신 조건에 맞는 최적의 사례를" +
                            "\n 발견하지 못했습니다." +
                            "\n\n조건을 변경해서 다시 시도해 주세요.",

                            "buttonList":[
                                {
                                    "type" : "TEXT",
                                    "data" : {
                                        "title": "전문가 찾기 다시 시작 [컨시어지]",
                                        "code": '컨시어지'
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "처음부터 다시 시작하기 [시작]",
                                        "code": 'welcome'
                                    }

                                }

                            ]
                        }
                    ]
                }
            };
    }else if(type === 'what'){
        var result =
            {
                "event": "send",
                "sender": "partner",
                "user": body.user,
                "partner": body.partner,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "입력하신 내용을 이해하지 못했습니다.",
                            "description": "선택지 중에서 선택해 주세요.",

                            "buttonList":[
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "전문가 찾기 다시 시작[컨시어지]",
                                        "code": '컨시어지'
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "사진보기 다시 시작하기 [사진]",
                                        "code": '사진보기'
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "처음부터 다시 시작하기 [시작]",
                                        "code": 'welcome'
                                    }

                                }

                            ]
                        }
                    ]
                }
            };
    }else if(type === 'photoview'){

        var compositeList = [],
             buttonList = [],
             obj = {},
             obj2 = {};

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
            obj2.data =  {
                "title": "상세 정보 보기",
                "url": "https://www.interiorbrothers.com/experts/"+opt[i].creator+"/portfolio?portfolioId="+opt[i]._id,
                "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[i].creator+"/portfolio?portfolioId="+opt[i]._id,
            };

            buttonList.push(obj2);
            obj.buttonList = buttonList;
            compositeList.push(obj);

            obj2 ={};
            obj ={};
            buttonList = [];
        }

        var result =
            {
                "event": "send",
                "user": body.user,
                "compositeContent": {
                    "compositeList": compositeList
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
                    "user": body.user,
                    "compositeContent":{
                        "compositeList":[
                            {
                                "description": "" +
                                "“상세 정보 보기”를 누르면" +
                                "\n더 많은 사진과 정보를 볼 수 있습니다.",

                                "buttonList":[
                                    {
                                        "type": "TEXT",
                                        "data":{
                                            "title": "전문가 찾기 다시 시작 [컨시어지]",
                                            "code": '컨시어지'
                                        }

                                    },
                                    {
                                        "type": "TEXT",
                                        "data":{
                                            "title": "시작페이지로 이동 [시작]",
                                            "code": 'welcome'
                                        }

                                    }
                                ]
                            }
                        ]
                    }

            };

    }else if(type === 'photoHow'){
        var result =
            {
                "event": "send",
                "user": body.user,
                "compositeContent":{
                    "compositeList":[
                        {
                            "description": "" +
                            "“상세 정보 보기”를 누르면" +
                            "\n더 많은 사진과 정보를 볼 수 있습니다.",

                            "buttonList":[
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "사진 더보기 [사진]",
                                        "code": '사진 더보기'
                                    }

                                },
                                {
                                    "type": "TEXT",
                                    "data":{
                                        "title": "시작페이지로 이동 [시작]",
                                        "code": 'welcome'
                                    }

                                }
                            ]
                        }
                    ]
                }

            };

    }else if(type === 'hello'){
        var result =
            {
                "event": "send",
                "user": body.user,
                "compositeContent":{
                    "compositeList":[
                        {
                            "title": "인테리어브라더스 챗봇서비스 입니다." +
                            "\n원하는 서비스를 선택 해주세요.",
                            "description": "" +
                            "※언제든지 '시작' 을 입력하면" +
                            "\n이 화면으로 돌아올 수 있습니다."
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
