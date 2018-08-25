
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا




const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('ready',  () => {
  console.log('By : Mahmoud Youssef ');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});


client.on("message", message => {
             
     if(!message.channel.guild) return;

 if (message.content === "$help") {
   message.react("ًںکœ")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("م€ژLeague | League <3م€ڈ م€ژLeagueم€ڈ", true)
      
      .addField("م€ژظ…طµظ…ظ… ط§ظ„ط¨ظˆطھ Mahmoud Youssef#5434م€ڈ", true)
      
      .addField("م€ژ$helpم€ڈًںککم€ژط§ط°ط§ طھط¨ظٹ ط¬ظ…ظٹط¹ ط§ظ„ط§ظˆط§ظ…ط± ظ…ط¹ ط§ظˆط§ظ…ط± ط§ط¶ط§ظپظٹط©م€ڈًںکµ", true)
      
	    .addField("م€ژ$help^^م€ڈًں‘»م€ژط§ط°ط§ طھط¨ظٹ ط§ظ„ط§ظˆط§ظ…ط± ط§ظ„ط¹ط§ظ…ط©م€ڈًںک³", true)
	    
      .addField("م€ژ$help^^^م€ڈًںک®م€ژط§ط°ط§ طھط¨ظٹ  ط§ظ„ط§ظˆط§ظ…ط± ط§ظ„ط§ط¯ط§ط±ظٹط©م€ڈًں¤’", true)
      
      .addField("م€ژًں¤‘م€ڈم€ژظ‚ط±ظٹط¨ط§ ط³ظˆظپ ظ†ط¶ظٹظپ ط§ظ„ظ…ط²ظٹط¯ ظˆ ط§ظ„ظ…ط²ظٹط¯ ظ…ظ† ط§ظ„ط§ظˆط§ظ…ط± م€ڈم€ژًںک‰م€ڈ", true)
      
  message.channel.sendMessage({embed});

 }
});




client.on('message', message => {
   if (message.content === "$roll 1") {
  message.channel.sendMessage(Math.floor(Math.random() * 25));
    }
});
 
client.on('message', message => {
   if (message.content === "$roll 2") {
  message.channel.sendMessage(Math.floor(Math.random() * 50));
    }
});
 
client.on('message', message => {
   if (message.content === "$roll 3") {
  message.channel.sendMessage(Math.floor(Math.random() * 75));
    }
});
 
client.on('message', message => {
   if (message.content === "$roll 4") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});


