const https = require('https');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var debug = require('debug')('chatbottest:server');
const config = require('../config');
const reply = require('../reply');
const actionBasic = require('../action/basic');
const actionConcierge = require('../action/concierge');
const actionNtConcierge = require('../action/ntConcierge');
const actionHelp = require('../action/help');
const actionEnjoy = require('../action/enjoy');
const actionScheduler = require('../action/scheduler');
const requestSender = require('request');
const querystring = require('querystring');

var app = express();




var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var Redis = require('ioredis');


var redisClient		= new Redis(6379, 'redischatbot.zfdunq.ng.0001.apn2.cache.amazonaws.com');
//var redisClient		= new Redis(6379, '127.0.0.1');





redisClient.on('connect', function() {
    'use strict';

    console.log('redis connected');
}).on('error', function(err) {
    'use strict';

    console.error(err);
});

// session
app.use(session({
    secret: 'interior-brothers-1243',
    store: new RedisStore({client: redisClient}),
    saveUninitialized: false,
    resave: true
}));


var port = normalizePort(process.env.PORT || '3000');


app.set('port', port);


var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


app.use(bodyParser.json());

app.use(function(req,res,next) {
    req.cache = redisClient;
    next();
})

app.get('/', function(req, res, next) {

    var sess = req.session;
    var test = {
        'name': 'tom',
        'address': 'Seoul, Korea',
        'phone': '001-001-0001'
        };
  /*  req.cache.set(test.name,JSON.stringify(test));
    req.cache.get(test.name,function(err,data){
        console.log(typeof data);
        console.log(typeof JSON.parse(data));
    });*/
    if (sess.views) {

        sess.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + sess.views + '</p>')

        res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        sess.views = 1
        res.end('welcome to the session demo. refresh!')
    }
});

app.get('/test', function(req, res, next) {


});


/*
 ////////////////////////////////////////////////////
 START 네이버 톡톡
 ///////////////////////////////////////////////////
 */
var defaultResponse = {
    success: true,
    resultCode: "00",
    resultMessage: "success"
};


/*var info =   {
    //기본정보
    username : '',
    //컨시어지 단계 구간
    concierge : '',
    spaces1 : '',
    spaces2 : '',
    spaces3 : '',
    specialtyRangeYN : '',
    spaceBrandingYN : '',
    spaceMeasure : '',
    budget : '',
    stylesYN : '',
    errorStatus : '',

    //컨시어지 파라미터
    estimate_Type : "interior",
    spacesCategory : '',
    spacesSubCategory : '',
    spacesSpace : '',
    specialtyRange : '',
    spaceBranding : '',
    py : '',
    meter : '',
    budgetMin : '',
    budgetMax : '',
    styles : '',
    history : '',
    //사진보기 페이지
    photo_page : '1'
};*/

