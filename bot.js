var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexBan = /^\/ban/
      botRegexAd=/^\/advance/;botRegexShrug = /^\/shrug/; botRegexSC = /^\/SDL/i;
      botRegexP = /^\/PDL/i;  botRegexDg = /^\/doge/i; botRegexCjw = /^\/JEW/; botRegexJw = /^\/Jew/;
      botRegexJew = /^\/jew/; botRegexJoo = /^\/joo/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("");
    this.res.end();
  }
  else if(request.text && botRegexBan.test(request.text)) {
    this.res.writeHead(200);
    postMessage("");
    this.res.end();
  } 
  else if(request.text && botRegexShrug.test(request.text)) {
    this.res.writeHead(200);
    postMessage("");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("");
    this.res.end();
  } 
  else if(request.text && botRegexDg.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.groupme.com/307x362.gif.357292f527ad49a38da4e13201fbfa77.large");
    this.res.end();
  } 
  else if(request.text && botRegexCjw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.groupme.com/307x362.gif.357292f527ad49a38da4e13201fbfa77.large");
    this.res.end();
  }
  else if(request.text && botRegexJw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.groupme.com/307x362.gif.357292f527ad49a38da4e13201fbfa77.large");
    this.res.end();
  }
  else if(request.text && botRegexJew.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.groupme.com/307x362.gif.357292f527ad49a38da4e13201fbfa77.large");
    this.res.end();
  }
  else if(request.text && botRegexJoo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.groupme.com/720x526.jpeg.87c35e3533ee4c8a99d49a3cd8390c29.large");
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
