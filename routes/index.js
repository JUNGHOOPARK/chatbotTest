var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<h3>Welcome</h3>');
    res.write('<a href="/login">Please login</a>');
    res.end();
});


router.get('/login', function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h3>Login</h3>');
    res.write('<form method="POST" action="/login">');
    res.write('<label name="userId">UserId : </label>')
    res.write('<input type="text" name="userId"><br/>');
    res.write('<label name="password">Password : </label>')
    res.write('<input type="password" name="password"><br/>');
    res.write('<input type="submit" name="login" value="Login">');
    res.write('</form>');
    res.end();
});

router.post('/login', function (req, res){
    var userId = req.param("userId");
    var password = req.param("password")

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Thank you, '+userId+', you are now logged in.');
    res.write('<p><a href="/"> back home</a>');
    res.end();
});



router.get('/hook', function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<h1>Momo - phg2491@naver.com<h1>');
});

router.post('/hook', function (req, res) {

    var eventObj = req.body.events[0];
    var source = eventObj.source;
    var message = eventObj.message;

    // req log
    console.log('======================', new Date() ,'======================');
    console.log('[req]', req.body);
    console.log('[req source] ', eventObj.source);
    console.log('[req message]', eventObj.message);

    if(message.type == "text" && message.text.indexOf("@momo") != -1){
        reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionBasic.getBasicExpress());
    }
    else if(message.type == "text" && /^@.+/g.test(message.text)){
        var cmd = message.text.split('@')[1];
        console.log('[command]', cmd);

        if(typeof cmd !== "undefined" && cmd != ""){
            if(cmd == "h" || cmd == "help"){
                reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionHelp.getHelpExpress());
            }
            else if(/^r\[.+\]/g.test(cmd)){
                reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionEnjoy.getRandomExpress(cmd));
            }
            else if(cmd == "food" || cmd == "밥집"){
                reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionEnjoy.getFoodExpress());
            }
            else if(cmd == "contact" || cmd == "ct"){
                reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionHelp.getContactExpress());
            }
            else if(/^reserve/g.test(cmd) || /^예약/g.test(cmd)){

                var receiverId = null;
                var dropCmdMessages = cmd.split('reserve ')[1];

                switch (source.type){
                    case "user" : receiverId = source.userId; break;
                    case "group" : receiverId = source.groupId; break;
                    case "room" : receiverId = source.roomId; break;
                }

                if(dropCmdMessages.indexOf('-l') != -1){
                    reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionScheduler.getReservedList(receiverId));
                }
                else if(dropCmdMessages.indexOf('-r') != -1){
                    var scheduledId = dropCmdMessages.replace('-r', '').trim();
                    var removeItemInfo = actionScheduler.removeReservedItem(receiverId, scheduledId);
                    reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionScheduler.gerRemoveMessage(removeItemInfo))
                }
                else{
                    var onceFlag = true;
                    var data = actionScheduler.reserveParser(dropCmdMessages);

                    if(dropCmdMessages.indexOf('-once') == -1){
                        onceFlag = false;
                    }

                    if(dropCmdMessages.indexOf('-once') == -1){
                        onceFlag = false;
                    }

                    actionScheduler.setReserve(config.CHANNEL_ACCESS_TOKEN, receiverId, data.time, data.message, onceFlag);
                    reply.send(config.CHANNEL_ACCESS_TOKEN, eventObj.replyToken, actionScheduler.getReservedMessage(data.time, data.message, !onceFlag))
                }
            }

        }
    }

    res.sendStatus(200);
});


module.exports = router;
