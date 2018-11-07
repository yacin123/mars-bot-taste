const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')


client.on('ready', () => {
  console.log(`General Bot Is Enabled`);
});

client.on('message', message => {
        if (message.content === settings.prefix +"inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`Click Here To Add Mars Bot `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=508029103702540299&permissions=8&scope=bot`)
        .setThumbnail("https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendEmbed(embed);
       }
});
   client.on('message', message => {
     if (message.content === settings.prefix +"support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/kPETJC8**")
     
     
  message.channel.sendEmbed(embed);
    }
});

client.login(settings.token);