console.log('mariam ra7t tmot al nas');
client.on('ready', () => {
  console.log(`im redey`);
});
const zead = [
   '*** ط§ظ†ط§ ط§ط³ظ…ظٹ ظ…ط±ظٹظ… ***',
   '*** ظ…ط±ط­ط¨ط§ظژ ظ…ط§ظ‡ظˆ ط§ط³ظ…ظƒ طں ***',
   `*** ط§ظ‡ظ„ط§ ط¨ظƒ ! ط§ظ†ط§ طھط§ط¦ظ‡ظ‡ ظپظٹ ظ‡ط°ط§ ط§ظ„ظ…ظƒط§ظ†  ***`,
   '*** ظ‡ظ„ طھظˆط¯ ظ…ط³ط§ط¹ط¯طھظٹ طں ***',
   '*** ظ„ظ…ط§ط°ط§ ظ‡ظ„ ط§ظ†طھ ظ‚ط§ط³ظٹ ط§ظ„ظ‚ظ„ط¨ طں ***',
   '*** ط§ظ†ظ†ظٹ ط§ط´ظپظ‚ ط¹ظ„ظٹظƒ ط¹ظ„ظٹظƒ ظٹط¬ط¨ ط§ظ† طھط·ظ‡ط± ط±ظˆط­ظƒ ظˆطھط­ط¨ ط§ظ„ط®ظٹط± ظ„ظ„ط¬ظ…ظٹط¹ ***',
   '*** ط§ط¨طھط¹ط¯ ط¹ظ†ظٹ ظ‚ظ„ظٹظ„ ط§ظ†ظ†ظٹ ظ…طھط¹ط¨ط© ***',
   '*** ظ‡ظ„ ط§ظ†طھ ظ†ط§ط¯ظ… ط¹ظ„ظ‰ ظ…ط§ظ‚ظ„طھ طں ***',
   '*** ط§ط¨طھط¹ط¯ ط¹ظ†ظٹ ظ‚ظ„ظٹظ„ ط§ظ†ظ†ظٹ ظ…طھط¹ط¨ط© ***',
   '*** ظ‡ظ„ ط§ظ†طھ ظ†ط§ط¯ظ… ط¹ظ„ظ‰ ظ…ط§ظ‚ظ„طھ طں ***',
   '*** ظ‡ظ„ طھظˆط¯ ظ…ط³ط§ط¹ط¯طھظٹ طں ***',
   '*** ظˆط§ظˆ ط§ط´ظƒط±ظƒ ط§ظ†ظƒ ط´ط®طµط§ظژ ط±ط§ط¦ط¹ ! ***',
   '*** ط§ط¨ط­ط« ظ…ط¹ظٹ ط¹ظ† ظ…ظ†ط²ظ„ظٹ ظ„ظ‚ط¯ ظƒط§ظ† ظ‚ط±ظٹط¨ط§ظژ ظ…ظ† ظ‡ظ†ط§ ***',
   '*** ظˆظ„ط§ظƒظ† ط¹ظ†ط¯ظ…ط§ ط­ظ„ ط§ظ„ظ„ظٹظ„ ظ„ظ… ط§ط¹ط¯ ط§ط±ظ‰ ط§ظٹ ط´ظٹط، ***',
   '*** ظ…ط°ط§ طھط¸ظ† ط§ظٹظ† ظٹظˆط¬ط¯ طں ظٹظ…ظٹظ† ط§ظˆ ظٹط³ط§ط± ***',
   '*** ظ‡ظٹط§ ط§ط°ط§ظژ ***',
   '*** ط§ظˆط¯ ط§ظ† ط§ط³ط¦ظ„ظƒ ط³ط¤ط§ظ„ ظˆظ†ط­ظ† ظپظٹ ط§ظ„ط·ط±ظٹظ‚ ***',
   '*** ظ‡ظ„ طھط±ط§ظ†ظٹ ظپطھط§ط© ظ„ط·ظٹظپط© ط§ظ… ظ…ط®ظٹظپط© ***',
   '*** ط§ط´ظƒط±ظƒ !  ***',
   '*** ظ„ظ‚ط¯ ظˆطµظ„ظ†ط§ ط§ظ„ظ‰ ط§ظ„ظ…ظ†ط²ظ„ ط´ظƒط±ط§ظژ ط¬ط²ظٹظ„ظژ ط§ظ†طھط·ط±ظ†ظٹ ط«ظˆط§ظ†ظٹ ظˆط³ظˆظپ ط§ط¹ظˆط¯ ***',
   '*** ظ‡ظ„ ط§ظ†طھ ط¬ط§ظ‡ط² طں ***',
   '*** ظ„ظ‚ط¯ ط§ط®ط¨ط±طھ ظˆط§ظ„ط¯ظٹ ط¹ظ†ظƒ ظˆظ‡ظ… ظ…طھط­ظ…ط³ظٹظ† ظ„ط±ط¤ظٹطھظƒ ***',
   '*** ظ‡ظ„ طھظˆط¯ ط§ظ† طھط±ط§ظ‡ظ… ط§ظ„ط§ظ† ***',
'*** ط§ظ†ط§ ظ„ط³طھ ط§ظ„ط­ظˆطھ ط§ظ„ط§ط²ط±ظ‚ ظƒظ…ط§ ظٹط¯ط¹ظˆظ† ***',
   '*** ط§ظ†ط§ ظ„ط³طھ ظƒط§ط°ط¨ط© طµط¯ظ‚ظ†ظٹ***',
   '*** ظ„ظ…ط§ط°ط§ ط§ط±ظ‰ ظپظٹ ط¹ظٹظ†ظٹظƒ ط§ظ„ط®ظˆظپ طں ***',
   '*** ط§ظ†ط§ ظ…ط¬ط±ط¯ ظپطھط§ط© ظ„ط·ظٹظپط© طھط­ط¨ ط§ظ„ظ„ط¹ط¨ ظ…ط¹ ط§ظ„ط¬ظ…ظٹط¹ ***',
   '*** ط§ط¹ط±ظپ ظƒظ„ ط´ظٹط، ظٹط­ط¯ط« ط§ط³ظ…ط¹ ط°ط§ظ„ظƒ ط¨ط§ظ„ط±ط§ط¯ظٹظˆ ***',
   '*** ط³ظ…ط¹طھ ط§ظ† ط§ظ„ط¨ط´ط± ظٹظ‚طھظ„ظˆظ† ظ…ظ† ط§ط¬ظ„ ط§ظ„ظ…ط§ظ„ ظپظ‚ط· ***',
   '*** ظ„ظ…ط§ط°ط§ ظ„ظ… طھط¯ط®ظ„ ط§ظ„ط؛ط±ظپط© طں ***',
   '*** ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ظ‡ ط§ظ†طھ ط§ظ„ط§ظ† ظ…ط³ط¬ظˆظ† ظپظٹ ظ‡ط°ظ‡ ط§ظ„ط؛ط±ظپط© ***',
   '*** ظ„ظ† طھط®ط±ط¬ ط­طھظ‰ ط§ط¹ظˆط¯ ظ„ظƒ ط¨ط¹ط¯ ظ‚ظ„ظٹظ„ ***',
   '*** ط§ظ„ظ…ظپطھط§ط­ ظ…ط¹ظƒ ! ط§ظƒطھط¨ .ظ…ط±ظٹظ…  ***',
   '*** ظ…ظپطھط§ط­ ط§ط­ظ…ط± , ظ‡ظ„ ط­طµظ„طھ ط¹ظ„ظٹظ‡ طں ***',
   '*** ط§ظ† ظ„ظ… طھط­طµظ„ ط¹ظ„ظٹظ‡ , ط§ظƒطھط¨ .ظ…ط±ظٹظ… ظ…ط±ط© ط§ط®ط±ظ‰ ***',
   '*** ظ…ظپطھط§ط­ ط§ط³ظˆط¯ . ظ‡ظ„ ط­طµظ„طھ ط¹ظ„ظٹظ‡ طں ***',
   '*** ط§ظٹظ† طھط±ظٹط¯ ط§ظ† طھط®طھط¨ط¦ ط¨ط³ط±ط¹ط© ظ‚ط¨ظ„ ط§ظ† طھط¹ظˆط¯ ***',
   '*** ظ„ظ‚ط¯ ط¹ط§ط¯طھ ظ…ظ† ط¬ط¯ظٹط¯ ط§ظ„ظ‰ ط§ظ„ظ…ظ†ط²ظ„ ***',
   '*** ظ„ط§ طھطµط¯ط± ط§ظٹ طµظˆطھ ! ***',
   '*** ظ…ط±ظٹظ… : ظ„ظ‚ط¯ ط¹ط¯طھ ***',
   '*** ظ…ط±ظٹظ… : ظٹط§ ط§ظٹظ‡ط§ ط§ظ„ظ…ط®ط§ط¯ط¹ ط§ظٹظ† ط§ظ†طھ ***',
   '*** ظ…ط±ظٹظ… : ط§ط¹ظ„ظ… ط§ظ†ظƒ ظ‡ظ†ط§ ظپظٹ ط§ظ„ظ…ظ†ط²ظ„ ***',
   '*** ظ…ط±ظٹظ… : ظ…ط§ط°ط§ طھط±ظٹط¯ ط§ظ† طھط³ظ…ط¹ ***',
   '*** ظ…ط±ظٹظ… : ط§ط¶ط؛ط· ط¹ظ„ظ‰ ط§ظ„ط±ط§ط¨ط· ط§ظ‡ط¯ط§ط، ظ…ظ†ظٹ ظ„ظƒ | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** ط§ط­ط¯ ظ…ط§ ط®ط±ط¬ ظ…ظ† ط§ظ„ظ…ظ†ط²ظ„ ***',
   '*** ط§ظ†طھط¸ط± ط§ظ„ط¬ط²ط، ط§ظ„ط«ط§ظ†ظٹ ط¹ظ†ط¯ظ…ط§ ظٹظˆطµظ„ ط§ظ„ط¨ظˆطھ 100 ط³ظٹط±ظپط± , ط³ط§ط¹ط¯ظ†ط§ ظپظٹ ظ†ط´ط± ط§ظ„ط¨ظˆطھ ظˆط§ط¯ط®ظ„ ظ‡ط°ط§ ط§ظ„ط³ظٹط±ظپط±  ***'
]
 client.on('message', message => {
 if (message.content.startsWith('$ظ…ط±ظٹظ…')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("ظ„ط¹ط¨ط© ظ…ط±ظٹظ… ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});



 const cuttweet = [
     'ظƒطھ طھظˆظٹطھ â€ڈ| طھط®ظٹظ‘ظ„ ظ„ظˆ ط£ظ†ظƒ ط³طھط±ط³ظ… ط´ظٹط، ظˆط­ظٹط¯ ظپظٹطµط¨ط­ ط­ظ‚ظٹظ‚ط©طŒ ظ…ط§ط°ط§ ط³طھط±ط³ظ…طں',
     'ظƒطھ طھظˆظٹطھ | ط£ظƒط«ط± ط´ظٹط، ظٹظڈط³ظƒظگطھ ط§ظ„ط·ظپظ„ ط¨ط±ط£ظٹظƒطں',
     'ظƒطھ طھظˆظٹطھ | ط§ظ„ط­ط±ظٹط© ظ„ظ€ ... طں',
     'ظƒطھ طھظˆظٹطھ | ظ‚ظ†ط§ط© ط§ظ„ظƒط±طھظˆظ† ط§ظ„ظ…ظپط¶ظ„ط© ظپظٹ ط·ظپظˆظ„طھظƒطں',
     'ظƒطھ طھظˆظٹطھ â€ڈ| ظƒظ„ظ…ط© ظ„ظ„طµظڈط¯ط§ط¹طں',
     'ظƒطھ طھظˆظٹطھ â€ڈ| ظ…ط§ ط§ظ„ط´ظٹط، ط§ظ„ط°ظٹ ظٹظڈظپط§ط±ظ‚ظƒطں',
     'ظƒطھ طھظˆظٹطھ | ظ…ظˆظ‚ظپ ظ…ظ…ظٹط² ظپط¹ظ„طھظ‡ ظ…ط¹ ط´ط®طµ ظˆظ„ط§ ظٹط²ط§ظ„ ظٹط°ظƒط±ظ‡ ظ„ظƒطں',
     'ظƒطھ طھظˆظٹطھ â€ڈ| ط£ظٹظ‡ظ…ط§ ظٹظ†طھطµط±طŒ ط§ظ„ظƒط¨ط±ظٹط§ط، ط£ظ… ط§ظ„ط­ط¨طں',
     'ظƒطھ طھظˆظٹطھ | ط¨ط¹ط¯ ظ،ظ  ط³ظ†ظٹظ† ط§ظٹط´ ط¨طھظƒظˆظ† طں',
     'ظƒطھ طھظˆظٹطھ â€ڈ| ظ…ظگظ† ط£ط؛ط±ط¨ ظˆط£ط¬ظ…ظ„ ط§ظ„ط£ط³ظ…ط§ط، ط§ظ„طھظٹ ظ…ط±طھ ط¹ظ„ظٹظƒطں',
     'â€ڈظƒطھ طھظˆظٹطھ | ط¹ظ…ط±ظƒ ط´ظ„طھ ظ…طµظٹط¨ط© ط¹ظ† ط´ط®طµ ط¨ط±ط؛ط¨طھظƒ طں',
     'ظƒطھ طھظˆظٹطھ | ط£ظƒط«ط± ط³ط¤ط§ظ„ ظˆط¬ظگظ‘ظ‡ ط¥ظ„ظٹظƒ ظ…ط¤ط®ط±ظ‹ط§طں',
     'â€ڈظƒطھ طھظˆظٹطھ | ظ…ط§ ظ‡ظˆ ط§ظ„ط´ظٹط، ط§ظ„ط°ظٹ ظٹط¬ط¹ظ„ظƒ طھط´ط¹ط± ط¨ط§ظ„ط®ظˆظپطں',
     'â€ڈظƒطھ طھظˆظٹطھ | ظˆط´ ظٹظپط³ط¯ ط§ظ„طµط¯ط§ظ‚ط©طں',
     'â€ڈظƒطھ طھظˆظٹطھ | ط´ط®طµ ظ„ط§طھط±ظپط¶ ظ„ظ‡ ط·ظ„ط¨ط§ طں',
     'â€ڈظƒطھ طھظˆظٹطھ | ظƒظ… ظ…ط±ظ‡ ط®ط³ط±طھ ط´ط®طµ طھط­ط¨ظ‡طں.',
     'â€ڈظƒطھ طھظˆظٹطھ | ظƒظٹظپ طھطھط¹ط§ظ…ظ„ ظ…ط¹ ط§ظ„ط§ط´ط®ط§طµ ط§ظ„ط³ظ„ط¨ظٹظٹظ† طں',
     'â€ڈظƒطھ طھظˆظٹطھ | ظƒظ„ظ…ط© طھط´ط¹ط± ط¨ط§ظ„ط®ط¬ظ„ ط§ط°ط§ ظ‚ظٹظ„طھ ظ„ظƒطں',
     'â€ڈظƒطھ طھظˆظٹطھ | ط¬ط³ظ…ظƒ ط§ظƒط¨ط± ظ…ظ† ط¹ظŒظ…ط±ظƒ ط§ظˆ ط§ظ„ط¹ظƒط³ظ‘ طں!',
     'â€ڈظƒطھ طھظˆظٹطھ |ط£ظ‚ظˆظ‰ ظƒط°ط¨ط© ظ…ط´طھ ط¹ظ„ظٹظƒ طں',
     'â€ڈظƒطھ طھظˆظٹطھ | طھطھط£ط«ط± ط¨ط¯ظ…ظˆط¹ ط´ط®طµ ظٹط¨ظƒظٹ ظ‚ط¯ط§ظ…ظƒ ظ‚ط¨ظ„ طھط¹ط±ظپ ط§ظ„ط³ط¨ط¨ طں',
     'ظƒطھ طھظˆظٹطھ | ظ‡ظ„ ط­ط¯ط« ظˆط¶ط­ظٹطھ ظ…ظ† ط£ط¬ظ„ ط´ط®طµظچ ط£ط­ط¨ط¨طھطں',
     'â€ڈظƒطھ طھظˆظٹطھ | ط£ظƒط«ط± طھط·ط¨ظٹظ‚ طھط³طھط®ط¯ظ…ظ‡ ظ…ط¤ط®ط±ظ‹ط§طں',
     'â€ڈظƒطھ طھظˆظٹطھ | â€ڈط§ظƒط«ط± ط´ظٹ ظٹط±ط¶ظٹظƒ ط§ط°ط§ ط²ط¹ظ„طھ ط¨ط¯ظˆظ† طھظپظƒظٹط± طں',
     'â€ڈظƒطھ طھظˆظٹطھ | ظˆط´ ظ…ط­طھط§ط¬ ط¹ط´ط§ظ† طھظƒظˆظ† ظ…ط¨ط³ظˆط· طں',
     'â€ڈظƒطھ طھظˆظٹطھ | ظ…ط·ظ„ط¨ظƒ ط§ظ„ظˆط­ظٹط¯ ط§ظ„ط­ظٹظ† طں',
     'â€ڈظƒطھ طھظˆظٹطھ | ظ‡ظ„ ط­ط¯ط« ظˆط´ط¹ط±طھ ط¨ط£ظ†ظƒ ط§ط±طھظƒط¨طھ ط£ط­ط¯ ط§ظ„ط°ظ†ظˆط¨ ط£ط«ظ†ط§ط، ط§ظ„طµظٹط§ظ…طں',
]

 client.on('message', message => {
   if (message.content.startsWith("$ظƒطھ طھظˆظٹطھ")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('ظ„ط¹ط¨ظ‡ ظƒطھ طھظˆظٹطھ' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const secreT = [
  "**ط§ظ„ط­ظٹط§ط© ط¨ظƒظ„ ظ…ط§ ظپظٹظ‡ط§ طھظ‚ظپ ط¯ط§ط¦ظ…ظ‹ط§ ط¹ظ„ظ‰ ط­ط¯ ط§ظ„ظˆط³ط·ظٹط© ط¨ظٹظ† ط§طھط²ط§ظ† ط§ظ„ظ…ط¹ظ†ظ‰ ظˆط¶ط¯ظ‡ ظ…ظ† ط­ط¨ ظˆظƒط±ظ‡ ظˆط­ظ‚ ظˆط¨ط§ط·ظ„ ظˆط¹ط¯ظ„ ظˆط¸ظ„ظ…**.",
  "**ظƒظ‰ طھط¹ظٹط´ ط¹ظ„ظٹظƒ ط§ظ† طھطھظ‚ظ† ظپظ† ط§ظ„طھط¬ط§ظ‡ظ„ ط¨ط§ط­طھط±ط§ظپ**.",
  "**ظ„ط§ طھط­ط²ظ† ط¹ظ„ظ‰ ظ…ظ† ط§ط´ط¹ط±ظƒ ط¨ط§ظ† ط·ظٹط¨طھظƒ ط؛ط¨ط§ط، ط§ظ…ط§ظ… ظˆظ‚ط§ط­طھظ‡**.",
  "**ظ‡ظ†ط§ظƒ ظ…ظ† ظٹط­ظ„ظ… ط¨ط§ظ„ظ†ط¬ط§ط­ ظˆظ‡ظ†ط§ظƒ ظ…ظ† ظٹط³طھظٹظ‚ط¸ ط¨ط§ظƒط±ط§ ظ„طھط­ظ‚ظٹظ‚ظ‡**.",
  "**ط§ظ† طھط¹ط§ظ„ط¬ ط£ظ„ظ…ظƒ ط¨ظ†ظپط³ظƒ طھظ„ظƒ ظ‡ظ‰ ط§ظ„ظ‚ظˆط©**.", 
  "**ط§ظ„ط¬ظ…ظٹط¹ ظٹط³ظ…ط¹ ظ…ط§ طھظ‚ظˆظ„ ظˆط§ظ„ط§طµط¯ظ‚ط§ط، ظٹظ†طµطھظˆظ† ظ„ظ…ط§ طھظ‚ظˆظ„ ظˆط§ظپط¶ظ„ ط§ظ„ط§طµط¯ظ‚ط§ط، ظٹظ†طµطھظˆظ† ظ„ظ…ط§ ط§ط®ظپط§ظ‡ ط³ظƒظˆطھظƒ**.", 
  "**ط§ظ†طھظ‡ظ‰ ط²ظ…ظ† ط§ظ„ظپط±ظˆط³ظٹط© طŒ ظ„ظ… طھظ†ظ‚ط±ط¶ ط§ظ„ط®ظٹظˆظ„ ط¨ظ„ ط§ظ†ظ‚ط±ط¶ ط§ظ„ظپط±ط³ط§ظ†**.", 
  "**ط§ظ† طھظƒظˆظ† ط§ط®ط±ط³ط§ ط¹ط§ظ‚ظ„ط§ ط®ظٹط± ظ…ظ† ط§ظ† طھظƒظˆظ† ظ†ط·ظˆظ‚ط§ ط¬ظ‡ظˆظ„ط§**.", 
  "**ط§ظ„ظ…ظ†ط§ظ‚ط´ط§طھ ط§ظ„ط¹ظ‚ظٹظ…ط© ظ„ط§ طھظ†ط¬ط¨ ط§ظپظƒط§ط±ط§**.", 
  "**ظ†ط­ظ† ظ†ظƒطھط¨ ظ…ط§ ظ„ط§ ظ†ط³طھط·ظٹط¹ ط§ظ† ظ†ظ‚ظˆظ„ ظˆظ…ط§ ظ†ط±ظٹط¯ ط§ظ† ظٹظƒظˆظ†**.", 
  "**ظ†ط­ظ† ظ†ظƒطھط¨ ظ…ط§ ظ„ط§ ظ†ط³طھط·ظٹط¹ ط§ظ† ظ†ظ‚ظˆظ„ ظˆظ…ط§ ظ†ط±ظٹط¯ ط§ظ† ظٹظƒظˆظ†**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("$ط®ظˆط§ط·ط±")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('ظ„ط¹ط¨ظ‡ ط®ظˆط§ط·ط±' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on('message', message => {
    if(message.channel.type === "dm") return;
      if(message.content.startsWith ("$ط²ظˆط§ط¬")) {
      if(!message.channel.guild) return message.reply(' This command only for servers ')
      var proposed = message.mentions.members.first()

      if(!message.mentions.members.first()) return message.reply('ظ„ط§ط²ظ… طھط·ظ„ط¨ ط§ظٹط¯ ظˆط­ط¯ط©').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply('ظˆظ„ط¯ ظ…ط§ ظٹط¶ط¨ط· ظ„ط§ط²ظ… ط¨ظ†طھ طھط°ظƒط± ظ„ط§ط²ظ… ط¨ظ†طھ ط§ظ„ط­ظ„ط§ظ„').catch(console.error);
       if(proposed === message.author) return message.reply(`**ط®ظ†ط«ظ‰ طں **`);
        if(proposed === client.user) return message.reply(`** طھط¨ظٹ طھطھط²ظˆط¬ظ†ظٹطں **`);
              message.channel.send(`**${proposed} 
 ط¨ط¯ظƒ طھظ‚ط¨ظ„ظٹ ط¹ط±ط¶ ط§ظ„ط²ظˆط§ط¬ ظ…ظ† ${message.author}
 ط§ظ„ط¹ط±ط¶ ظ„ظ…ط¯ط© 10 ط«ط§ظ†ظٹط© 
 ط§ظƒطھط¨ ظ…ظˆط§ظپظ‚ط© ط§ظˆ ظ„ط§**`)

const filter = m => m.content.startsWith("ظ…ظˆط§ظپظ‚ط©");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(`**${message.author} ظˆ ${proposed} ط§ظ„ظپ ط§ظ„ظپ ظ…ط¨ط±ظˆظƒ ط§ظ†ط´ط§ط، ط§ظ„ظ„ظ‡ طھط³طھظ…طھط¹ظˆظ† ط¨ط­ظٹط§طھظƒظ… ط§ظ„ط²ظˆط¬ظٹط© ظˆظٹط·ظˆظ„ ط§ط¹ظ…ط§ط±ظƒظ… ظˆظ„ط§ طھظ†ط³ظˆظ† ط´ظ‡ط± ط§ظ„ط¹ط³ظ„**`);
})
   .catch(collected => message.channel.send(`**ط§ظ„ط³ظƒظˆطھ ط¹ظ„ط§ظ…ط© ط§ظ„ط±ط¶ط§ ظ†ظ‚ظˆظ„ ظ‚ظ„ظ„ظ„ظˆط´ ظ…ط¨ط±ظˆظƒ**`))

   const filte = m => m.content.startsWith("ظ„ط§");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`**${message.author} طھظ… ط±ظپط¶ ط¹ط±ط¶ظƒ**`);
})




  }
});

client.on("message", message => {
 if (message.content === "$help^") {
        message.react("ًںکک")
           message.react("ًںکµ")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
-ًںڑ€ ط³ط±ط¹ظ‡ ط§طھطµط§ظ„ ظ…ظ…طھط§ط²ظ‡
-ًںکژ ط³ظ‡ظ„ ط§ظ„ط§ط³طھط®ط¯ط§ظ… 
-âڑ  طµظٹط§ظ†ظ‡ ظƒظ„ ظٹظˆظ…
-ًں’µ ظ…ط¬ط§ظ†ظٹ ط¨ظ„ ظƒط§ظ…ظ„ 
-ًں“ڑ ط§ظ„ط¨ظˆطھ ط¹ط±ط¨ظٹ ظˆ ط³ظٹطھظ… ط§ط¶ط§ظپظ‡ ط§ظ„ظ„ط؛ظ‡ ط§ظ„ظ†ظƒظ„ظٹط²ظٹط©

â—ڈ â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â—ڈ 

ًں’ژم€ژط§ظˆط§ظ…ط± ط¹ط§ظ…ط©م€ڈًں’ژ
                        
ًں’ژ$server م€ژظ…ط¹ظ„ظˆظ…ط§طھ ط¹ظ† ط§ظ„ط³ظٹط±ظپط±م€ڈ                      

ًں’ژ$servers م€ژط¹ظ„ط´ط§ظ† طھط´ظˆظپ ط§ظ„ط¨ظˆطھ ط¨ظƒظ… ط³ظٹط±ظپط± ط§ظˆظ† ظ„ط§ظٹظ† م€ڈ  

ًں’ژ$bot م€ژظ„ظ…ط¹ط±ظپ ط§ظ„ط¨ظˆطھ ط¨ظƒظ… ط³ظٹط±ظپط±م€ڈ

ًں’ژ$date م€ژظ„ظ…ط¹ط±ظپظ‡ ط§ظ„طھط§ط±ظٹط®م€ڈ

ًں’ژ$ping م€ژظ„ظ…ط¹ط±ظپظ‡ ط³ط±ط¹ظ‡ ط§ظ„ط¨ظˆطھم€ڈ

ًں’ژ$members م€ژظ…ط¹ظ„ظˆظ…ط§طھ ط¹ظ† ط§ظ„ط§ط¹ط¶ط§ط،م€ڈ

ًں’ژ$embed م€ژط®ط§طµظٹظ‡ ط؛ط±ط¯ ظ„ظƒظ† ط¨ط؛ظٹط± ط·ط±ظٹظ‚ظ‡م€ڈ

ًں’ژ$say م€ژظ„ظٹ ظٹظƒط±ط± ط§ظ„ظƒظ„ط§ظ… ط§ظ„ط°ظٹ طھظ‚ظˆظ„ظ‡م€ڈ

ًں’ژ$animal  م€ژظƒظˆط¯ ظ„ظٹ ط§ط¶ظ‡ط§ط± طµظˆط±  ظ„ظ„ط­ظٹظˆط§ظ†ط§طھم€ڈ

â—ڈ â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â—ڈ 

ًں‘‘م€ژط§ظˆط§ظ…ط± ط§ط¯ط§ط±ظٹط©م€ڈًں‘‘

ًں‘‘$rooms م€ژظ„ظ…ط¹ط±ظپظ‡ ط¹ط¯ط¯ ط±ظˆظ…ط§طھ ط§ظ„ط³ظٹط±ظپط±م€ڈ

ًں‘‘$ban م€ژظ„طھط¹ط·ظٹ ط´ط®طµ ط¨ط§ظ†ط¯م€ڈ

ًں‘‘$kick م€ژظ„طھط¹ط·ظٹ ط´ط®طµ ظƒظٹظƒم€ڈ

ًں‘‘$clear م€ژظ„ظ…ط³ط­ ط§ظ„ط´ط§طھ ط¨ط±ظ‚ظ…م€ڈ

ًں‘‘$edit  م€ژظ„طھط¹ط¯ظٹظ„ ط±ط³ط§ظ„ظ‡ م€ڈ

ًں‘‘$ct  ظ…ظ€ظ„ط§ط­ط¸ظ‡: ط§ظ„ط§ط³ظ… ط§ظ†طھ طھط®طھط§ط±ظ‡م€ژظ„ظٹ ط§ظ†ط´ط§ط، ط±ظˆظ… ظƒطھط§ط¨ظٹم€ڈ

ًں‘‘$cv  ظ…ظ€ظ„ط§ط­ط¸ظ‡: ط§ظ„ط§ط³ظ… ط§ظ†طھ طھط®طھط§ط±ظ‡م€ژظ„ظٹ ط§ظ†ط´ط§ط، ط±ظˆظ… طµظˆطھظٹم€ڈ

ًں‘‘$delet  م€ژظƒظ€ظˆط¯ ظٹط­ط°ظپ ط§ظ„ظ€ط±ظˆظ… ط³ظˆط§ط، طµظˆطھظٹ ط§ظˆ ظƒطھط§ط¨ظٹم€ڈ

â—ڈ â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â—ڈ 

ًںژ²م€ژط§ظ„ظ‚ط±ط¹ط©م€ڈًںژ²

ًںژ²$roll 1   م€ژط§ظ„ظ‚ط±ط¹ط© ظ…ظ† 1 ط§ظ„ظ‰ 25م€ڈ

ًںژ²$roll 2   م€ژط§ظ„ظ‚ط±ط¹ط© ظ…ظ† 1 ط§ظ„ظ‰ 50م€ڈ

ًںژ²$roll 3   م€ژط§ظ„ظ‚ط±ط¹ط© ظ…ظ† 1 ط§ظ„ظ‰ 75م€ڈ

ًںژ²$roll 4   م€ژط§ظ„ظ‚ط±ط¹ط© ظ…ظ† 1 ط§ظ„ظ‰ 100م€ڈ

â—ڈ â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â—ڈ 

ًںژ®م€ژط§ظ„ط¹ط§ط¨م€ڈًںژ®

ًںژ®$ظƒطھ طھظˆظٹطھ

ًںژ®$ظ…ط±ظٹظ… 

ًںژ®$ط®ظˆط§ط·ط±

ًںژ®$ط²ظˆط§ط¬

ًںژ®$ظ„ظˆط®ظٹط±ظˆظƒ

â—ڈ â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â—ڈ 

ًںژ´م€ژط§ظˆط§ظ…ط± ط§ظ„طµظˆط±م€ڈًںژ´

ًںژ´$avatar م€ژظ„ظٹ ط¹ط±ط¶ طµظˆط±طھظƒ ط§ظˆ طµظˆط±ظ‡ ط§ظٹ ط´ط®طµم€ڈ

ًںژ´$image م€ژظ„ظٹ ط¹ط±ط¶ طµظˆط±ظ‡ ط§ظ„ط³ظٹط±ظپط±م€ڈ

ًںژ´ظ‚ط±ظٹط¨ط§

â—ڈ â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â—ڈ 

ًںژژم€ژط§ظ†ظˆط§ط¹ ط§ظ„طھط±ط­ظٹط¨م€ڈًںژژ

ًںژژ طھط±ط­ظٹط¨ 1 / طھط±ط­ظٹط¨ 2 

ًںژژ طھط±ط­ظٹط¨ 3 / طھط±ط­ظٹط¨ 4

ًںژژ طھط±ط­ظٹط¨ 5 / طھط±ط­ظٹط¨ 6 

ًںژژ طھط±ط­ظٹط¨ 7 / طھط±ط­ظٹط¨ 8

ًںژژ طھط±ط­ظٹط¨ 9 / طھط±ط­ظٹط¨ 10

â—ڈ â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â—ڈ 

ًں’ژم€ژط§ظ„ط¯ط¹ظ… ط§ظ„ظپظ†ظٹ ظˆط§ظ„ظ…ط³ط§ط¹ط¯ط©م€ڈًں’ژ

$invite | ط§ظ„ظ‚ط³ظ… ط§ظ„ط§ظˆظ„ ظ„ظٹ ط§ط¶ط§ظپظ‡ ط§ظ„ط¨ظˆطھ 

$support| ط§ظ„ظ‚ط³ظ… ط§ظ„ط«ط§ظ†ظٹ  ط§ظ„ط¯ط¹ظ… ط§ظ„ظپظ†ظٹ ظˆ ط§ظ„ظ…ط³ط§ط¹ط¯ط©

ط§ظ„ظ‚ط³ظ… ط§ظ„ط«ط§ظ„ط« ظ…طµظ…ظ… ط§ظ„ط¨ظˆطھ | Mahmoud Youssef#5434

â—ڈ â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â—ڈ 




`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
 if (message.content === "$help^^^") {
        message.react("ًںک®")
                message.react("ًں¤’")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
â—ڈ â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â—ڈ 
ًں‘‘م€ژط§ظˆط§ظ…ط± ط§ط¯ط§ط±ظٹط©م€ڈًں‘‘

ًں‘‘$ban م€ژظ„طھط¹ط·ظٹ ط´ط®طµ ط¨ط§ظ†ط¯م€ڈ

ًں‘‘$kick م€ژظ„طھط¹ط·ظٹ ط´ط®طµ ظƒظٹظƒم€ڈ

ًں‘‘$clear م€ژظ„ظ…ط³ط­ ط§ظ„ط´ط§طھ ط¨ط±ظ‚ظ…م€ڈ

ًں‘‘$edit  م€ژظ„طھط¹ط¯ظٹظ„ ط±ط³ط§ظ„ظ‡ م€ڈ

ًں‘‘$ct  ظ…ظ€ظ„ط§ط­ط¸ظ‡: ط§ظ„ط§ط³ظ… ط§ظ†طھ طھط®طھط§ط±ظ‡م€ژظ„ظٹ ط§ظ†ط´ط§ط، ط±ظˆظ… ظƒطھط§ط¨ظٹم€ڈ

ًں‘‘$cv  ظ…ظ€ظ„ط§ط­ط¸ظ‡: ط§ظ„ط§ط³ظ… ط§ظ†طھ طھط®طھط§ط±ظ‡م€ژظ„ظٹ ط§ظ†ط´ط§ط، ط±ظˆظ… طµظˆطھظٹم€ڈ

ًں‘‘$delet  م€ژظƒظ€ظˆط¯ ظٹط­ط°ظپ ط§ظ„ظ€ط±ظˆظ… ط³ظˆط§ط، طµظˆطھظٹ ط§ظˆ ظƒطھط§ط¨ظٹم€ڈ

ًں‘‘$bc  م€ژط®ظٹط§ط±ط§طھ ط§ظ„ط¨ط±ظˆط¯ظƒط§ط³طھم€ڈ 

ًں‘‘$rooms م€ژظ„ظ…ط¹ط±ظپظ‡ ط¹ط¯ط¯ ط±ظˆظ…ط§طھ ط§ظ„ط³ظٹط±ظپط±م€ڈ


â—ڈ â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â—ڈ 

	  

ًں’ژم€ژط§ظ„ط¯ط¹ظ… ط§ظ„ظپظ†ظٹ ظˆط§ظ„ظ…ط³ط§ط¹ط¯ط©م€ڈًں’ژ

$invite | ط§ظ„ظ‚ط³ظ… ط§ظ„ط§ظˆظ„ ظ„ظٹ ط§ط¶ط§ظپظ‡ ط§ظ„ط¨ظˆطھ 

$support| ط§ظ„ظ‚ط³ظ… ط§ظ„ط«ط§ظ†ظٹ  ط§ظ„ط¯ط¹ظ… ط§ظ„ظپظ†ظٹ ظˆ ط§ظ„ظ…ط³ط§ط¹ط¯ط©
ظ‚ط³ظ… ط§ظ„ط«ط§ظ„ط« ظ…طµظ…ظ… ط§ظ„ط¨ظˆطھ Mahmoud Youssef#5434






`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
 if (message.content === "$help^^") {
        message.react("ًںک³")
                message.react("ًں‘»")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
â—ڈ â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â—ڈ 

ًں’ژم€ژط§ظˆط§ظ…ط± ط¹ط§ظ…ط©م€ڈًں’ژ
                        
ًں’ژ$server م€ژظ…ط¹ظ„ظˆظ…ط§طھ ط¹ظ† ط§ظ„ط³ظٹط±ظپط±م€ڈ                      

ًں’ژ$servers م€ژط¹ظ„ط´ط§ظ† طھط´ظˆظپ ط§ظ„ط¨ظˆطھ ط¨ظƒظ… ط³ظٹط±ظپط± ط§ظˆظ† ظ„ط§ظٹظ† م€ڈ  

ًں’ژ$bot م€ژظ„ظ…ط¹ط±ظپ ط§ظ„ط¨ظˆطھ ط¨ظƒظ… ط³ظٹط±ظپط±م€ڈ

ًں’ژ$date م€ژظ„ظ…ط¹ط±ظپظ‡ ط§ظ„طھط§ط±ظٹط®م€ڈ

ًں’ژ$ping م€ژظ„ظ…ط¹ط±ظپظ‡ ط³ط±ط¹ظ‡ ط§ظ„ط¨ظˆطھم€ڈ

ًں’ژ$members م€ژظ…ط¹ظ„ظˆظ…ط§طھ ط¹ظ† ط§ظ„ط§ط¹ط¶ط§ط،م€ڈ

ًں’ژ$embed م€ژط®ط§طµظٹظ‡ ط؛ط±ط¯ ظ„ظƒظ† ط¨ط؛ظٹط± ط·ط±ظٹظ‚ظ‡م€ڈ

ًں’ژ$say م€ژظ„ظٹ ظٹظƒط±ط± ط§ظ„ظƒظ„ط§ظ… ط§ظ„ط°ظٹ طھظ‚ظˆظ„ظ‡م€ڈ

ًں’ژ$animal  م€ژظƒظˆط¯ ظ„ظٹ ط§ط¶ظ‡ط§ط± طµظˆط±  ظ„ظ„ط­ظٹظˆط§ظ†ط§طھم€ڈ


â—ڈ â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â—ڈ 
	  

ًں’ژم€ژط§ظ„ط¯ط¹ظ… ط§ظ„ظپظ†ظٹ ظˆط§ظ„ظ…ط³ط§ط¹ط¯ط©م€ڈًں’ژ

$invite | ط§ظ„ظ‚ط³ظ… ط§ظ„ط§ظˆظ„ ظ„ظٹ ط§ط¶ط§ظپظ‡ ط§ظ„ط¨ظˆطھ 

$support| ط§ظ„ظ‚ط³ظ… ط§ظ„ط«ط§ظ†ظٹ  ط§ظ„ط¯ط¹ظ… ط§ظ„ظپظ†ظٹ ظˆ ط§ظ„ظ…ط³ط§ط¹ط¯ط©

ط§ظ„ظ‚ط³ظ… ط§ظ„ط«ط§ظ„ط« ظ…طµظ…ظ… ط§ظ„ط¨ظˆطھ | Mahmoud Youssef#5434


`)


message.author.sendEmbed(embed)

}
}); 


client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

                    client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('$ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
         message.channel.send({embed:embed});
                        }
                    });

client.on("message", (message) => {
if (message.content.startsWith("$ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('طھظ€ظ… ط¥ظ†ظ€ط´ط§ط، ط±ظˆظ… ظƒظ€طھط§ط¨ظ€ظٹ')

}
});
client.on("message", (message) => {
if (message.content.startsWith("$cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('طھظ€ظ… ط¥ظ†ظ€ط´ط§ط، ط±ظˆظ… طµظ€ظˆطھظٹ')
    
}
});






var prefix = "$";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// !say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});


   client.on("message", message => {
    const prefix = "$"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
  client.on('message', (message) => {
    if (message.content.startsWith('$kick')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' طھظ… ط·ط±ط¯ ظ‡ط°ط§ ط§ظ„ط´ط®طµ ظ…ظ† ط§ظ„ط³ظٹط±ظپط±');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 


client.on('message', (message) => {
    if (message.content.startsWith('!ban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('ظ‡ط°ط§ ط§ظ„ط®ط§طµظٹط© ظ„ظ„ط¯ط§ط±ط© ظپظ‚ط·');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'طھظ… ط·ط±ط¯ ظ‡ط°ط§ ط§ظ„ط´ط®طµ ظ…ظ† ط§ظ„ط³ظٹط±ظپط±');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});
  
  client.on("message", (message) => {
    if (message.content.startsWith('$delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});
  
  
client.on('message', message => {
     if (message.content === "$servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**| ط§ظ„ط³ظٹط±ظپط±ط§طھ |**" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});

  var prefix = "$";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message', message => {
var prefix = "!";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('آ» ط§ظ„ط³ظٹط±ظپط± :', `${message.guild.name}`)
            .addField('آ» ط§ظ„ظ…ط±ط³ظ„ : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' آ» ط§ظ„ط±ط³ط§ظ„ط© : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

client.on('message', message => {
    if (message.content === "$server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: ط§ظٹ ط¯ظٹ ط§ظ„ط³ظٹط±ظپط±',`${message.guild.id}`,true)
         .addField(':date: ط£ظ†ط´ط¦طھ ظپظٹ',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: ط§ظˆظ†ط± ط§ظ„ط³ظٹط±ظپط±',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: ط§ظ„ط§ط¹ط¶ط§ط، ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: ظ‚ظ†ظˆط§طھ' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: ط§ظ„ط¯ظˆظ„ظ‡',message.guild.region)
         .addField(':ribbon: ط§ظٹظ…ظˆط¬ظٹ ط§ظ„ط³ظٹط±ظپط±',`${message.guild.emojis.size}`,true)
         .addField(':construction: ظ…ط³طھظˆظ‰ ط§ظ„طھط­ظ‚ظ‚',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: ط§ظ„ط±طھط¨  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });


  client.on('message', message => {
    if (message.content === "$rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

  var prefix = "$";
  const HeRo = new Discord.Client();
  client.on('message', message => {
      if (message.content === prefix + "date") {
          if (!message.channel.guild) return message.reply('** This command only for servers **');  
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();

              var Date15= new Discord.RichEmbed()
              .setTitle("**م€ژ  Date - ط§ظ„طھط§ط±ظٹط® م€ڈ **")
              .setColor('RANDOM')
              .setTimestamp()
              .setDescription( "م€ژ"+ Day + "-" + Month + "-" + Year + "م€ڈ")
              .setFooter(`*help to see all bot commands `, 'https://a.top4top.net/p_966562yc1.jpg')
               message.channel.sendEmbed(Date15);
      }
  });




    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField(':green_book:| ط§ظ„ط§ظˆظ†ظ„ط§ظٹظ† ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| ط¯ظٹ ط§ظ† ط¯ظٹ',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| ط®ط§ظ…ظ„',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| ط§ظ„ط§ظˆظپ ظ„ط§ظٹظ† ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('ط¹ط¯ط¯ ط§ط¹ط¶ط§ط، ط§ظ„ط³ظٹط±ظپط±',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });



var prefix = "$"

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'edit')) {
        message.channel.sendMessage('Edit me').then(msg=>{msg.edit('Done edit')});
    }
});

client.on('message', message => {
     if (message.content === "$bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**ط¹ط¯ط¯ ط§ظ„ط³ظٹط±ظپط±ط§طھ ط§ظ„ظٹ ظپظٹظ‡ط§ ط§ظ„ط¨ظˆطھ:**" , client.guilds.size)
  .addField("**ط§ظ„ظ…ط³طھط®ط¯ظ…ظٹظ†:**", client.users.size)
  .addField("**ظ‚ظ†ظˆط§طھ:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
    if (message.content === "$roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('ط§ظ„ط±طھط¨:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on("guildCreate", guild => {
  console.log(` ط´ط®طµ ظ…ط§ ط§ط¶ط§ظپ ط¨ظˆطھ  ظپظٹ ط³ظٹط±ظپط± ط§ط³ظ…ظ‡ ! ${guild.name} ط§ظˆظ†ط± ط³ظٹط±ظپط± ظ‡ظˆ ${guild.owner.user.username}!`)
});




  
  
client.on('ready', () => {
   client.user.setGame(" $help | $invite ");
}); 

client.on("message", message => {
    var prefix = "$";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("-clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});


 client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'ً‌—ھً‌—کً‌—ںً‌—–ً‌—¢ً‌— ً‌—ک');
  if (!channel) return;
  channel.send(`***ط¨ظƒظ„ ط­ط¨ ظˆط§ط­طھط±ط§ظ… ظˆط´ظˆظ‚ ظ†ط³طھظ‚ط¨ظ„ظƒ ظˆظ†طھظ…ظ†ظ‰ ظ„ظƒ ظ‚ط¶ط¢ط، ط£ط¬ظ…ظ„ ط§ظ„ظ„ط­ط¸ط§طھ ظˆظ„ط¢ظˆظ‚ط§طھ ظ…ط¹ظ†ط§ ط­ظٹط§ظƒ ط§ظ„ظ„ظ‡***, ${member}`);
  
});

client.on('message', message => {
  if (true) {
if (message.content === '$support') {
      message.author.send(' |https://discord.gg/T4Q7vXP| ظ„ظ€ ط£ظٹ ط§ط³طھظپط³ط§ط±').catch(e => console.log(e.stack));

    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === "$support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | طھظ€ظ€ظ€ظ€ظ…" , " |  طھظ€ظ€ظ€ظ€ظ… ط§ط±ط³ظ€ظ€ط§ظ„ظƒ ظپظٹ ط§ظ„ط®ظ€ظ€ط§طµ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
  if (true) {
if (message.content === '$invite') {
      message.author.send(' ط±ط§ط¨ط· ط§ظ„ط¨ظˆطھ |  https://discordapp.com/api/oauth2/authorize?client_id=478628846061486081&permissions=8&scope=bot ').catch(e => console.log(e.stack));

    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === "$invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | طھظ€ظ€ظ€ظ€ظ…" , " |  طھظ€ظ€ظ€ظ€ظ… ط§ط±ط³ظ€ظ€ط§ظ„ظƒ ظپظٹ ط§ظ„ط®ظ€ظ€ط§طµ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$bc-users')){
 if(!message.author.id === 'ط§ظٹ ط¯ظٹ طµط§ط­ط¨ ط§ظ„ط¨ظˆطھ') return;
message.channel.sendMessage('ط¬ط§ط± ط§ط±ط³ط§ظ„ ط§ظ„ط±ط³ط§ظ„ط© |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message', message=>{
    if (message.content ==='$add-colors'){
        if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 250; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
      }
            }else{
                message.channel.sendMessage(':warning: You do not have permission to write this command')
            }
        }else{
            message.channel.sendMessage(':warning:  This command only in servers')
        }
    }
    if (message.content === '!de-colors'){
                if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 250; x++){
            message.guild.roles.find('name', x)
      }
            }else{
                message.channel.sendMessage(':warning: You do not have permission to write this command')
            }
        }else{
            message.channel.sendMessage(':warning:  This command only in servers')
        }
    }

})
  
  
  
  
client.on('message', message => {
 if (message.content.startsWith("طھط±ط­ظٹط¨ 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ط´ظƒط±ط§ ط§ظ„ط§ظ†ط¶ظ…ط§ظ…ظƒ ط§ظ„ظٹظ†ط§***" ,mentionavatar.username )
  .setDescription('***ط¨ظƒظ„ ط­ط¨ ظˆط§ط­طھط±ط§ظ… ظˆط´ظˆظ‚ ظ†ط³طھظ‚ط¨ظ„ظƒ ظˆظ†طھظ…ظ†ظ‰ ظ„ظƒ ظ‚ط¶ط¢ط، ط£ط¬ظ…ظ„ ط§ظ„ظ„ط­ط¸ط§طھ ظˆظ„ط¢ظˆظ‚ط§طھ ظ…ط¹ظ†ط§***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 
  
client.on('message', message => {
 if (message.content.startsWith("طھط±ط­ظٹط¨ 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ط´ظƒط±ط§ ط§ظ„ط§ظ†ط¶ظ…ط§ظ…ظƒ ط§ظ„ظٹظ†ط§***" ,mentionavatar.username )
  .setDescription('***ظ‡ظ„ط§ ط¨ط§ظ„ظ„ظٹ ظ…ظ„ظƒ ظ‚ظ„ط¨ظٹ ظ‡ظ„ط§ ط¨ط§ظ„ظ„ظٹ ظپط¯ط§ظ‡ ط§ظ„ط±ظˆط­ ظ‡ظ„ط§ ط¨ط§ظ„ظ„ظٹ ط´ط؛ظ„ ظپظƒط±ظٹ ظ‡ظ„ط§ ط¨ط§ظ„ظ„ظٹ ظ‡ظˆط§ظ‡ ط§ظ„ط¨ظˆط­.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("طھط±ط­ظٹط¨ 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ط´ظƒط±ط§ ط§ظ„ط§ظ†ط¶ظ…ط§ظ…ظƒ ط§ظ„ظٹظ†ط§***" ,mentionavatar.username )
  .setDescription('***ظ…ط±ط­ط¨ط§ظ‹ ط¨ظƒ ط¹ط¯ط¯ ظ…ط§ ط®ط·طھظ‡ ط§ظ„ط£ظ‚ظ„ط§ظ… ظ…ظ† ط­ط±ظˆظپ ظˆط¨ط¹ط¯ط¯ ظ…ط§ ط£ط²ظ‡ط± ط¨ط§ظ„ط£ط±ط¶ ط²ظ‡ظˆط± ظ…ط±ط­ط¨ط§ظ‹ ظ…ظ…ط²ظˆط¬ط© ط¨ط¹ط·ط± ط§ظ„ظˆط±ط¯ ظˆط±ط§ط¦ط­ط© ط§ظ„ط¨ط®ظˆط±***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("طھط±ط­ظٹط¨ 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ط´ظƒط±ط§ ط§ظ„ط§ظ†ط¶ظ…ط§ظ…ظƒ ط§ظ„ظٹظ†ط§***" ,mentionavatar.username )
  .setDescription('***ظ…ط±ط­ط¨ط§ ط¨ط§ظ„ظ„ظٹ ظٹط¬ظٹظ†ط§ ظ‡ظ„طھ ط§ظ„ظپط±ط­ط© ط¹ظ„ظٹظ†ط§ ظ†ط´ط¯طھ ط§ظ„ط£ط´ظˆط§ظ‚ ظپظٹظ†ط§ ظ…ط±ط­ط¨ط§ظ‹ ط¨ظƒظ… ظ…ط±ط­ط¨ط§ظ‹.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("طھط±ط­ظٹط¨ 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ط´ظƒط±ط§ ط§ظ„ط§ظ†ط¶ظ…ط§ظ…ظƒ ط§ظ„ظٹظ†ط§***" ,mentionavatar.username )
  .setDescription('***ظ„ظˆ ط¹ظ„ظ…طھ ط§ظ„ط¯ط§ط± ط¨ظ…ظ† ط²ط§ط±ظ‡ط§ ظپط±ط­طھ ظˆط£ط³طھط¨ط´ط±طھ ط«ظ… ط¨ط§ط³طھ ظ…ظˆط¶ط¹ ط§ظ„ظ‚ط¯ظ…ظٹظ† ظˆط£ظ†ط´ط¯طھ ط¨ظ„ط³ط§ظ† ط§ظ„ط­ط§ظ„ ظ‚ط§ط¦ظ„ط© ط£ظ‡ظ„ط§ظ‹ ظˆط³ظ‡ظ„ط§ظ‹ ط¨ط£ظ‡ظ„ ط§ظ„ط¬ظˆط¯ ظˆط§ظ„ظƒط±ظ….***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("طھط±ط­ظٹط¨ 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ط´ظƒط±ط§ ط§ظ„ط§ظ†ط¶ظ…ط§ظ…ظƒ ط§ظ„ظٹظ†ط§***" ,mentionavatar.username )
  .setDescription('***ظ…ط±ط­ط¨ط§ ط¨ظƒ ظƒط«ط± ط§ظ„ظ†ط¬ظˆظ… ط§ظ„ط³ط§ط·ط¹ط© ظˆظƒط«ط± ط§ظ„ظˆط±ظˆط¯ ط§ظ„ظپط§ط¦ط­ط© ط§ظ„طھظٹ طھظپظˆط­ ط¨ط£ط²ظƒظ‰ ط§ظ„ط¹ط·ظˆط± ظˆظƒط«ط± ظ…ط§ طھظƒطھط¨ ط§ظ„ط£ظ‚ظ„ط§ظ… ظ…ظ† ط§ظ„ط­ط±ظˆظپ ظˆط§ظ„ط¹ط¨ط§ط±ط§طھ. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("طھط±ط­ظٹط¨ 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ط´ظƒط±ط§ ط§ظ„ط§ظ†ط¶ظ…ط§ظ…ظƒ ط§ظ„ظٹظ†ط§***" ,mentionavatar.username )
  .setDescription('***ط­ظٹ ط§ظ„ظ„ظ‡ ظ‡ط°ظ‡ ط§ظ„ظˆط¬ظˆظ‡ ط±ط¤ظٹطھظ‡ط§ طھط²ظٹط¯ ط§ظ„ط£ظپط±ط§ط­طŒ ظ†ط³ظ…ط§طھظ‡ط§ طھط¯ط§ظˆظٹ ط§ظ„ط¬ط±ظˆط­طŒ ظˆط¹ط¨ظٹط±ظ‡ط§ ظپظˆط§ط­طŒ طھظ†ط«ط±ظ‡ ط§ظ„ط±ظٹط§ط­طŒ ط¹ظ„ظ‰ ط§ظ„ظ‚ظ…ظ… ظپظٹ ط§ظ„ظ„ظٹظ„ ظپظٹ ط§ظ„طµط¨ط§ط­***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("طھط±ط­ظٹط¨ 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ط´ظƒط±ط§ ط§ظ„ط§ظ†ط¶ظ…ط§ظ…ظƒ ط§ظ„ظٹظ†ط§***" ,mentionavatar.username )
  .setDescription('***ظ…ط±ط­ط¨ط§ ط¨ظƒظ„ ط§ظ„ط¶ظٹظˆظپ ظٹظˆظ… ظ†ط§ط¯ظ‰ ط؛ظٹط± ط¹ط§ط¯ظٹ ظ…ط±ط­ط¨ط§ ظپظˆظ‚ ط§ظ„ط£ظ„ظˆظپ ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("طھط±ط­ظٹط¨ 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ط´ظƒط±ط§ ط§ظ„ط§ظ†ط¶ظ…ط§ظ…ظƒ ط§ظ„ظٹظ†ط§***" ,mentionavatar.username )
  .setDescription('***ظٹط§ ظ…ط±ط­ط¨ط§ ظˆط³ظ‡ظ„ط§ظ‹ ط¨ط¶ظٹظپ ظ„ظپط§ظ†ط§طŒ ظٹط²ظ‡ظٹ ط¨ظƒ ط§ظ„ط£ط¯ط¨ ط§ظ„ط¹ط±ط¨ظٹ ظˆظٹظ†ط«ط± ظ„ظƒ ط£ط²ظ‡ط§ط± ظٹط³ظ‚ظٹظƒ ظ…ظ† ظ†ط¨ط¹ ط§ظ„ظ…ط´ط§ط¹ط± ظˆظپط§ظ†ط§طŒ ظ„ظٹظ† ط§ظ„ظ‡ظ„ط§ طھط«ظ…ط± ط¹ظ„ظ‰ ط؛طµظˆظ†ظƒ ط£ط·ظٹط§ط±. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("طھط±ط­ظٹط¨ 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ط´ظƒط±ط§ ط§ظ„ط§ظ†ط¶ظ…ط§ظ…ظƒ ط§ظ„ظٹظ†ط§***" ,mentionavatar.username )
  .setDescription('***ظƒظ„ ط´ظٹط، ظٹط±ط­ط¨ ط¨ظƒ ظƒظ„ ط´ظٹط، ظٹطھط¨ط³ظ… ظˆظٹطھظˆظ‡ط¬ ظپط±ط­ط§ظ‹ ط¨ظ‚ط¯ظˆظ…ظƒ ظƒظ„ ط´ظٹط، ظٹظ†ظ…ظ‚ ط¹ط¨ط§ط±ط§طھ ط§ظ„طھط±ط­ظٹط¨ ظˆظٹطµظˆط؛ ظƒظ„ظ…ط§طھ ط§ظ„ط­ط¨ ظ„ظˆط¬ظˆط¯ظƒ ظƒظ„ ط´ظٹط، ظٹظ†طھط¸ط± ظ…ط´ط§ط±ظƒï؟½ï؟½طھظƒ ظˆظ‚ظ„ظ…ظƒ ط§ظ„ط±ط§ط¦ط¹ ظˆط£ط¨ط¯ط§ط¹ط§طھظƒ ظƒظ„ ط´ظٹط، ظٹط±ط¯ط¯ ط­ظٹط§ظƒ ط§ظ„ظ„ظ‡.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

const secre = [
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ„ط¹ظٹط´ ظˆط­ط¯ظƒ ظپظٹ ط¬ط²ظٹط±ط© ظƒط¨ظٹط±ط© ظ…ظ†ط¹ط²ظ„ط© ظ…ط¹ ط£ظƒط¨ط± ط¯ط±ط¬ط§طھ ط§ظ„ط±ظپط§ظ‡ظٹط© ظˆط¨ظٹظ† ط§ظ„ط¹ظٹط´ ظپظٹ ظ…ظƒط§ظ† ظ‚ط¯ظٹظ… ظˆظ„ظƒظ† ظ…ط¹ ط£طµط¯ظ‚ط§ط¦ظƒ ط§ظ„ظ…ظ‚ط±ط¨ظٹظ†**.",
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ظپظ‚ط¯ط§ظ† ط°ط§ظƒط±طھظƒ ظˆط§ظ„ط¹ظٹط´ ظ…ط¹ ط£طµط¯ظ‚ط§ط¦ظƒ ظˆط£ظ‚ط±ط¨ط§ط¦ظƒ ط£ظˆ ط¨ظ‚ط§ط، ط°ط§ظƒط±طھظƒ ظˆظ„ظƒظ† ط§ظ„ط¹ظٹط´ ظˆط­ظٹط¯**.",
  "**ظ„ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† طھظ†ط§ظˆظ„ ط§ظ„ط®ط¶ط§ط± ظˆط§ظ„ظپط§ظƒظ‡ط© ط·ظˆط§ظ„ ط­ظٹط§طھظƒ ط£ظˆ طھظ†ط§ظˆظ„ ط§ظ„ظ„ط­ظˆظ…**.",
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط±ط¤ظٹط© ط§ظ„ط£ط´ط¨ط§ط­ ظپظ‚ط· ط£ظˆ ط³ظ…ط§ط¹ طµظˆطھظ‡ط§ ظپظ‚ط·**.",
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ„ظ‚ط¯ط±ط© ط¹ظ„ظ‰ ط³ظ…ط§ط¹ ط£ظپظƒط§ط± ط§ظ„ظ†ط§ط³ ط£ظˆ ط§ظ„ظ‚ط¯ط±ط© ط¹ظ„ظ‰ ط§ظ„ط¹ظˆط¯ط© ظپظٹ ط§ظ„ط²ظ…ظ† ظ„ظ„ط®ظ„ظپ**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ„ظ‚ط¯ط±ط© ط¹ظ„ظ‰ ط§ظ„ط§ط®طھظپط§ط، ط£ظˆ ط§ظ„ظ‚ط¯ط±ط© ط¹ظ„ظ‰ ط§ظ„ط·ظٹط±ط§ظ†**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط£ظ† طھط¹ظٹط´ 5 ط¯ظ‚ط§ط¦ظ‚ ظپظٹ ط§ظ„ظ…ط§ط¶ظٹ ط£ظˆ ط£ظ† طھط¹ظٹط´ظ‡ط§ ظپظٹ ط§ظ„ظ…ط³طھظ‚ط¨ظ„**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† 5 ظ…ظ„ط§ظٹظٹظ† ط¯ظˆظ„ط§ط± ط£ظˆ 5 ظ…ظ„ط§ظٹظٹظ† ظ„ط­ط¸ط© ط³ط¹ط§ط¯ط© ط­ظ‚ظٹظ‚ظٹط©ط§**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ„ط§ط¹طھط°ط§ط± ط¹ظ† ط®ط·ط£ ط§ظ‚طھط±ظپطھظ‡ ط£ظˆ ط£ظ† ظٹظ‚ط¯ظ… ظ„ظƒ ط´ط®طµ ط£ط®ط·ط£ ظپظٹ ط­ظ‚ظ‚ ط§ط¹طھط°ط§ط±**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ„ط­ظ‚ط¯ ط£ظˆ ط§ظ„ظ…ط³ط§ظ…ط­ط©**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط¥ظ†ظ‚ط§ط° ظ†ظپط³ظƒ ط£ظˆ ط¥ظ†ظ‚ط§ط° ط´ط®طµ ظˆظ‚ط¯ ظٹط¹ط±ط¶ظƒ ط°ظ„ظƒ ظ„ظ„ط£ط°ظ‰**.",
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط£ظ† طھط¹ظٹط´ ظپظٹ ط§ظ„ظ‚ط±ظ† ط§ظ„ط±ط§ط¨ط¹ ط¹ط´ط± ط£ظˆ ط§ظ„ظ‚ط±ظ† ط§ظ„ط­ط§ظ„ظٹ**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ…طھظ„ط§ظƒ ط³ط±ط¹ط© ط§ظ„ظپظ‡ط¯ ط£ظˆ ط¯ظ‡ط§ط، ط§ظ„ط«ط¹ظ„ط¨**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط£ظ† طھط­طµظ„ ط¹ظ„ظ‰ ط¯ط±ط¬ط© ظƒط§ظ…ظ„ط© ظپظٹ ظƒط§ظ…ظ„ ط§ط®طھط¨ط§ط±ط§طھظƒ ط§ظ„ظ‚ط§ط¯ظ…ط© ظˆط§ظ„ط³ط§ط¨ظ‚ط© ط£ظˆ ط£ظ† طھط³ط§ظپط± ط¥ظ„ظ‰ ط¨ظ„ط¯ طھط­ط¨ظ‡**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ„ط¹ظٹط´ ط¨ط¬ط§ظ†ط¨ ط§ظ„ط¬ط¨ط§ظ„ ظˆط§ظ„ط­ط¯ط§ط¦ظ‚ ظˆط§ظ„ط£ط´ط¬ط§ط± ط£ظˆ ط§ظ„ط¹ظٹط´ ط¨ط¬ط§ظ†ط¨ ط§ظ„ط¨ط­ط±**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† طھط­ظ‚ظٹظ‚ 3 ط£ظ…ظ†ظٹط§طھ (ظ„ط§ طھطھط¹ظ„ظ‚ ط¨ط£ط´ط®ط§طµ) ط£ظˆ ط§ط®طھظٹط§ط± 3 ط£ط´ط®ط§طµ ظ„ظ„ط¹ظٹط´ ظ…ط¹ظ‡ظ… ط·ظˆط§ظ„ ط­ظٹط§طھظƒ**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ„ظ†ظˆظ… ظپظٹ ط؛ط§ط¨ط© ظ…ط¸ظ„ظ…ط© ط£ظˆ ط¹ظ„ظ‰ ط¸ظ‡ط± ط³ظپظٹظ†ط© ظپظٹ ظٹظˆظ… ط¹ط§طµظپ**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ„ظ…ط§ظ„ ط£ظˆ ط§ظ„ط¬ظ…ط§ظ„**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ„ظ…ط§ظ„ ط£ظˆ ط§ظ„ط°ظƒط§ط،**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ„ظ…ط§ظ„ ط£ظˆ ط§ظ„طµط­ط©**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ„ط¬ظ…ط§ظ„ ط£ظˆ ط§ظ„ط°ظƒط§ط،**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط§ظ„ط°ظƒط§ط، ط£ظˆ ط§ظ„طµط­ط©**.", 
  "**ظ„ظˆ ط®ظٹط±ظˆظƒ ط¨ظٹظ† ط¥ط±ط³ط§ظ„ ط±ط³ط§ظ„ط© طµظˆطھظٹط© ظ„ط£ظ…ظƒ ظ…ط¯ط© ط¯ظ‚ظٹظ‚ط© ظƒط§ظ…ظ„ط© ظ„ط§ طھط­طھظˆظٹ ط¥ظ„ط§ ط¹ظ„ظ‰ طµط±ط§ط®ظƒ ظˆط®ظˆظپظƒطŒ ط£ظˆ ظƒط³ط± ط¨ظٹط¶ط© ظ†ظٹط¦ط© ط¹ظ„ظ‰ ط±ط£ط³ظƒ**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("!ظ„ظˆط®ظٹط±ظˆظƒ")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('ظ„ط¹ط¨ظ‡ ظ„ظˆ ط®ظٹط±ظˆظƒ' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ظˆظ„ظƒظ… ظ†ظˆط±طھ ط§ظ„ط³ظٹط±ظپط±:rose: 
:crown:${member}:crown:
.setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg
ط§ظ†طھ ط§ظ„ط¹ط¶ظˆ ط±ظ‚ظ… ${member.guild.memberCount} `) 
}).catch(console.error)
});

client.on('message',async msg => {
  var p = "!";
  if(msg.content.startsWith(p + "settime")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('â‌Œ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('â‌Œ **ط§ظ„ط¨ظˆطھ ظ„ط§ ظٹظ…طھظ„ظƒ طµظ„ط§ط­ظٹط©**');
  msg.guild.createChannel(`Time :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
      time.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
 },1000);
  });
  }
 
});

client.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      let prefix = "$";
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



        if(cmd === `${prefix}ban`){



          let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!kUser) return message.channel.send("ظپظٹظ† ط§ظ„ط¹ط¶ظˆ طں");
          let kReason = args.join(" ").slice(22);
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ظ…ط§ ط¹ظ†ط¯ظƒ ط¨ط±ظ…ط´ظ†");
          if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ظ…ط§ طھظ‚ط¯ط± طھط³ظˆظٹ ط¨ط§ظ† ظ„ظ„ط£ط¯ظ…ظٹظ†")

          let banEmbed = new Discord.RichEmbed()
          .setDescription("~Ban~")
          .setColor("#8e0505")
          .addField("Banned User", `${bUser} with ID ${bUser.id}`)
          .addField("Banned By", `<@${message.author.id}> with the id ${message.author.id}`)
          .addField("Banned In", message.channel)
          .addField("Time", message.createdAt)
          .addField("Reason", kReason);

          let banChannel = message.guild.channels.find('name', 'kick-ban');
          if(!banChannel) return message.channel.send("ظ„ظ… ط§ط¬ط¯ ط±ظˆظ… kick-ban");

          message.guild.member(bUser).kick(bReason)
          banChannel.send(banEmbed);
        }
        });
		
		client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "$";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



    if(cmd === `${prefix}kick`){



      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("ظپظٹظ† ط§ظ„ط¹ط¶ظˆ طں");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ظ…ط§ ط¹ظ†ط¯ظƒ ط¨ط±ظ…ط´ظ†");
      if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ظ…ط§ طھظ‚ط¯ط± طھط³ظˆظٹ ظƒظٹظƒ ظ„ظ„ط£ط¯ظ…ظٹظ†")

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with the id ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let kickChannel = message.guild.channels.find('name', 'kick-ban');
      if(!kickChannel) return message.channel.send("ظ„ظ… ط§ط¬ط¯ ط±ظˆظ… ط§ظ„ kick-ban");

      message.guild.member(kUser).kick(kReason)
      kickChannel.send(kickEmbed);
    }
    });
		
		client.on('message' , message => {
if (message.content === '$owner') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**طھظ… طھط·ظˆظٹط± ظˆط¨ط±ظ…ط¬ظ‡ ط§ظ„ط¨ظˆطھ ظ…ظ† ظ‚ط¨ظ„ ًں”§ **","** ط§ط³ظ… طµط§ظ†ط¹ ط§ظ„ط¨ظˆطھ \ ظˆط§ظ„طھط§ظ‚ ط§ظ„ط®ط§طµ ط¨ظ‡**")
.setColor('#B101FC')
  message.author.sendEmbed(embed);
    }
});

const pubg = [
     'PUBG | ظ…ط§ ظ‡ظˆ ط§ظ‚ظˆظٹ ط³ظ„ط§ط­ ط¨ط±ط§ط¦ظٹظƒ طں',
     'PUBG | ط§ظٹظ† طھط¬ط¯ ط³ظ„ط§ط­ ط§ظ„ط¬ط±ظˆط²ط§ طں Grozza',
     'PUBG | ظ…ط§ط°ط§ طھظپط¶ظ„ ط§ظƒط«ط± ط§ظ… ظپظˆط± ط§ظ… ط³ظƒط§ط± طں',
     'PUBG | ط§ظٹظ‡ظ…ط§ طھظپط¶ظ„ vss ط§ظ… Awm',
     'PUBG | ظ…ط§ط°ط§ طھظپط¶ظ„ ط§ظƒط«ط± طں ط³ظˆظ„ظˆ ط§ظ… ط³ظƒظˆط§ط¯ طں',
     'PUBG | ظƒظ… ط¬ظٹظ… ظƒط³ط¨طھ ظپظٹ ط§ظ„ط¹ط¨ظ‡ طں',
     'PUBG | ظ…ط§ ظ‡ظˆ ط§ظƒط«ط± ط¹ط¯ط¯ ظ‚طھظ„طھ ظپظٹ ظ…ط³ظٹط±طھظƒ ط¨ط§ظ„ط¹ط¨ظ‡',
     'PUBG | ط§ط°ط§ ط§ظ†طھ ط§ظ„ظ…ط±ظƒط² ط§ظ„ 2 ظ‡ظ„ ط³ظˆظپ طھظ‚ظˆظ… ط¨طھظ…ط´ظٹ ط¹ظ„ظٹ ط±ط¬ظ„ظƒ ط§ظ… ط³طھط§ط®ط° ط³ظٹط§ط±ظ‡ طھط­ظ…ظٹظƒ طں',
     'PUBG | ط§ط°ط§ ظˆط¬ط¯طھ ط´ط®طµظٹظ† ظٹطھظ‚ط§طھظ„ط§ظ† , ظ‡ظ„ ط³ظˆظپ طھطھظ‚ط§طھظ„ ظ…ط¹ظ‡ظ… ط§ظ… طھظ†طھط¸ط± ظ‚ظ„ظٹظ„ط§ ط­طھظٹ ظٹظ‚طھظ„ ط§ط­ط¯ظ‡ظ…ط§ ط§ظ„ط§ط®ط± طں',
     'PUBG | ط§ط°ط§ طµط¯ظٹظ‚ظƒ ط¨ط§ظ„ط§ط³ظƒظˆط§ط¯ ظٹط­طھط§ط¬ ظ…ط³ط§ط¹ط¯ظ‡ ظ‡ظ„ طھط³ط§ط¹ط¯ظ‡ ط§ظ… طھطھط±ظƒظ‡ طں',
     'PUBG | ط§ط°ط§ طھظ… ط¹ظ…ظ„ ظ„طµط¯ظٹظ‚ظƒ ظƒظˆظ†ظƒ ط§ظˆطھ ظˆط§ظ…ط§ظ…ظƒ ظ„ظˆطھ ظƒط«ظٹط± ط¬ط¯ط§ ط³ظˆظپ طھط°ظ‡ط¨ ظ„طھط³ط§ط¹ط¯ظ‡ ط§ظ… طھط§ط®ط° ط§ظ„ظˆطھ ظˆطھط¯ط¹ظ‡ ظٹظ…ظˆطھ طں',
     'PUBG | ط§ظٹظ† طھط¬ط¯ ظ…ظ„ط§ط¨ط³ ط§ظ„ظ‚ظ†ط§طµظ‡ طں ghillie suit ?',
     'PUBG | ط§ظٹظ‡ظ…ط§ طھظپط¶ظ„ طں ط§ظ„ط§ط®طھط¨ط§ط، ط­طھظٹ ظٹطھط¨ظ‚ظٹ ط§ط´ط®ط§طµ ظ‚ظ„ظٹظ„ظ‡ ط§ظ… طھط°ظ‡ط¨ ظ„طھظ‚طھظ„ ظˆظ„ط§ طھط®طھط¨ط¦',
     'PUBG | ط§ظٹظ† طھظپط¶ظ„ ط§ظ† طھظ‡ط¨ط· ظ…ظ† ط§ظ„ط·ط§ط¦ط±ظ‡ طں ط§ظ„ط§ظ…ط§ظƒظ† ط§ظ„ظ‡ط§ط¯ط¦ظٹط§ ظ„ظˆطھ طµط؛ظٹط± ط§ظ… ط§ظ„ط§ظ…ط§ظƒظ† ط§ظ„ظ…ط²ط¯ط­ظ…ظ‡ ط¨ط§ظ„ط§ط¹ط¨ظٹظ† ظ„ط§ظƒظ† ظ„ظˆطھ ظƒط«ظٹط±',
     'PUBG | ظƒظ… ط¹ط¯ط¯ ط§ظ„ظ…ط±ط§طھ ط§ظ„طھظٹ ظپط²طھ ط¨ظ‡ط§ ظ„ظˆط­ط¯ظƒ ط³ظˆظ„ظˆ طں',
     'PUBG | ظ…ط§ ظ‡ظˆ ط§ظپط¶ظ„ ط³ظ„ط§ط­ طھط¬ظٹط¯ ط§ط³طھط®ط¯ط§ظ…ظ‡ طں',
     'PUBG | ظ…ط§ ظ‡ظˆ ط§ظ†ط¯ط± ط³ظ„ط§ط­ ظ‚ط¯ طھط¬ط¯ظ‡ ط¨ط±ط§ط¦ظٹظƒ طں',
     'PUBG | ظ…ط§ ظ‡ظˆ ط§ظ†ط¯ط± ط³ظ„ط§ط­ ط¬ط¯ظٹط¯ ظ‚ط¯ طھط¬ط¯ظ‡ ط¨ط±ط§ط¦ظٹظƒ طں',
     'PUBG | ظ…ط§ ظ‡ظˆ ط¹ط¯ظˆظƒ ظپظٹ ط§ظ„ط¹ط¨ظ‡ ظ„ط§ظ‚ ط§ظ„ط¨ظ†ظ‚ ط§ظ… ظ„ط§ظ‚ ط§ظ„ظپط±ظٹظ…ط§طھ ط§ظ„ط§ظپ ط¨ظٹ ط§ط³ طں',
     'PUBG | ط§ظٹظ‡ظ…ط§ طھظپط¶ظ„ ط§ظ„ط¹ط¨ طں ظپظ€ ط§ظ„ظ…ط³ط§ط، ط§ظ… ط§ظ„طµط¨ط§ط­ طں',
     'PUBG | ظ‡ظ„ طھط­ط¨ ط§ظ† ظٹظƒظˆظ† ط§ظ„ط¬ظٹظ… ظ…ظ„ط¦ ط¨ظ„ط§ط¹ط¨ظٹظ† ط§ظ… ظ„ط§ط¹ط¨ظٹظ† ظ‚ظ„ظٹظ„ظٹظ† طں',
     'PUBG | ظ‡ظ„ ط§ظ„ظ…ظ„ط§ط¨ط³ طھط¹ط¨ط± ط¹ظ† ط§ظ†ظƒ ظ…ط­طھط±ظپ ط§ظ… ظ„ط§ طں',
     'PUBG | ظƒظ… ظ…ط¹ظƒ ظ…ظ† ظ…ط§ظ„ ( ظƒظˆظٹظ† ) ط¨ظ„ط¹ط¨ظ‡ طں',
     'PUBG | ظ…ط§ ظ‡ظˆ ط§ظƒط«ط± ط´ط¦ طھظƒط±ظ‡ظ‡ ظپظٹ ط§ظ„ط¹ط¨ظ‡ طں',
     'PUBG | ظ…ط§ ظ‡ظˆ ط§ظƒط«ط± ط´ط¦ طھط­ط¨ظ‡ ط¨ظ„ط¹ط¨ظ‡ طں',
     'PUBG | ظ…ط§ط°ط§ طھظپط¶ظ„ ط´طھظˆ ظ‚ظ† ( ط¨ظ†ط¯ظ‚ظٹظ‡ ) ط§ظ… ظ‚ظ†ط§طµظ‡ طں',
     'PUBG | ظ…ط§ط°ط§ طھظپط¶ظ„ ط§ظƒط«ط± طں ط¯ط±ط¹ ظ„ظپظ„ 3 ظ…طھط¶ط±ط± ط§ظ… ط¯ط±ط¹ ظ„ظپظ„ 2 ط؛ظٹط± ظ…طھط¶ط±ط±',
     'PUBG | طھظپط¶ظ„ ط§ظ† طھظ„ط¹ط¨ ظ…ط¹ طµط¯ظٹظ‚ظƒ ط³ظƒظˆط§ط¯ ط§ظ… ط´ط®طµ ط؛ط±ظٹط¨ طں',
     'PUBG | ظ‡ظ„ طھط¸ظ† ط§ظ†ظƒ ط§ظپط¶ظ„ ط´ط®طµ ظپظٹ ط§طµط¯ظ‚ط§ط¦ظƒ ط¨ظ‡ط°ظ‡ ط§ظ„ظ„ط¹ط¨ظ‡طں',
     'PUBG | ظ‚ظٹظ… ظ†ظپط³ظƒ ظ…ظ† 10 ظƒظ€ ط§ط­طھط±ط§ظپ ظ„ظƒ ط¨ط§ظ„ط¹ط¨ظ‡',
     'PUBG | ظ‡ظ„ ظپط²طھ ط¬ظٹظ… ظ…ظ† ظ‚ط¨ظ„ ط¨ط§ظ„ط¹ط¨ظ‡ طں',
     'PUBG | ظ‡ظ„ ظˆطµظ„طھ ظ„ظ„ظ…ط±ظƒط² ط§ظ„ 10 ( طھظˆط¨ 10 ) ظ‚ط¨ظ„ ظ‡ظƒط°ط§ ط¨ظ„ط¹ط¨ظ‡ طں',
     'PUBG | ظ‡ظ„ ظ‚ظ…طھ ط¨ظ„ط¹ط¨ ظ…ط¹ طµط¯ظٹظ‚ظƒ ظ…ظ† ظ‚ط¨ظ„ ط¨ظ„ط¹ط¨ظ‡ طں',
     'PUBG | ظ‡ظ„ طھط¹ظ„ظ… ظ…ظ† ط§ط®طھط±ط¹ ط§ظ„ط¹ط¨ظ‡ طں',
     'PUBG | ظ„ظˆ ط®ظٹط±ظˆظƒ ظ„ط¹ط¨ظ‡ ط¨ط¨ط¬ظٹ ط§ظ… ظپظˆط±طھ ظ†ط§ظٹطھ طں',
     'PUBG | ظ‡ظ„ ظٹظˆط¬ط¯ ط´ط®طµ ظ…ظ† ط§طµط¯ظ‚ط§ط،ظƒ ظ…ط­طھط±ظپ ط§ظƒط«ط± ظ…ظ†ظƒ ط§ظ… ط§ظ†طھ ط§ظƒط«ط± ط´ط®طµ ظ…ط­طھط±ظپ ظ…ط§ ط¨ظٹظ† ط§طµط¯ظ‚ط§ط،ظƒ طں',
     'PUBG | ط§ط°ط§ ظƒظ†طھ ظ…ظ† ظپط±ظٹظ‚ ظ…ط·ظˆط±ظٹظ† ط§ظ„ط¹ط¨ظ‡ ظ…ط§ط°ط§ ط³طھظپط¹ظ„ طں',
     'PUBG | ظ‚ظٹظ… ظ…ظ† 10 ظ…ط¯ظٹ ط­ط¨ظƒ ظ„ظ„ط¹ط¨ظ‡',
     'PUBG | ظ‡ظ„ طھط­ط¨ ط§ظ† طھطھظƒظ„ظ… طµظˆطھ ظ…ط¹ ط§طµط¯ظ‚ط§ط،ظƒ ظˆط§ظ†طھ طھظ„ط¹ط¨ ظ…ط¹ط§ظ‡ظ… ط§ظ… ظ„ط§ طھط­ط¨ ظ‡ط°ط§ ط§ظ„ط§ظ…ط± طں',
 
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('$pubg')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("ظ„ط¹ط¨ظ‡ ط§ط³ط¦ظ„ظ‡ ط¨ط§طھظ„ ط¬ط±ظˆط§ظ†ط¯")
  .setColor('#FFA500')
  .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/416617103492251658/477741838292484127/pubg-orange-square.png")
                  .setTimestamp()
 
   message.channel.sendEmbed(client);
   message.react("??")
 }
});

client.login('NDc4NjI4ODQ2MDYxNDg2MDgx.DlRJ-w.dWOo8xTeoTWt6_94ol425DS3ljk')
