var Chatbot = require('./Chatbot');
var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);
rl.setPrompt("You ==> ");
rl.prompt();
rl.on('line', function (message) {
    if (message == "exit") {
        console.log("Bot ==> Goodbye!");
        rl.close();
    }
    else {
        console.log("Bot ==> " + Chatbot.ChatbotReply(message));
         rl.prompt();
    }
}).on('close', function () {

    console.log("Chat ended.");
    process.exit(0);
});