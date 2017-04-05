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
                                    "imageUrl": "https://interiorbrothers.com/img/main/qualityPortfolios.png",
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
                                    "imageUrl": "https://interiorbrothers.com/img/main/qualityPortfolios.png",
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
                                    "imageUrl": "https://interiorbrothers.com/img/main/qualityPortfolios.png",
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
                                        "text": "인테리어 디자인",
                                        "code": "2"
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "인테리어 시공",
                                        "code": "3"
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "스타일링",
                                        "code": "4"
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "인테리어 디자인+시공+스타일링",
                                        "code": "5"
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "인테리어 디자인+스타일링",
                                        "code": "6"
                                    },
                                    {
                                        "type": "TEXT",
                                        "text": "인테리어 시공+스타일링",
                                        "code": "7"
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
                                    "imageUrl": "https://interiorbrothers.com/img/main/qualityPortfolios.png",
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
                    "textContent" :{
                       "text" : "인테리어 하는 공간의 면적이 어떻게 되나요?\n\n ex) 숫자만 입력하면 평으로 이해합니다:) \n 제곱미터로 입력하길 원하시면\n  숫자 뒤에 m 을 입력해주세요.  \n"
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
                    "textContent" :{
                        "text": "인테리어 하는 공간의 예산은 얼마인가요? \n\n" +
                        "만원 단위로 입력해주세요! \n"+
                        "ex) 1000 5000 또는 1000~5000 으로 입력해주세요! \n"
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
                                    "imageUrl": "https://interiorbrothers.com/img/main/qualityPortfolios.png",
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
                                        "text": "기타",
                                    }

                                ]
                            }
                        ]
                    }
                }
            };

    }else if(type === 'experts'){

        for(var i = 0 ; i < opt.length ; i++){
            var match =  opt[i].src.split('/file/download/');
            opt[i].src = '/file/download/small-' + match[1];
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
                    "compositeContent":{
                        "compositeList":[
                            {
                                "title":  opt[0].businessName+"-"+opt[0].title,
                                "description": "구분 "+opt[0].spaceName+"\n면적 "+(opt[0].size).toFixed(2)+"m²("+(opt[0].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[0].budget],

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/"+opt[0].src,
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "상세보러가기",
                                            "url": "https://www.interiorbrothers.com/experts/"+opt[0].userId+"/portfolio?portfolioId="+opt[0].portfolioId,
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[0].userId+"/portfolio?portfolioId="+opt[0].portfolioId,
                                            "targetSelf": true,
                                            "pcTargetSelf": false,
                                            "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
                                        }
                                    }

                                ]
                            },
                            {
                                "title":  opt[1].businessName+"-"+opt[1].title,
                                "description": "구분 "+opt[1].spaceName+"\n면적 "+(opt[1].size).toFixed(2)+"m²("+(opt[1].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[1].budget],

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/"+opt[1].src,
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "상세보러가기",
                                            "url": "https://www.interiorbrothers.com/experts/"+opt[1].userId+"/portfolio?portfolioId="+opt[1].portfolioId,
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[1].userId+"/portfolio?portfolioId="+opt[1].portfolioId,
                                            "targetSelf": true,
                                            "pcTargetSelf": false,
                                            "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
                                        }
                                    }

                                ]
                            },
                            {
                                "title":  opt[2].businessName+"-"+opt[2].title,
                                "description": "구분 "+opt[2].spaceName+"\n면적 "+(opt[2].size).toFixed(2)+"m²("+(opt[2].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[2].budget],

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/"+opt[2].src,
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "상세보러가기",
                                            "url": "https://www.interiorbrothers.com/experts/"+opt[2].userId+"/portfolio?portfolioId="+opt[2].portfolioId,
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[2].userId+"/portfolio?portfolioId="+opt[2].portfolioId,
                                            "targetSelf": true,
                                            "pcTargetSelf": false,
                                            "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
                                        }
                                    }

                                ]
                            },
                            {
                                "title":  opt[3].businessName+"-"+opt[3].title,
                                "description": "구분 "+opt[3].spaceName+"\n면적 "+(opt[3].size).toFixed(2)+"m²("+(opt[3].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[3].budget],

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/"+opt[3].src,
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "상세보러가기",
                                            "url": "https://www.interiorbrothers.com/experts/"+opt[3].userId+"/portfolio?portfolioId="+opt[3].portfolioId,
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[3].userId+"/portfolio?portfolioId="+opt[3].portfolioId,
                                            "targetSelf": true,
                                            "pcTargetSelf": false,
                                            "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
                                        }
                                    }

                                ]
                            },
                            {
                                "title":  opt[4].businessName+"-"+opt[4].title,
                                "description": "구분 "+opt[4].spaceName+"\n면적 "+(opt[4].size).toFixed(2)+"m²("+(opt[4].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[4].budget],

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/"+opt[4].src,
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "상세보러가기",
                                            "url": "https://www.interiorbrothers.com/experts/"+opt[4].userId+"/portfolio?portfolioId="+opt[4].portfolioId,
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[4].userId+"/portfolio?portfolioId="+opt[4].portfolioId,
                                            "targetSelf": true,
                                            "pcTargetSelf": false,
                                            "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
                                        }
                                    }

                                ]
                            },
                            {
                                "title":  opt[5].businessName+"-"+opt[5].title,
                                "description": "구분 "+opt[5].spaceName+"\n면적 "+(opt[5].size).toFixed(2)+"m²("+(opt[5].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[5].budget],

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/"+opt[5].src,
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "상세보러가기",
                                            "url": "https://www.interiorbrothers.com/experts/"+opt[5].userId+"/portfolio?portfolioId="+opt[5].portfolioId,
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[5].userId+"/portfolio?portfolioId="+opt[5].portfolioId,
                                            "targetSelf": true,
                                            "pcTargetSelf": false,
                                            "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
                                        }
                                    }

                                ]
                            },
                            {
                                "title":  opt[6].businessName+"-"+opt[6].title,
                                "description": "구분 "+opt[6].spaceName+"\n면적 "+(opt[6].size).toFixed(2)+"m²("+(opt[6].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[6].budget],

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/"+opt[6].src,
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "상세보러가기",
                                            "url": "https://www.interiorbrothers.com/experts/"+opt[6].userId+"/portfolio?portfolioId="+opt[6].portfolioId,
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[6].userId+"/portfolio?portfolioId="+opt[6].portfolioId,
                                            "targetSelf": true,
                                            "pcTargetSelf": false,
                                            "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
                                        }
                                    }

                                ]
                            },
                            {
                                "title":  opt[7].businessName+"-"+opt[7].title,
                                "description": "구분 "+opt[7].spaceName+"\n면적 "+(opt[7].size).toFixed(2)+"m²("+(opt[7].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[7].budget],

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/"+opt[7].src,
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "상세보러가기",
                                            "url": "https://www.interiorbrothers.com/experts/"+opt[7].userId+"/portfolio?portfolioId="+opt[7].portfolioId,
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[7].userId+"/portfolio?portfolioId="+opt[7].portfolioId,
                                            "targetSelf": true,
                                            "pcTargetSelf": false,
                                            "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
                                        }
                                    }

                                ]
                            },
                            {
                                "title":  opt[8].businessName+"-"+opt[8].title,
                                "description": "구분 "+opt[8].spaceName+"\n면적 "+(opt[8].size).toFixed(2)+"m²("+(opt[8].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[8].budget],

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/"+opt[8].src,
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "상세보러가기",
                                            "url": "https://www.interiorbrothers.com/experts/"+opt[8].userId+"/portfolio?portfolioId="+opt[8].portfolioId,
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[8].userId+"/portfolio?portfolioId="+opt[8].portfolioId,
                                            "targetSelf": true,
                                            "pcTargetSelf": false,
                                            "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
                                        }
                                    }

                                ]
                            },
                            {
                                "title":  opt[9].businessName+"-"+opt[9].title,
                                "description": "구분 "+opt[9].spaceName+"\n면적 "+(opt[9].size).toFixed(2)+"m²("+(opt[9].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[9].budget],

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/"+opt[9].src,
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "상세보러가기",
                                            "url": "https://www.interiorbrothers.com/experts/"+opt[9].userId+"/portfolio?portfolioId="+opt[9].portfolioId,
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[9].userId+"/portfolio?portfolioId="+opt[9].portfolioId,
                                            "targetSelf": true,
                                            "pcTargetSelf": false,
                                            "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
                                        }
                                    }

                                ]
                            },
                            {
                                "title":  opt[10].businessName+"-"+opt[10].title,
                                "description": "구분 "+opt[10].spaceName+"\n면적 "+(opt[10].size).toFixed(2)+"m²("+(opt[10].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[10].budget],

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/"+opt[10].src,
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "상세보러가기",
                                            "url": "https://www.interiorbrothers.com/experts/"+opt[10].userId+"/portfolio?portfolioId="+opt[10].portfolioId,
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[10].userId+"/portfolio?portfolioId="+opt[10].portfolioId,
                                            "targetSelf": true,
                                            "pcTargetSelf": false,
                                            "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
                                        }
                                    }

                                ]
                            },
                            {
                                "title":  opt[11].businessName+"-"+opt[11].title,
                                "description": "구분 "+opt[11].spaceName+"\n면적 "+(opt[11].size).toFixed(2)+"m²("+(opt[11].size / 3.3).toFixed(2) +" 평)\n예산 "+util.budget[opt[11].budget],

                                "image": {
                                    "imageUrl": "https://interiorbrothers.com/"+opt[11].src,
                                    "width": 530,
                                    "height": 290
                                },

                                "buttonList":[
                                    {
                                        "type": "LINK",
                                        "link": {
                                            "title": "상세보러가기",
                                            "url": "https://www.interiorbrothers.com/experts/"+opt[11].userId+"/portfolio?portfolioId="+opt[11].portfolioId,
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/experts/"+opt[11].userId+"/portfolio?portfolioId="+opt[11].portfolioId,
                                            "targetSelf": true,
                                            "pcTargetSelf": false,
                                            "pcPopupSpecs": "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0,width=412,height=640"
                                        }
                                    }

                                ]
                            }
                        ]
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
