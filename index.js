const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTc5Nzg1NjQ0NDUzMTM0MzU3.XOWy4g.JB-1CwN8y0Nh3kcXaczc-toLM9A';

const PREFIX = '$';

var version = '0.1.4'


bot.on('ready', () =>{
    console.log('This bot is online');
    bot.user.setActivity('your conversations', { type: "LISTENING"}).catch(console.error);
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "welcome")
    if(!channel) return;

    channel.send(`Welcome to the Error 404 private discord, ${member}, please read #must-read for info on the server!`)
});

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('Pong!');
            break;
        case 'discord':
            message.channel.sendMessage('Go and join Error 404 discord channel https://discord.gg/5s6xf33');
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('The bot is in Version ' + version);
            }else{
                message.channel.sendMessage('Invalid Args. Try again')
            }
            break;
        case 'clearchat':
            if(!args[1]) return message.reply('BEEEEEP BOOOOOP ERROR DETECTED! Please specify how many messages you want to clear!')
            message.channel.bulkDelete(args[1]);
            break;
        case 'playerinfo':
                const playerinfo = new Discord.RichEmbed()
                .setTitle('Player Info')
                .addField('Discord Username', message.author.tag, true)
                .addField('Current Server', message.guild.name, true)
                .addField('Time Created:', message.author.createdAt, true)
                .addField('User ID', message.author.id, true)
                .setColor(0x00FFEC)
                .setThumbnail(message.author.avatarURL)
                .setFooter('Error 404 bot, Made by Error 404#9495')
                message.channel.sendEmbed(playerinfo);
                break;
        case 'av':
                const av = new Discord.RichEmbed()
                .setColor(0xFF00FB)
                .setTitle('Your Avatar')
                .setThumbnail(message.author.avatarURL)
                .setFooter('Error 404 bot, Made by Error 404#9495')
                message.channel.sendEmbed(av)
                break; 
        case 'kick':
                if(!message.member.roles.find(r => r.name === "Kick")); 
                return message.channel.sendMessage('No No No, You can nott do that')
            const user = message.mentions.users.first();

            if(user) {
                const member = message.guild.member(user);

                if(member) {
                    member.kick('You have been snapped from existince of the server! *snap* ').then (() =>{
                        message.reply(`Sucsessfully kicked ${user.tag}`)
                    }).catch(error =>{
                        MessageChannel.reply('I was unable to Snap ${user.tag} out of existince')
                        console.log(error)
                    });
                } else {
                    message.reply("That user isn\'t in the server")
                } 
            } else {
                message.reply("You need to specify a person")
            }
            break;
        case 'ban':
            if(!message.member.roles.find(r => r.name === "Ban")); 
            return message.channel.sendMessage('No No No, You can nott do that')
                if(user) {
                    const member = message.guild.member(user);
        
                     if(member) {
                        member.ban({reasion: 'You where snaped from the server PERMANENTLY!'}).then(() =>{
                             message.reply(`${user.tag} has successfully been snaped from the server permanetly!`)
                        })
                    } else {
                        message.reply("That user isn\'t in the server")
                    } 
                } else {
                    message.reply("You need to specify a person")
                }
                break;
        

    }
})

bot.login (token);