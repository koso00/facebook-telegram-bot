const login = require("facebook-chat-api");
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
var telegram = require('telegram-bot-api');
var api = new telegram({
	token: config.token,
	updates: {
		enabled: true,
		get_interval: 1000
	}
});

console.log(config.user);
console.log(config.pass)
login({email: config.user, password: config.pass }, (err, fb) => {
  fb.setOptions({logLevel : "warn"});
    api.on("message",function(message){
      switch(message.text){
        case "/list":
        fb.getThreadList(0, 10, "inbox", function(err ,arr){
          t = "";
          fb.getUserInfo(arr[0].participants[0], (er, ret) => {
            console.log("+++++++++++++++++++++++++++++++++++++++++++")
          console.log(ret)
          console.log("+++++++++++++++++++++++++++++++++++++++++++")
        })

    })
        break;
        default: break;
      }
    })

});