app.post('/naverTalkTalk', function (req, res) {
    'use strict';

    var textResponse = {
        event: "send",
        user : req.body.user,
        textContent :{
            text: "",
        }
        }

    var testResponse = {
        "event": "send",
        "user": req.body.user, /* 유저 식별값 */

        "compositeContent": {
            "compositeList":[
                {
                    "title": "TEST",
                    "description": ""+
                        "구분 : 패션" +
                        "\n시기 : 2015-03-01" +
                        "\n면적 : 132.00m²(40.00 평)" +
                        "\n예산 : 9,000 ~ 1억원 사이",
                    "image": {
                        "imageUrl": "https://interiorbrothers.com/images/chatbot/cs.png"
                    },
                    "elementList": {
                 "type": "LIST",
                 "data": [
                     {
                         "title" : "test",
                         "description" : "경력 : 15년" +
                         "\n주요분야 : 상업공간" ,
                         "subDescription" : "",
                         "image" : {
                         "imageUrl": "https://interiorbrothers.com/images/chatbot/status_unexpected.png"
                        }
                     }
                 ]
                 },
                    "buttonList": [
                        {
                            "type": "TEXT", /* 텍스트형 버튼 - 유저가 클릭하면 해당 버튼의 텍스트가 전송된다*/
                            "data" : {
                                "title": "텍스트형 버튼", /* 버튼에 노출하는 버튼명 (최대 18자)*/
                                "code": "code" /* code를 정의하는경우 유저가 보내는 send이벤트 textContent에 code가 삽입되어 전송됨 (최대 1,000자)*/
                            }
                        },

                        {
                            "type": "OPTION", /* 옵션형 버튼 - 2depth로 이루어진 버튼. 유저가 클릭하면 채팅창 하단에 버튼 목록이 노출된다. */
                            "data": {
                                "title" : "옵션형 버튼",
                                "buttonList" :[
                                    {
                                        "type": "TEXT", /* 옵션형 버튼은 TEXT, LINK, PAY 타입만 허용된다 */
                                        "data" : {
                                            "title": "옵션-텍스트버튼", /* 옵션형 버튼에 노출하는 버튼명 (최대 10자) */
                                            "code" : "code"
                                        }
                                    },
                                    {
                                        "type": "LINK",
                                        "data": {
                                            "title": "전문가 리스트 (웹사이트로 이동)",
                                            "url": "https://www.interiorbrothers.com/findexpert",
                                            "mobileUrl": "https://www.interiorbrothers.com/mobile/findexpert",
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    };

    var data = {};

    /*
      아웃바운드 인증코드
     운영서버 -  ct_wc460f_j04kHXPwSs+vV2lRekjt
     테스트서버 - ct_wc44b1_nxS6bLj5SlCPGbftkVmm
    */
    var auth_code = 'ct_wc460f_j04kHXPwSs+vV2lRekjt';
    req.cache.get(req.body.user,function(err,result){

        if(result){
            if(result.lastIndexOf("}") != -1 ){
                data = JSON.parse(result);
                // console.log(data);
            }else{
                console.log("처음유입");
                //유저네임
                data.username = req.body.user;
                data.photo_page = 1;
                data.estimate_Type = "interior";
                data.errorStatus = false;
                //레디스에 데이터 유저생성
                req.cache.set(req.body.user,JSON.stringify(data));
                req.cache.expire(req.body.user, 600);
            }
        }else{
            console.log("다시시작");
            //유저네임
            data.username = req.body.user;
            data.photo_page = 1;
            data.estimate_Type = "interior";
            data.errorStatus = false;
            //레디스에 데이터 유저생성
            req.cache.set(req.body.user,JSON.stringify(data));
            req.cache.expire(req.body.user, 600);
        }

        var d = new Date();
        // console.log("요청---"+d.getMinutes()+":"+d.getSeconds()+":"+d.getMilliseconds());

        switch(req.body.event) {
            case 'send' :
                if(req.body.textContent) {
                var text = req.body.textContent.text,
                    code = req.body.textContent.code;

                    if(text.indexOf("사진") != -1 || code === "사진보기"){

                        data.concierge = false;
                        data.spaces1 = false;
                        data.spaces2 = false;
                        data.spaces3 = false;
                        data.specialtyRangeYN = false;
                        data.spaceBrandingYN = false;
                        data.spaceMeasure = false;
                        data.budget = false;
                        data.stylesYN = false;
                        data.errorStatus = false;
                        //컨시어지 파라미터
                        data.spacesCategory = '';
                        data.spacesSubCategory = '';
                        data.spacesSpace = '';
                        data.specialtyRange = '';
                        data.spaceBranding = '';
                        data.py = '';
                        data.meter = '';
                        data.budgetMin = '';
                        data.budgetMax = '';
                        data.styles = '';
                        data.history = '';
                        data.errCode = "";


                        var params = querystring.stringify({
                            kind: 1,
                            page:  data.photo_page,
                            type: 'photoView',
                            sort: 'default'
                        });


                        var options = {

                            url: ' https://interiorbrothers.com/api/search?'+params,
                            method: 'GET',
                            headers: { 'Content-Type': 'application/json' }
                        };
                        var photoview;
                        requestSender(options, function (error, response, body) {
                            //to do list

                            if (error) {
                                console.log("err");
                                return console.error('photoview failed:', error);
                            }

                            body = JSON.parse(body);
                            photoview = body.result;


                        });


                        setTimeout(function () {

                            data.photo_page = data.photo_page+1;
                            req.cache.set(req.body.user,JSON.stringify(data));
                            req.cache.expire(req.body.user, 600);
                            res.json(actionNtConcierge.getConciergeExpress("photoview", req.body, photoview));

                        }, 2000);


                        // 아웃바운드 API 결과 안내
                        var headers = {
                            'Content-type' : 'application/json',
                            'Authorization': auth_code
                        };

                        var options2 = {
                            url: 'https://gw.talk.naver.com/chatbot/v1/event',
                            method: 'POST',
                            headers: headers,
                            json: actionNtConcierge.getOutBoundExpress("photoHow", req.body, '')
                        };

                        setTimeout(function () {

                                requestSender(options2, function (error, response, body) {
                                    if (error) {
                                        return console.error('resultMsg failed:', error);
                                    }

                                })

                        }, 3500);



                    }else if(text.indexOf("컨시어지") != -1 || code === "컨시어지"){

                        data.concierge = true;
                        data.spaces1 = true;
                        data.spaces2 = false;
                        data.spaces3 = false;
                        data.specialtyRangeYN = false;
                        data.spaceBrandingYN = false;
                        data.spaceMeasure = false;
                        data.budget = false;
                        data.stylesYN = false;
                        data.errorStatus = false;
                        //컨시어지 파라미터
                        data.spacesCategory = '';
                        data.spacesSubCategory = '';
                        data.spacesSpace = '';
                        data.specialtyRange = '';
                        data.spaceBranding = '';
                        data.py = '';
                        data.meter = '';
                        data.budgetMin = '';
                        data.budgetMax = '';
                        data.styles = '';
                        data.history = '';
                        data.errCode = "";
                        req.cache.set(req.body.user,JSON.stringify(data));
                        req.cache.expire(req.body.user, 600);
                        res.json(actionNtConcierge.getConciergeExpress("spaces1",req.body,''));

                    }else if(text.indexOf("시작") != -1 || code === "welcome"){
                        clearData();


                        // 아웃바운드 API 결과 안내
                        var headers = {
                            'Content-type' : 'application/json',
                            'Authorization': auth_code
                        };

                        var options2 = {
                            url: 'https://gw.talk.naver.com/chatbot/v1/event',
                            method: 'POST',
                            headers: headers,
                            json: actionNtConcierge.getOutBoundExpress("hello", req.body, '')
                        };
                        setTimeout(function () {
                                requestSender(options2, function (error, response, body) {
                                    if (error) {
                                        return console.error('resultMsg failed:', error);
                                    }

                                })
                        }, 500);
                        setTimeout(function () {

                            res.json(actionNtConcierge.getConciergeExpress("welcome",req.body,''));

                        }, 1000);




                    } else{

                        //에러발생시
                        if (data.errorStatus === true) {

                            var code = req.body.textContent.code;

                            data.errorStatus = false;

                            var opt = "";
                            if(code === 'spaces2' || data.errCode === 'spaces2'){
                                opt = data.spacesCategory;
                            }else if(code === 'spaces3' || data.errCode === 'spaces3'){
                                opt = data.history;
                            }


                            if ((code === undefined || code === "undefined") && text.indexOf("이전") != -1) {
                               code = data.errCode;
                            }else if((code === undefined || code === "undefined") && text.indexOf("이전") === -1){
                                code = "back";
                                opt = data.errCode;
                                data.errorStatus = true;
                            }
                            req.cache.set(req.body.user,JSON.stringify(data));
                            req.cache.expire(req.body.user, 600);
                            res.json(actionNtConcierge.getConciergeExpress(code, req.body, opt));

                        } else {
                        //컨시어지 시작
                        if (data.concierge === true) {
                            //공간선택
                            if (data.spaces1 === true) {

                                if (text.indexOf("이전") != -1) {
                                    res.json(actionNtConcierge.getConciergeExpress("spaces1", req.body, ''));
                                    data.spaces1 = true;
                                    data.spaces2 = false;
                                    req.cache.set(req.body.user,JSON.stringify(data));
                                    req.cache.expire(req.body.user, 600);
                                } else {
                                    var code = req.body.textContent.code;

                                    //텍스트로 입력시 처리
                                    if (code === undefined) {
                                        if (!isNaN(text)) {
                                            if (text > 0 && text <= 5) {
                                                code = text;
                                            }
                                        } else {

                                            var result = actionNtConcierge.getSpaces1(text);

                                            //에러
                                            if (result == '-1') {

                                                res.json(actionNtConcierge.getConciergeExpress("back", req.body, 'spaces1'));
                                                data.errorStatus = true;
                                                data.spaces1 = true;
                                                data.spaces2 = false;
                                                data.errCode = "spaces1";
                                                req.cache.set(req.body.user,JSON.stringify(data));
                                                req.cache.expire(req.body.user, 600);
                                                return false;
                                            } else {
                                                code = result;
                                            }

                                        }
                                    }

                                    data.spacesCategory = code;
                                    data.spaces1 = false;
                                    data.spaces2 = true;
                                    req.cache.set(req.body.user,JSON.stringify(data));
                                    req.cache.expire(req.body.user, 600);

                                    res.json(actionNtConcierge.getConciergeExpress("spaces2", req.body, code));


                                }


                                //업종선택
                            } else if (data.spaces2 === true) {
                                if (text.indexOf("이전") != -1) {
                                    res.json(actionNtConcierge.getConciergeExpress("spaces1", req.body, ''));
                                    data.spaces1 = true;
                                    data.spaces2 = false;
                                    req.cache.set(req.body.user,JSON.stringify(data));
                                    req.cache.expire(req.body.user, 600);
                                } else {
                                    var result = actionNtConcierge.getSpaces2(data.spacesCategory, text);


                                    //에러
                                    if (result === undefined) {

                                        res.json(actionNtConcierge.getConciergeExpress("back", req.body, 'spaces2'));
                                        data.errCode = "spaces2";
                                        data.errorStatus = true;
                                        data.spaces1 = false;
                                        data.spaces2 = true;
                                        req.cache.set(req.body.user,JSON.stringify(data));
                                        req.cache.expire(req.body.user, 600);

                                    } else {
                                        data.spacesSubCategory = result;
                                        var params = [];
                                        params[0] = data.spacesCategory;
                                        params[1] = result;
                                        data.history = params;

                                        res.json(actionNtConcierge.getConciergeExpress("spaces3", req.body, params));

                                        data.spaces2 = false;
                                        data.spaces3 = true;
                                        req.cache.set(req.body.user,JSON.stringify(data));
                                        req.cache.expire(req.body.user, 600);
                                    }

                                }

                                //상세 업종선택
                            } else if (data.spaces3 === true) {
                                if (text.indexOf("이전") != -1) {
                                    res.json(actionNtConcierge.getConciergeExpress("spaces2", req.body, data.spacesCategory));
                                    data.spaces2 = true;
                                    data.spaces3 = false;
                                    req.cache.set(req.body.user,JSON.stringify(data));
                                    req.cache.expire(req.body.user, 600);
                                } else {

                                    var result = actionNtConcierge.getSpaces3(data.spacesCategory, data.spacesSubCategory, text);

                                    if (result === undefined) {
                                        res.json(actionNtConcierge.getConciergeExpress("back", req.body, 'spaces3'));
                                        data.errCode = "spaces3";
                                        data.errorStatus = true;
                                        data.spaces2 = false;
                                        data.spaces3 = true;
                                        req.cache.set(req.body.user,JSON.stringify(data));
                                        req.cache.expire(req.body.user, 600);


                                    } else {
                                        data.spacesSpace = result;

                                        res.json(actionNtConcierge.getConciergeExpress("specialtyRange", req.body, ''));

                                        data.spaces3 = false;
                                        data.specialtyRangeYN = true;
                                        req.cache.set(req.body.user,JSON.stringify(data));
                                        req.cache.expire(req.body.user, 600);
                                    }


                                }

                                //범위선택
                            } else if (data.specialtyRangeYN === true) {

                                if (text.indexOf("이전") != -1) {
                                    res.json(actionNtConcierge.getConciergeExpress("spaces3", req.body, data.history));
                                    data.spaces3 = true;
                                    data.specialtyRangeYN = false;
                                    req.cache.set(req.body.user,JSON.stringify(data));
                                    req.cache.expire(req.body.user, 600);
                                } else {

                                    var code = req.body.textContent.code;

                                    //텍스트로 입력시 처리
                                    if (code === undefined) {
                                        if (!isNaN(text)) {
                                            //인테리어 디자인+시공 or 인테리어 디자인+시공+스타일링 코드로 입력
                                            if (text === 1 || text === 5) {
                                                code = text;
                                            }
                                            //인테리어 디자인+시공 or 인테리어 디자인+시공+스타일링 테스트로 입력
                                        }else if (text === '인테리어 디자인+시공' || text === '인테리어 디자인+시공+스타일링') {
                                                code = text;

                                        } else {

                                            res.json(actionNtConcierge.getConciergeExpress("back", req.body, 'specialtyRange'));
                                            data.errCode = "specialtyRange";
                                            data.errorStatus = true;
                                            data.spaces3 = false;
                                            data.specialtyRangeYN = true;
                                            req.cache.set(req.body.user,JSON.stringify(data));
                                            req.cache.expire(req.body.user, 600);
                                            return false;

                                        }
                                    }

                                    var result = actionNtConcierge.getSpecialtyRange(code);

                                    data.specialtyRange = result;

                                    data.specialtyRangeYN = false;

                                    if ((data.specialtyRange[0] === 'interiorFull' || data.specialtyRange[0] === 'interiorDesign') && data.spacesCategory != '3' ) {
                                        data.spaceBrandingYN = true;
                                        res.json(actionNtConcierge.getConciergeExpress("spaceBranding", req.body, ''));
                                        req.cache.set(req.body.user,JSON.stringify(data));
                                        req.cache.expire(req.body.user, 600);


                                    } else {
                                        data.spaceMeasure = true;
                                        res.json(actionNtConcierge.getConciergeExpress("spaceMeasure", req.body, ''));
                                        req.cache.set(req.body.user,JSON.stringify(data));
                                        req.cache.expire(req.body.user, 600);
                                    }

                                }

                                //공간브랜딩 선택
                            } else if (data.spaceBrandingYN === true) {
                                if (text.indexOf("이전") != -1) {
                                    res.json(actionNtConcierge.getConciergeExpress("specialtyRange", req.body, ''));
                                    data.specialtyRangeYN = true;
                                    data.spaceBrandingYN = false;

                                    req.cache.set(req.body.user,JSON.stringify(data));
                                    req.cache.expire(req.body.user, 600);
                                } else {
                                    if (text.indexOf("네") != -1) {
                                        data.spaceBranding = true;

                                    } else if(text.indexOf("아니오") != -1){
                                        data.spaceBranding = false;

                                    }else{
                                        //네/아니오 가 아닌 텍스트 입력시
                                        res.json(actionNtConcierge.getConciergeExpress("back", req.body, 'spaceBranding'));
                                        data.errCode = "spaceBranding";
                                        data.errorStatus = true;
                                        data.specialtyRangeYN = false;
                                        data.spaceBrandingYN = true;

                                        req.cache.set(req.body.user,JSON.stringify(data));
                                        req.cache.expire(req.body.user, 600);
                                        return false;

                                    }

                                    res.json(actionNtConcierge.getConciergeExpress("spaceMeasure", req.body, ''));

                                    data.spaceBrandingYN = false;
                                    data.spaceMeasure = true;

                                    req.cache.set(req.body.user,JSON.stringify(data));
                                    req.cache.expire(req.body.user, 600);
                                }

                                //면적 선택
                            } else if (data.spaceMeasure === true) {
                                if (text.indexOf("이전") != -1) {
                                    res.json(actionNtConcierge.getConciergeExpress("specialtyRange", req.body, ''));
                                    data.specialtyRangeYN = true;
                                    data.spaceMeasure = false;

                                    req.cache.set(req.body.user,JSON.stringify(data));
                                    req.cache.expire(req.body.user, 600);
                                } else {
                                    var result = actionNtConcierge.getMeasure(text);

                                    data.py = result[0];
                                    data.meter = result[1];

                                    //숫자미입력시
                                    if(result[0] === 0 && result[1] ===0){
                                        res.json(actionNtConcierge.getConciergeExpress("back", req.body, 'spaceMeasure'));
                                        data.errCode = "spaceMeasure";
                                        data.errorStatus = true;
                                        data.spaceBrandingYN = false;
                                        data.spaceMeasure = true;
                                        req.cache.set(req.body.user,JSON.stringify(data));
                                        req.cache.expire(req.body.user, 600);
                                        return false;
                                    }

                                    res.json(actionNtConcierge.getConciergeExpress("budget", req.body, ''));

                                    data.spaceMeasure = false;
                                    data.budget = true;
                                    req.cache.set(req.body.user,JSON.stringify(data));
                                    req.cache.expire(req.body.user, 600);
                                }

                                //예산선택
                            } else if (data.budget === true) {
                                if (text.indexOf("이전") != -1) {
                                    res.json(actionNtConcierge.getConciergeExpress("spaceMeasure", req.body, ''));
                                    data.spaceMeasure = true;
                                    data.budget = false;
                                    req.cache.set(req.body.user,JSON.stringify(data));
                                    req.cache.expire(req.body.user, 600);
                                } else {
                                    var result = [];
                                    var msg = text;
                                    msg = msg.trim();
                                    var pattern = /\s/g; // 공백여부

                                    if (msg.indexOf("~") != -1) {
                                        result = msg.split("~");
                                        //숫자가 아니면 에러
                                        if(result[0].match(/[0-9]/) && result[1].match(/[0-9]/)){
                                            data.budgetMin = result[0];
                                            data.budgetMax = result[1];
                                        }else{
                                            res.json(actionNtConcierge.getConciergeExpress("back", req.body, 'budget'));
                                            data.errCode = "budget";
                                            data.spaceMeasure = false;
                                            data.budget = true;
                                            req.cache.set(req.body.user,JSON.stringify(data));
                                            req.cache.expire(req.body.user, 600);
                                            return false;
                                        }

                                    } else if (msg.indexOf(",") != -1) {
                                        result = msg.split(",");

                                        //숫자가 아니면 에러
                                        if(result[0].match(/[0-9]/) && result[1].match(/[0-9]/)){
                                            data.budgetMin = result[0];
                                            data.budgetMax = result[1];
                                        }else{
                                            res.json(actionNtConcierge.getConciergeExpress("back", req.body, 'budget'));
                                            data.errCode = "budget";
                                            data.errorStatus = true;
                                            data.spaceMeasure = false;
                                            data.budget = true;
                                            req.cache.set(req.body.user,JSON.stringify(data));
                                            req.cache.expire(req.body.user, 600);
                                            return false;
                                        }

                                    } else if (msg.match(pattern)) {
                                        result = msg.split(" ");

                                        //숫자가 아니면 에러
                                        if(result[0].match(/[0-9]/) && result[1].match(/[0-9]/)){
                                            data.budgetMin = result[0];
                                            data.budgetMax = result[1];
                                        }else{
                                            res.json(actionNtConcierge.getConciergeExpress("back", req.body, 'budget'));
                                            data.errCode = "budget";
                                            data.errorStatus = true;
                                            data.spaceMeasure = false;
                                            data.budget = true;
                                            req.cache.set(req.body.user,JSON.stringify(data));
                                            req.cache.expire(req.body.user, 600);
                                            return false;
                                        }

                                    } else if (msg.match(/[0-9]/)) {
                                        data.budgetMin = msg;
                                        data.budgetMax = msg;
                                    } else {
                                        res.json(actionNtConcierge.getConciergeExpress("back", req.body, 'budget'));
                                        data.errCode = "budget";
                                        data.errorStatus = true;
                                        data.spaceMeasure = false;
                                        data.budget = true;
                                        return false;
                                    }

                                    res.json(actionNtConcierge.getConciergeExpress("styles", req.body, ''));

                                    data.budget = false;
                                    data.stylesYN = true;
                                    req.cache.set(req.body.user,JSON.stringify(data));
                                    req.cache.expire(req.body.user, 600);
                                }

                                //스타일선택
                            } else if (data.stylesYN === true) {

                                if (text.indexOf("이전") != -1) {
                                    res.json(actionNtConcierge.getConciergeExpress("budget", req.body, ''));
                                    data.budget = true;
                                    data.stylesYN = false;
                                    req.cache.set(req.body.user,JSON.stringify(data));
                                    req.cache.expire(req.body.user, 600);
                                } else {

                                    var result = actionNtConcierge.getStyles(text);

                                    //스타일이 아닌걸 입력시
                                    if (result === "-1") {
                                        res.json(actionNtConcierge.getConciergeExpress("back", req.body, 'styles'));
                                        data.errCode = "styles";
                                        data.errorStatus = true;
                                        data.budget = false;
                                        data.stylesYN = true;
                                        req.cache.set(req.body.user,JSON.stringify(data));
                                        req.cache.expire(req.body.user, 600);
                                        return false;
                                    } else {

                                        data.styles = result;

                                        var formData = {};
                                        formData.specialty = {};
                                        formData.specialty.main = "interior";
                                        formData.specialty.sub = data.specialtyRange;
                                        formData.spaces = {};
                                        formData.spaces.category = data.spacesCategory;
                                        formData.spaces.subcategory = data.spacesSubCategory;
                                        formData.spaces.space = data.spacesSpace;
                                        formData.spaceBranding = data.spaceBranding;
                                        formData.measure = {};
                                        formData.measure.meter = data.meter;
                                        formData.measure.py = data.py;
                                        formData.budget = {};
                                        formData.budget.min = data.budgetMin;
                                        formData.budget.max = data.budgetMax;
                                        formData.style = data.styles;

                                        if (!formData.specialty.main
                                            || ( !(formData.specialty.main === 'interior') && !(formData.specialty.main === 'construction'))) {
                                            res.json(actionNtConcierge.getConciergeExpress("error", req.body, 'styles'));
                                            data.errorStatus = true;
                                            data.budget = false;
                                            data.stylesYN = true;
                                            req.cache.set(req.body.user,JSON.stringify(data));
                                            req.cache.expire(req.body.user, 600);
                                            return false;
                                        }
                                        if (!formData.spaces.category || !formData.spaces.space || !formData.spaces.subcategory) {
                                            res.json(actionNtConcierge.getConciergeExpress("error", req.body, 'styles'));
                                            data.errorStatus = true;
                                            data.budget = false;
                                            data.stylesYN = true;
                                            req.cache.set(req.body.user,JSON.stringify(data));
                                            req.cache.expire(req.body.user, 600);
                                            return false;
                                        }
                                        if (!formData.specialty.sub.length) {
                                            res.json(actionNtConcierge.getConciergeExpress("error", req.body, 'styles'));
                                            data.errorStatus = true;
                                            data.budget = false;
                                            data.stylesYN = true;
                                            req.cache.set(req.body.user,JSON.stringify(data));
                                            req.cache.expire(req.body.user, 600);
                                            return false;
                                        }
                                        if ((!formData.measure.meter) || (!formData.measure.py)
                                            || !(formData.measure.meter > -1)) {
                                            res.json(actionNtConcierge.getConciergeExpress("error", req.body, 'styles'));
                                            data.errorStatus = true;
                                            data.budget = false;
                                            data.stylesYN = true;
                                            req.cache.set(req.body.user,JSON.stringify(data));
                                            req.cache.expire(req.body.user, 600);
                                            return false;
                                        }
                                        if ((!formData.budget.min) || (!formData.budget.max)
                                            || !(formData.budget.min > -1) || !(formData.budget.max > -1)
                                            || (parseInt(formData.budget.min) > parseInt(formData.budget.max))) {

                                            res.json(actionNtConcierge.getConciergeExpress("error", req.body, 'styles'));
                                            data.errorStatus = true;
                                            data.budget = false;
                                            data.stylesYN = true;
                                            req.cache.set(req.body.user,JSON.stringify(data));
                                            req.cache.expire(req.body.user, 600);
                                            return false;
                                        }
                                        if (!formData.style) {
                                            res.json(actionNtConcierge.getConciergeExpress("error", req.body, 'styles'));
                                            data.errorStatus = true;
                                            data.budget = false;
                                            data.stylesYN = true;
                                            req.cache.set(req.body.user,JSON.stringify(data));
                                            req.cache.expire(req.body.user, 600);
                                            return false;
                                        }


                                        data.stylesYN = false;
                                        data.concierge = false;

                                        formData.status = "NAVER_TALK";
                                        var experts = null;
                                        var message = -1;
                                        var options = {
                                            url: 'https://www.interiorbrothers.com/api/doConcierge',
                                            method: 'POST',
                                            json: formData
                                        };

                                        requestSender(options, function (error, response, body) {
                                            if (error) {

                                                return console.error('experts failed:', error);
                                            }


                                            experts = body.experts;
                                            message = body.experts.message || -1;


                                        })


                                        setTimeout(function () {
                                            req.cache.set(req.body.user,JSON.stringify(data));
                                            req.cache.expire(req.body.user, 600);
                                            
                                            if(message !== -1){
                                                res.json(actionNtConcierge.getConciergeExpress("none_expert", req.body,''));
                                            }else{

                                                res.json(actionNtConcierge.getConciergeExpress("experts", req.body, experts));
                                            }
                                        }, 2000);

                                        // 아웃바운드 API 결과 안내
                                        var headers = {
                                            'Content-type' : 'application/json',
                                            'Authorization': auth_code
                                        };

                                        var options2 = {
                                            url: 'https://gw.talk.naver.com/chatbot/v1/event',
                                            method: 'POST',
                                            headers: headers,
                                            json: actionNtConcierge.getOutBoundExpress("how", req.body, '')
                                        };

                                        setTimeout(function () {
                                            if(message == -1) {
                                                requestSender(options2, function (error, response, body) {
                                                    if (error) {
                                                        return console.error('resultMsg failed:', error);
                                                    }

                                                })
                                            }
                                        }, 1000);

                                    }
                                }

                            } else {
                                res.json(actionNtConcierge.getConciergeExpress("what", req.body, ''));

                            }

                        } else {
                            res.json(actionNtConcierge.getConciergeExpress("what", req.body, ''));

                        }
                    }//not err

                    }

                } else {
                    res.json(defaultResponse);
                }
                break;
            case 'open' :
                switch(req.body.options.inflow) {
                    case 'list' :
                        break;
                    case 'none' :
                        welcome();
                        break;
                    default:
                        welcome();

                        break;

                }
                break;
            case 'friend' :
                if(req.body.options.set == 'on') {
                    textResponse.request.textContent.text = '인집사: 친구가되어주셔서 감사합니다.';
                    res.json(textResponse);
                } else if(req.body.options.set == 'off') {
                    textResponse.request.textContent.text = '인집사: 다음번에 다시 꼭 친구추가 부탁드려요.';
                    res.json(textResponse);
                } else {
                    res.json(defaultResponse);
                }
                break;
            default:
                res.sendStatus(200);
        }
    });


    function clearData(){

        data.photo_page = 1;
        data.concierge = false;
        data.spaces1 = false;
        data.spaces2 = false;
        data.spaces3 = false;
        data.specialtyRangeYN = false;
        data.spaceBrandingYN = false;
        data.spaceMeasure = false;
        data.budget = false;
        data.stylesYN = false;
        data.errorStatus = false;
        //컨시어지 파라미터
        data.spacesCategory = '';
        data.spacesSubCategory = '';
        data.spacesSpace = '';
        data.specialtyRange = '';
        data.spaceBranding = '';
        data.py = '';
        data.meter = '';
        data.budgetMin = '';
        data.budgetMax = '';
        data.styles = '';
        data.history = '';
        data.errCode = "";
        req.cache.set(req.body.user,JSON.stringify(data));
        req.cache.expire(req.body.user, 600);

    }

    function welcome(){
        clearData();

        // 아웃바운드 API 결과 안내
        var headers = {
            'Content-type' : 'application/json',
            'Authorization': auth_code
        };

        var options2 = {
            url: 'https://gw.talk.naver.com/chatbot/v1/event',
            method: 'POST',
            headers: headers,
            json: actionNtConcierge.getOutBoundExpress("hello", req.body, '')
        };
        setTimeout(function () {
            requestSender(options2, function (error, response, body) {
                if (error) {
                    return console.error('resultMsg failed:', error);
                }

            })
        }, 500);
        setTimeout(function () {

            res.json(actionNtConcierge.getConciergeExpress("welcome", req.body, ''));

        }, 1000);

    }

});


/*
 ////////////////////////////////////////////////////
 END 네이버 톡톡
 ///////////////////////////////////////////////////
 */







/*
////////////////////////////////////////////////////
 라인 챗봇 부분
 ///////////////////////////////////////////////////
 */


app.get('/hook', function (reqeust, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<h1>chatbot - skwjdgn@naver.com<h1>');
});

var sess;
var i = 0;
app.post('/hook', function (request, response) {
    if(sess === null || sess === '' || sess === undefined){
        sess = request.session;
        sess.username = [];
        sess.username[i] = null;
        sess.concierge = [];
        sess.concierge[i] = false;
        sess.spaces1 = [];
        sess.spaces1[i] = false;
        sess.spaces2 = [];
        sess.spaces2[i] = false;
        sess.spaces3 = [];
        sess.spaces3[i] = false;
        sess.specialtyRangeYN = [];
        sess.specialtyRangeYN[i] = false;
        sess.spaceBrandingYN = [];
        sess.spaceBrandingYN[i] = false;
        sess.spaceMeasure = [];
        sess.spaceMeasure[i] = false;
        sess.budget = [];
        sess.budget[i] = false;
        sess.stylesYN = [];
        sess.stylesYN[i] = false;

        sess.estimate_Type = "interior";
        sess.spacesCategory = [];
        sess.spacesSubCategory = [];
        sess.spacesSpace = [];
        sess.specialtyRange = [];
        sess.spaceBranding = [];
        sess.py = [];
        sess.meter = [];
        sess.budgetMin = [];
        sess.budgetMax = [];
        sess.styles = [];


    }else{

    }

    var eventObj = request.body.events[0];
    var source = eventObj.source;
    var message = eventObj.message;


    // request log
    console.log('======================', new Date() ,'======================');
    console.log('[request]', request.body);
    console.log('[request source] ', eventObj.source);
    console.log('[request message]', eventObj.message);

    if(message.type == "text" && message.text.indexOf("인집사") != -1){

        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionBasic.getBasicExpress());
    }
    else if(message.type == "text" && message.text.indexOf("인집사") === -1){

        if(message.text.indexOf("컨시어지") != -1){
            //세션새로 생성
            if(sess.username[i] === null || sess.username[i] === '' || sess.username[i] === undefined){
                sess.username[i] = eventObj.source.userId;
            }else{

                if(eventObj.source.userId !== sess.username[i]){
                    for(var j = 0; j<sess.username.length; j++){
                        //세션 변경
                        if(sess.username[j] ===  eventObj.source.userId) {
                            //기존 세션
                            i = j;
                            break;
                        }else{
                            //바뀌는 세션
                            sess.username[i+1] =  eventObj.source.userId;
                            i++;
                            break;
                        }
                    }
                }else{

                }
               
            }
            sess.concierge[i] = true;
            sess.spaces1[i] = true;
            reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("spaces1",''));
        }else{

            if(sess.concierge[i] === true){
                if(eventObj.source.userId !== sess.username[i]){
                    for(var j = 0; j<sess.username.length; j++){
                        //세션 변경
                        if(sess.username[j] ===  eventObj.source.userId) {
                            //기존 세션
                            i = j;
                            break;
                        }
                    }
                }else{

                }

                if(sess.spaces1[i] === true){
                    if(message.text.indexOf("상업공간") != -1){
                        sess.spacesCategory[i]='1';

                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("spaces2",'1'));

                    } else if(message.text.indexOf("업무공간") != -1){
                        sess.spacesCategory[i]='2';

                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("spaces2",'2'));

                    }else if(message.text.indexOf("주거공간") != -1){
                        sess.spacesCategory[i]='3';

                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("spaces2",'3'));

                    }else if(message.text.indexOf("문화/종교공간") != -1){
                        sess.spacesCategory[i]='4';

                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("spaces2",'4'));

                    }else if(message.text.indexOf("기타공간") != -1){
                        sess.spacesCategory[i]='5';

                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("spaces2",'5'));

                    }else{
                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("spaces1",''));
                    }

                    sess.spaces1[i] = false;
                    sess.spaces2[i] = true;

                }else if(sess.spaces2[i] === true) {

                    var result = actionConcierge.getSpaces2(sess.spacesCategory[i],message.text);

                    sess.spacesSubCategory[i] = result;
                    var params = [];
                    params[0] = sess.spacesCategory[i];
                    params[1] = result;
                    reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("spaces3",params));

                    sess.spaces2[i] = false;
                    sess.spaces3[i] = true;

                }else if(sess.spaces3[i] === true){
                    var result = actionConcierge.getSpaces3(sess.spacesCategory[i],sess.spacesSubCategory[i],message.text);

                    sess.spacesSpace[i] = result;

                    reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("specialtyRange",''));
                    sess.spaces3[i] = false;
                    sess.specialtyRangeYN[i] = true;
                }else if(sess.specialtyRangeYN[i] === true){

                    var result = actionConcierge.getSpecialtyRange(message.text);

                    sess.specialtyRange[i] = result;

                    sess.specialtyRangeYN[i] = false;

                    if(sess.specialtyRange[i][0] === 'interiorFull' ||  sess.specialtyRange[i][0] === 'interiorDesign'){
                        sess.spaceBrandingYN[i] = true;
                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("spaceBranding",''));
                    }else{
                        sess.spaceMeasure[i] = true;
                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("spaceMeasure",''));

                    }

                }else if(sess.spaceBrandingYN[i] === true){

                    if(message.text.indexOf("네") != -1){
                        sess.spaceBranding[i] = true;
                    }else{
                        sess.spaceBranding[i] = false;
                    }


                    reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("spaceMeasure",''));
                    sess.spaceBrandingYN[i] = false;
                    sess.spaceMeasure[i] = true;

                }else if(sess.spaceMeasure[i] === true){

                    var result = actionConcierge.getMeasure(message.text);

                    sess.py[i] = result[0];
                    sess.meter[i] = result[1];

                    reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("budget",''));
                    sess.spaceMeasure[i] = false;
                    sess.budget[i] = true;

                }else if(sess.budget[i] === true){

                    var result = [];
                    var msg = message.text;
                    msg = msg.trim();
                    var pattern = /\s/g; // 공백여부

                    if(msg.indexOf("~") != -1){
                        result = msg.split("~");
                        sess.budgetMin[i] = result[0];
                        sess.budgetMax[i] = result[1];
                    }else if(msg.match(pattern)){
                        result = msg.split(" ");
                        sess.budgetMin[i] = result[0];
                        sess.budgetMax[i] = result[1];
                    }else if(msg.match(/[0-9]/)){
                        sess.budgetMin[i] = msg;
                        sess.budgetMax[i] = msg;
                    }else{
                        sess.budgetMin[i] = 0;
                        sess.budgetMax[i] = 100000;
                    }

                    reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("styles",''));
                    sess.budget[i] = false;
                    sess.stylesYN[i] = true;

                }else if(sess.stylesYN[i] === true){

                    var result = actionConcierge.getStyles(message.text);

                    sess.styles[i] = result;

                    var formData = {};
                        formData.specialty = {};
                        formData.specialty.main = "interior";
                        formData.specialty.sub = sess.specialtyRange[i];
                        formData.spaces = {};
                        formData.spaces.category = sess.spacesCategory[i];
                        formData.spaces.subcategory = sess.spacesSubCategory[i];
                        formData.spaces.space = sess.spacesSpace[i];
                        formData.spaceBranding = sess.spaceBranding[i];
                        formData.measure = {};
                        formData.measure.meter = sess.meter[i];
                        formData.measure.py = sess.py[i];
                        formData.budget = {};
                        formData.budget.min = sess.budgetMin[i];
                        formData.budget.max = sess.budgetMax[i];
                        formData.style = sess.styles[i];

                    sess.stylesYN[i] = false;
                    sess.concierge[i] = false;

                    if ( !formData.specialty.main
                        || ( !(formData.specialty.main === 'interior') && !(formData.specialty.main === 'construction')) ) {
                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("error",''));
                        return false;
                    }
                    if ( !formData.spaces.category || !formData.spaces.space || !formData.spaces.subcategory) {
                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("error",''));
                        return false;
                    }
                    if ( !formData.specialty.sub.length) {
                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("error",''));
                        return false;
                    }
                    if ( (!formData.measure.meter) || (!formData.measure.py)
                        || !(formData.measure.meter > -1) ) {
                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("error",''));
                        return false;
                    }
                    if ( (!formData.budget.min) || (!formData.budget.max)
                        || !(formData.budget.min > -1) || !(formData.budget.max > -1)
                        || (parseInt(formData.budget.min) > parseInt(formData.budget.max)) ) {
                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("error",''));
                        return false;
                    }
                    if ( !formData.style) {
                        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionConcierge.getConciergeExpress("error",''));
                        return false;
                    }
                    
                    reply.concierge(formData,eventObj);

                }else{
                    reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionBasic.getBasicExpress());
                }

            }else{
                reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionBasic.getBasicExpress());
            }


        }

    }

    response.sendStatus(200);
});
//


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
