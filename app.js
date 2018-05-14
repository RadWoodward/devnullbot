const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token

client.on('ready',() => {
    console.log('logon complete \ninitialization success');
    client.user.setStatus("online");
})

var prefix = "::"
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content === prefix + 'ping') {
        // returns latency round-trip
        message.channel.send(`Pong! \`${client.ping} ms\``);
    }
    if (message.content === prefix + 'help') {
        // TODO: help menu
        message.channel.send(`
\`\`\`
//general commands
::help - Command Help
::uptime - returns current uptime
::ping - returns current latency (round-trip)

//meme commands
::ayy - lmao
::navyseal - excuse me, sir

//maintenace commands (requires maintenance role)
::restart - restarts bot
::kill - pls no
\`\`\`
        `);
    }

    if (message.content === prefix + 'uptime') { 
        // returns uptime in ms as well as the date last ready
        message.channel.send(`\`running for ${client.uptime} ms since ${client.readyAt}.\``); 
    }
//    if (message.content === prefix + 'dark') { //this code is for adding roles. left over from etherbot, here in case i need it again
//        if(message.member.roles.has("444969544260517899")) { //dark
//            message.channel.send('You already possess that role.');
//            return;
//          } 
//          if(message.member.roles.has("444969470860066819")) { //light
//            message.channel.send('You cannot be both Dark and Light. See Commandment 6.');
//          } 
//          else {
//            const guildMember = message.member;
//            guildMember.addRole("444969544260517899"); //dark
//            guildMember.addRole("445301842373640192");//general
//            message.channel.send('Role added. You have been removed from the Visitor role.');
//            guildMember.removeRole("444993015707205646");
//          }
//    }
//===MAINTENANCE COMMANDS===\\
    if (message.content === prefix + 'restart') { 
        if(message.member.roles.has("445374103650828298")) { //checks if user has EtherBot Support role, if yes
            message.channel.send('Restarting. This may take several seconds.')
            client.user.setStatus("invisible");
            client.destroy();
            client.login(token);
            client.user.setStatus("online");
            return;
        }
        else {
            message.channel.send('You do not have permission to use this command.');
   }
}
    if (message.content === prefix + 'kill') { 
        if(message.member.roles.has("445374103650828298")) { //checks if user has EtherBot Support role, if yes
            message.channel.send('*dies* :skull:')
            client.user.setStatus("invisible");
            client.destroy();
            return;
       }
       else {
           message.channel.send('You do not have permission to use this command.');
       }
    }
    // ===MEME COMMANDS=== \\
    if (message.content === prefix + 'ayy') { 
        // ayy lmao
        message.channel.send('lmao :alien:'); 
    }
    if (message.content === prefix + 'navyseal') { 
        // wtfdyjstmylb
        message.channel.send(`
What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.
        `); 
    }
});
client.on('guildMemberAdd', function(member){

});
client.login(token);