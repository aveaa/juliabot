const Discord = require(`discord.js`);
const request = require("request");
const client = new Discord.Client();
let id = '476978677872328705';
/*client.on('voiceStateUpdate', (old_, new_) => {
if (old_.voiceChannelID) new_.removeRole(id).catch()
if (new_.voiceChannelID) new_.addRole(id).catch()
});*/
let p = ";"
let admp = "@!"
//ID ролей
let Oxpana = '477045054045814793';
let Kosmo = '477045398263955456';
let Smotri = '477045398263955456';
let Chmute = '477065648544153600';
let VoiceMute = '477065632546816000';
const server_name = 'Fenix 🔥 '

//Функции
function randomInteger(min, max) {
    max++
    return Math.floor(Math.random() * (max - min)) + min;
}
function setBigTimeout(func, timeout) {
    if (timeout > 0x7FFFFFFF)
        setTimeout(function() {setBigTimeout(func, timeout-0x7FFFFFFF);}, 0x7FFFFFFF);
    else
        setTimeout(func, timeout);
}
//тут токен(секретный,Тссссссс.....)
client.login(process.env.BOT_TOKEN);
//команды
const wrapper = require('weeb-wrapper');
const weeb = new wrapper("Wolke "+process.env.WEEB_TOKEN);
client.on('ready', () => {
console.log("ready")	
});
client.on("guildMemberAdd", member => {
	client.channels.get('472968393708929024').send({embed: new Discord.RichEmbed()
	  	      .setAuthor(member.user.tag, member.user.displayAvatarURL)
		      .setTitle(`Добро пожаловать на ${member.guild.name}`, 'https://discord-server.com/472966874133692426')
		      .setDescription(`**Приветствуем тебя ${member} на нашем космическом сервере \nТут ты найдешь разные конкурсы, добрую администрацию, много разных каналов, нашу собственную валюту и многое другое**`)
		      .addField("Важные каналы:", "<#490472395140759553>  - **__канал с правилами сервера__** \n<#490472095763922954>  - **__канал с информацией сервера__** \n<#506806612317437952> - **__канал со всеми новостями сервера__** \n<#506241187506683945> - **__канал с конкурсами сервера__**")
		      .setImage("https://media.discordapp.net/attachments/442527699936870401/507536479577440259/MOSHED-2018-11-1-15-44-49.gif")
		      .setThumbnail(member.user.displayAvatarURL)
		      .setColor("GREEN")
		      .setFooter(`Теперь нас ${member.guild.memberCount}`)
		     })
});
client.on("guildMemberRemove", member => {
	client.channels.get('472968393708929024').send({embed: new Discord.RichEmbed()
		      .setAuthor(member.user.tag, member.user.displayAvatarURL)
		      .setTitle(`Прощай ${member.user.tag}`)
		      .setDescription(`${member.user.username} решил покинуть наc! :wave:`)
		      .setColor("RED")
		      .setThumbnail(member.user.displayAvatarURL)
		       .setFooter(`Теперь нас ${member.guild.memberCount}`)
		     })
});
client.on('message', message => {
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	if(message.content.startsWith(';')) {message.delete().catch(err => {})}
if(message.content.startsWith(p + 'say')) {
    let say = message.content.slice((p + 'say').length);
    const embed = new Discord.RichEmbed()
    .setColor(message.member.highestRole.hexColor)
    .setDescription(say)
    .setTimestamp();
    message.channel.send({embed});
}
if(message.content.startsWith(p + `info-bot`)) {
    const embed = new Discord.RichEmbed()
        .setTitle("**Информация о боте**")
        .setColor(message.member.highestRole.hexColor)
        .setDescription('Бот создан для сервера **MoonChat**`🌒` \n Если вы не верите что этот бот создан для этого сервера, у нас еть копирайт на этого бота:  \n** https://www.copyrighted.com/work/iZl7wRmIpqrD60a9 ** \n\n Если вы будите красть код без разришения,это будет статья "Автороское Право" \n\n `Автор бота:` <@406343162651738112> \n `Другие авторы бота:` <@361951318929309707>,<@421030089732653057> \n `Создатель` **MoonChat**`🌒`: <@378915782270124033> \n\n **Версия бота:** `0.4.05` **beta**')
        .setFooter(`Команда: ;info-bot | ${message.guild.name}`)
        .setTimestamp();
    message.channel.send({embed});
}
if (['ship'].includes(command)) {
    if (!args[0]) args[0] = message.guild.members.random();
    if (!args[1]) args[1] = message.author
    if (args[0].length > 30 || args[1].length > 30) return message.reply('✖ `Ошибка. Причина:` **Не может быть длиннее 30 символов**');
    let loveText
    let line
    let percents = randomInteger(0, 100)
    if (percents <= 99) {loveText = 'Под заебись'; line = '❤❤❤❤❤❤❤❤'; }
    if (percents <= 89) {loveText = 'Превосходно! :heartpulse:'; line = '❤❤❤❤❤❤❤';}
    if (percents <= 79) {loveText = '( ͡° ͜ʖ ͡°)'; line = '❤❤❤❤❤❤❤';}
    if (percents <= 69) {loveText = 'По братски'; line = '❤❤❤❤❤❤';}
    if (percents <= 59) {loveText = 'Неплохо :confused:'; line = '❤❤❤❤❤';}
    if (percents <= 49) {loveText = 'Средне :thinking:'; line = '❤❤❤❤';}
    if (percents <= 49) {loveText = 'Плохо :frowning2:'; line = '❤❤❤';}
    if (percents <= 29) {loveText = ':poop:'; line = '❤❤';}
    if (percents <= 19) {loveText = 'Ну блять,нет слов...'; line = '❤';}
    if (percents <= 9) {loveText = 'Всё хуева'; line = '□□□□□□□□□□';}
    if (percents >= 100) {loveText = 'ЗАЕБИСЬ!!!!!'; line = '❤❤❤❤❤❤❤❤❤❤'; percents = 100;}
    const embed = new Discord.RichEmbed()
        .setTitle("МАТЧМЕЙКИНГ")
        .setColor(message.member.highestRole.hexColor)
        .setDescription('▼***' + args[0] + '***\n▲***' + args[1] + '***\n\n:revolving_hearts:Любовь в проценатах: **' + percents + '%** `[' + line + ']`\n:revolving_hearts:' + '\n\nВердикт: **' + loveText + '**')
        .setFooter(`Команда: ;ship | ${message.guild.name}`)
        .setTimestamp();
    message.channel.send({embed});
}
if (['rsp'].includes(command)) {        
    let userChoice;
            if (!args[0]) {
                message.channel.send(message.author + ', ⛔ Ошибка. Причина: **Вы забыли указать что вы выбираете, камень, ножницы или бумагу**');
                return;
            }
            else if (['камень', 'rock', 'r', 'к'].includes(args[0].toLowerCase())) {
                userChoice = 'камень';
            }
            else if (['бумагу', 'бумага', 'paper', 'p', 'б'].includes(args[0].toLowerCase())) {
                userChoice = 'бумагу';
            }
            else if (['scissors', 'ножницы', 's', 'н'].includes(args[0].toLowerCase())) {
                userChoice = 'ножницы';
            } else {
                userChoice = 'Incorrect';
            }
            let computerChoice = Math.random();
            if (computerChoice < 0.34) {
                computerChoice = "камень";
            } else if(computerChoice <= 0.67) {
                computerChoice = "бумагу";
            } else {
                computerChoice = "ножницы";
            }
            function rspCW(userChoice, computerChoice) {
                let award = randomInteger(1, 3);
                if (userChoice === computerChoice) {
                    return "**Ничья!**😀";
                }
                else if(userChoice === "камень") {
                    if(computerChoice === "ножницы") {
                        return "**Ты выиграл(а)!** 😢";
                    }
                    else if (computerChoice === "бумагу") {
                        return "**Ты проиграл(а).** 😎";
                    }
                }
                else if(userChoice === "бумагу") {
                    if(computerChoice === "камень") {
                        return "**Ты выиграл(а)!** 😢";
                    } else if (computerChoice === "ножницы") {
                        return "**Ты проиграл(а).** 😎";
                    }
                }
                else if(userChoice === "ножницы") {
                    if(computerChoice === "бумагу") {
                        return "**ты выиграл(а)!** 😢";
                    } else if (computerChoice === "камень") {
                        return "**ты проиграл(а).** 😎";
                    }
                }
                else if (userChoice === 'Incorrect') {
                    return "**Ты не выбрал ни камень, ни ножницы, ни бумагу**";
                }
            }
            if (userChoice === 'Incorrect') {
                message.channel.send(message.author + ", " + rspCW(userChoice, computerChoice))
            }
            else {
            message.channel.send('**Я выбрала** ' + computerChoice + '. ' + message.author + ", " + rspCW(userChoice, computerChoice) + ' **Ты выбрал\(а\)** ' + userChoice + ' **Я выбрала** ' + computerChoice);
         }
        };
if (['8ball'].includes(command)) {
    let numOfAnswer = randomInteger(1, 11);
    if (!args[0]) {
        message.reply('Ошибка. Причина: **Не указан аргумент**\n\nПравильное использование:\n;8ball `<вопрос>`'); 
        return;
    }
    if (numOfAnswer === 1) message.reply('Без сомннения!');
    else if (numOfAnswer === 2) message.reply('Да, конечно');
    else if (numOfAnswer === 3) message.reply('Да');
    else if (numOfAnswer === 4) message.reply('В принципе да');
    else if (numOfAnswer === 5) message.reply('Возможно');
    else if (numOfAnswer === 6) message.reply('Абсолютно нет!');
    else if (numOfAnswer === 7) message.reply('Никак нет');
    else if (numOfAnswer === 8) message.reply('Нет');
    else if (numOfAnswer === 9) message.reply('Неа');
    else if (numOfAnswer === 10) message.reply('Cомневаюсь');
    else message.reply('Спроси позднее, я не знаю');
}
if(['sms'].includes(command)) {
    let user = message.mentions.members.first(); 
        if (!user) {
            message.delete
            message.author.send(message.author + ', Ошибка. Причина: **Не указан получатель сообщения**');
            return
        }
        const sendMessage = args.join(" ");
        let msg = user.send('**Вам пришло смс от** '+message.author.username + '. \n**Он сказал(а):** '+ sendMessage.replace(user, '')).catch(()=>{message.reply('***Ошибка. Причина: не указано сообщение***');
        })
        message.delete().catch(O_o=>{});
    }

	if (message.content.startsWith(admp + `eval`) && (message.author.id === "406343162651738112" || message.author.id === "378915782270124033")) {
		const code = message.content.split(" ").slice(1).join(" ");
        try {
         let evaled = eval(code);
         if (!code) {
             return message.channel.send("А где код?");
         }
    
         if (typeof evaled !== 'string')
           evaled = require('util').inspect(evaled);
        
           const embed = new Discord.RichEmbed()
           .setTitle(`EVAL ✅`)
       
           .setColor("0x4f351")
           .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(evaled)}\`\`\``)
       
         message.channel.send({embed});
       } catch (err) {
         const embed = new Discord.RichEmbed()
         .setTitle(`EVAL ❌`)
  
         .setColor("0xff0202")
         .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(err)}\`\`\``)
    
         message.channel.send({embed});
       }
	}
    if (message.content.startsWith(p + `hug`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user  =  client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
		weeb.random('hug', { hidden: false, nsfw: false, filetype: 'gif'}).then(t => {
    let embed = new Discord.RichEmbed()
          .setDescription(`${user} **обнял(а)** ${user1}`)
          .setImage(t.url)
          .setColor(message.member.highestRole.hexColor)
    .setFooter(`Команда: ;hug @user | ${message.guild.name}`) 
    .setTimestamp();
      msg.edit({embed}).then(function(message) {
              message.react("🙌")
          }).catch(function() {});
    });
	});
    }
    if (message.content.startsWith(p + `pat`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user1 = message.author;
        }
        message.channel.send('.').then(msg => {
            weeb.random('pat', { hidden: false, nsfw: false, filetype: 'gif'}).then(t => {
    const selfbite = new Discord.RichEmbed()
    .setDescription(`${user} **погладила по голове** <@476739055392915486>`)
    .setImage(t.url)
    .setColor(message.member.highestRole.hexColor)
    .setFooter(`Команда: ;pat @user | ${message.guild.name}`) 
    .setTimestamp(); 
if (!user1 || user1.id === user.id) return message.channel.send(selfbite).then(function(message) {
        message.react("🤚")
    }).catch(function() {});
let embed = new Discord.RichEmbed()
    .setDescription(`${user} **Погладила по голове** ${user1}`)
    .setImage(t.url)
    .setColor(message.member.highestRole.hexColor)
    .setFooter(`Команда: ;pat @user | ${message.guild.name}`) 
    .setTimestamp(); 
      msg.edit({embed}).then(function(message) {
              message.react("🤚")
          }).catch(function() {});
    });
	});
    }
        if (message.content.startsWith(p + `kiss`)) {
            message.delete();
            let user = message.author;
            let user1 = message.mentions.users.first();
            if (!user1 || user1.id === user.id) {
                user = client.user;
                user1 = message.author;
            }
            message.channel.send('Загрузка...').then(msg => {
                request('https://nekos.life/api/v2/img/kiss', function (error, response, body) {
                    try {
                        let arr = JSON.parse(body);
                        let embed = new Discord.RichEmbed()
                            .setDescription(`${user} **поцеловал(а)** ${user1}`)
                            .setImage(arr['url'])
                            .setColor(message.member.highestRole.hexColor)
                            .setFooter(`Команда: ;kiss @user | [${message.guild.name}`) 
                            .setTimestamp();
                            msg.edit({embed
                            }).then(function(message) {
                                message.react("💗")
                            }).catch(function() {});
                            } catch (e) {
                           console.log(e)
                     }
                });
            });
        }
    if (message.content.startsWith(p + `slap`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/slap', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **ударил(а)** ${user1}`)
                        .setImage(arr['url'])
                        .setColor(message.member.highestRole.hexColor)
                        .setFooter(`Команда: ;slap @user | ${message.guild.name}`)  
                        .setTimestamp();
                        msg.edit({embed
                        }).then(function(message) {
                            message.react("👊")
                        }).catch(function() {});
                        } catch (e) {
                       console.log(e)
                 }
            });
        });
    }
    if (message.content.startsWith(p + `poke`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/poke', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **тыкнул(а) в** ${user1}`)
                        .setImage(arr['url'])
                        .setColor(message.member.highestRole.hexColor)
                        .setFooter(`Команда: ;poke @user | ${message.guild.name}`) 
                        .setTimestamp();
                        msg.edit({embed
                        }).then(function(message) {
                            message.react("👉")
                        }).catch(function() {});
                        } catch (e) {
                       console.log(e)
                 }
            });
        });
    }
    if (message.content.startsWith(p + `gasm`)) {
        if (!message.channel.nsfw) return message.channel.send("**Иди в nsfw!**");
        message.delete();
        message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/gasm', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor(message.member.highestRole.hexColor)
                        .setFooter(`Команда: ;gasm | ${message.guild.name}`) 
                        .setTimestamp();
                    msg.edit({embed});
                } catch (e) {
               console.log(e)
                 }
            });
        });
    }
    if (message.content.startsWith(p + `cuddle`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/cuddle', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **прижал(а)ся к** ${user1}`)
                        .setImage(arr['url'])
                        .setColor(message.member.highestRole.hexColor)
                        .setFooter(`Команда: ;cuddle @user | ${message.guild.name}`) 
                        .setTimestamp();
                        msg.edit({embed
                        }).then(function(message) {
                            message.react("👐")
                        }).catch(function() {});
                        } catch (e) {
                       console.log(e)
                 }
            });
        });
    }
    if (message.content.startsWith(p + `hentai`)) {
        if (!message.channel.nsfw) return message.channel.send("**Иди в nsfw!**");
        message.delete();
        message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/hentai', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(message.author.username + ' Главное не дрочи...')
                        .setImage(arr['url'])
                        .setColor(message.member.highestRole.hexColor)
                        .setFooter(`Команда: ;hentai | ${message.guild.name}`) 
                        .setTimestamp(); 
                    msg.edit({embed});
                } catch (e) {
               console.log(e)
                 }
            });
        });
    }
    if (message.content.startsWith(p + `tickle`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/tickle', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **пощекотал(а)** ${user1}`)
                        .setImage(arr['url'])
                        .setColor(message.member.highestRole.hexColor)
                        .setFooter(`Команда: ;tickle @user | ${message.guild.name}`) 
                        .setTimestamp(); 
                        msg.edit({embed
                        }).then(function(message) {
                            message.react("🤣")
                        }).catch(function() {});
                        } catch (e) {
                       console.log(e)
                 }
            });
        });
    }
	if (message.content.startsWith(p + `angry`)) {
		message.delete();
		 let user = message.author;
        let user1 = message.mentions.users.first();
		const urls = ['https://data.whicdn.com/images/33545835/original.gif', 'http://i.imgur.com/P8oGR3u.gif', 'https://data.whicdn.com/images/283566570/original.gif', 'https://i.pinimg.com/originals/ac/e0/61/ace061704cb13602222916265471073e.gif', 'http://media.giphy.com/media/hFVI29iuk2wFy/giphy.gif', 'https://media.giphy.com/media/o7C2BKtp6gSd2/giphy.gif', 'https://i.pinimg.com/originals/83/32/8b/83328b8fd0238f801e61ca07faa6a000.gif', 'https://data.whicdn.com/images/104935742/original.gif', 'http://roxannemodafferi.net/RBlog/wp-content/uploads/2018/05/angry-anime-girl-gif.gif', 'https://i.pinimg.com/originals/13/e2/76/13e2761232d7671a9c2663aca5b9dbf2.gif']
		const selfbite = new Discord.RichEmbed()
                        .setDescription(`${user} **злится**`)
                        .setImage((urls[Math.floor(Math.random() * urls.length)]))
                        .setColor(message.member.highestRole.hexColor)
                        .setFooter(`Команда: ;angry @user | ${message.guild.name}`) 
                        .setTimestamp(); 
        if (!user1 || user1.id === user.id) return message.channel.send(selfbite).then(function(message) {
                            message.react("😠")
                        }).catch(function() {});
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **злится на** ${user1}`)
                        .setImage((urls[Math.floor(Math.random() * urls.length)]))
                        .setColor(message.member.highestRole.hexColor)
                        .setFooter(`Команда: ;angry @user | ${message.guild.name}`)
                        .setTimestamp(); 
                        message.channel.send(embed
                        ).then(function(message) {
                            message.react("😠")
                        }).catch(function() {});
    }
	if (message.content.startsWith(p + `bite`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
		weeb.random('bite', { hidden: false, nsfw: false, filetype: 'gif'}).then(t => {
		const selfbite = new Discord.RichEmbed()
                        .setDescription(`${user} **укусил(а)** себя`)
                        .setImage("https://78.media.tumblr.com/bbea36e4585df159eb4a339efc97313a/tumblr_ormo8ikFnO1wn2b96o1_500.gif")
                        .setColor(message.member.highestRole.hexColor)
                        .setFooter(`Команда: ;bite @user | ${message.guild.name}`)
                        .setTimestamp(); 
        if (!user1 || user1.id === user.id) return message.channel.send(selfbite).then(function(message) {
                            message.react("😱")
                        }).catch(function() {});
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **укусил(а)** ${user1}`)
                        .setImage(t.url)
                        .setColor(message.member.highestRole.hexColor)
                        .setFooter(`Команда: ;bite @user | ${message.guild.name}`)
                        .setTimestamp(); 
                        message.channel.send(embed
                        ).then(function(message) {
                            message.react("😱")
                        }).catch(function() {});
		});
    }
	if (message.content.startsWith(p + `smoke`)) {
        let user = message.author;
				      message.channel.send('Загрузка...').then(msg => {
		     const urls = ['https://thumbs.gfycat.com/SphericalDependentHalibut-small.gif', 'https://78.media.tumblr.com/7746fca41c6782df47d7cd6925adba6f/tumblr_orcpabAWTV1sqhf08o1_500.gif', 'http://animeonline.su/uploads/posts/2015-06/1435137244_end.gif', 'https://media.giphy.com/media/hnRXZQiHWTtTO/giphy.gif', 'https://media.giphy.com/media/1k6S4iyfFyTRK/giphy.gif' ,'https://i.pinimg.com/originals/10/4b/9e/104b9ea0f2dea93d9374b092b82e1256.gif', 'https://s3-eu-west-1.amazonaws.com/files.surfory.com/uploads/2015/2/14/54dd05a41f395d0b468b465a/54df5bf31f395daa438b4c8e.gif', 'http://s8.favim.com/orig/150926/anime-guy-black-and-white-gif-smoking-Favim.com-3361618.gif', 'http://img0.safereactor.cc/pics/post/anime-gif-Anime-Subete-ga-F-ni-Naru-The-Perfect-Insider-2638766.gif', 'http://s017.radikal.ru/i424/1111/2b/ecae2f095abb.gif', 'https://78.media.tumblr.com/5bec6027d1c27194e6d3d5863c739d5f/tumblr_ozmfkvy8Pc1urnatuo1_500.gif', 'https://78.media.tumblr.com/6ac2528e3cde0894adb41fbc4e56def0/tumblr_owayv78WNu1vbfbhho1_500.gif'];
		     let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **выкурил(а) сигарету.**`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor(message.member.highestRole.hexColor)
                        .setFooter(`Команда: ;smoke | ${message.guild.name}`)
                        .setTimestamp();
                    msg.edit({embed}).then(function(message) {
                            message.react("🚬")
                        }).catch(function() {});
        });
    }
	if (message.content.startsWith(p + `sleep`)) {
        let user = message.author;
				      message.channel.send('Загрузка...').then(msg => {
					      const urls = ['https://media1.tenor.com/images/0d78943ec2d800847bfe98c0a5e03cd3/tenor.gif?itemid=11081269','https://thumbs.gfycat.com/DrearyDenseFlicker-size_restricted.gif','https://i.pinimg.com/originals/24/3e/2f/243e2f0cf4ad9ef9fb9def7594ec2c85.gif','https://thumbs.gfycat.com/SadWiltedHackee-small.gif','https://media.tenor.com/images/9bbd2789c5eaf20198205ca4976dda75/tenor.gif','https://data.whicdn.com/images/233322524/original.gif','https://gifer.com/i/8hQS.gif','http://gifimage.net/wp-content/uploads/2018/05/sleep-anime-gif-4.gif','https://media1.tenor.com/images/6f04cbe23fa862cd1e7da987c2b0308e/tenor.gif?itemid=9187874','https://i.pinimg.com/originals/92/8c/d7/928cd76c937e2f4c6d998651c2c88d58.gif','https://vignette.wikia.nocookie.net/kancolle/images/0/08/Umaru_sleeping.gif/revision/latest?cb=20161209020902','https://gifer.com/i/WDf.gif','https://i.imgur.com/Sb8Wls5.gif','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7Otqu-VpJAr92BOMTtSJkJLxMWBD_l6Yd41tCkxKzDxUWOCB9g','https://i.kym-cdn.com/photos/images/original/001/115/759/095.gif'];//12321312312
					      let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **пошел(шла) спать.**`)//мне за это вообще платили??\\
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor(message.member.highestRole.hexColor)
			.setFooter(`Команда: ;sleep | ${message.guild.name}`)
		     .setTimestamp();
                    msg.edit({embed}).then(function(message) {
                            message.react("💤")
                        }).catch(function() {});
        });
    }
	if (message.content.startsWith(p + `rip`)) {
        let user = message.author;
		message.channel.send('Загрузка...').then(msg => {
         const urls = ['https://lh3.googleusercontent.com/-buUYgrq_wKc/VRO0gc7EHqI/AAAAAAAAAG0/7Ntm-6fFkk4/w500-h288/naomi%2Bsuicide%2Bgif.gif', 'https://uploads.disquscdn.com/images/2dbbc921cb13de3198a3b6ae0099e725bfb0c80129d70bacf47819fb765deef1.gif', 'http://37.media.tumblr.com/tumblr_m7ram5jIAA1qzbqw1o1_250.gif', 'https://i.pinimg.com/originals/79/2f/37/792f37131d123c568e7114b7b829e572.gif', 'http://thisisinfamous.com/wp-content/uploads/2014/12/tumblr_ngjphxwU011t3zq0no1_400.gif', 'httpsimage.net/wp-content/uploads/2017/07/anime-suicide-gif-15.gif', 'https://data.whicdn.com/images/290510883/original.gif', 'https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif', 'https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706', 'http://38.media.tumblr.com/c75ba943c38bad612d9e722ee3142bb3/tumblr_n418yewq601tubxydo1_500.gif', 'http://66.media.tumblr.com/e2ab4fd11151e5e8acc627254bb7594d/tumblr_mo1ef0QwUS1s0pcfao1_500.gif', 'https://i.gifer.com/3ZvS.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-8.gif', 'https://i.pinimg.com/originals/a5/f1/96/a5f196464ed42f493b95a600099e83b9.gif', 'https://cdn60.picsart.com/182542841000202.gif?r1024x1024', 'https://zippy.gfycat.com/EquatorialGleefulArabianhorse.gif', 'http://data.whicdn.com/images/107593752/large.gif', 'https://i.gifer.com/Rk5D.gif', 'https://pa1.narvii.com/6535/3eb238ede3ccbc364d487c60f9d8b9c9fcb4f515_hq.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-2.gif'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **совершил(а) суицид..**`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor(message.member.highestRole.hexColor)
                        .setFooter(`Команда: ;rip | ${message.guild.name}`) 
                        .setTimestamp();
                        msg.edit({embed}).then(function(message) {
                            message.react("☠")
                        }).catch(function() {});
                  });
                  }
	if (message.content.startsWith(p + `dance`)) {
        let user = message.author;
				      message.channel.send('Загрузка...').then(msg => {
					      weeb.random('dance', { hidden: false, nsfw: false, filetype: 'gif'}).then(t => {
		     let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **начал(а) танцевать.**`)
                        .setImage(t.url)
                        .setColor(message.member.highestRole.hexColor)
			.setFooter(`Команда: ;dance | ${message.guild.name}`)
		     .setTimestamp();
                    msg.edit({embed}).then(function(message) {
                            message.react("👯")
                        }).catch(function() {});
        });
				      });
    }
    if (message.content.startsWith(p + `cookie`)) {
        let user = message.author;
        let user1 = message.mentions.users.first();
        message.channel.send('Загрузка...').then(msg => {
            const urls = [
"http://36.media.tumblr.com/7bd24d753128822e0652319b385f68ed/tumblr_notv05MRNm1s9pgrdo1_1280.jpg",
"https://thumbs.gfycat.com/GoodPlasticEyelashpitviper-max-1mb.gif",
"https://media.giphy.com/media/SKiPNljqH8Ub6/giphy.gif",
"https://media.giphy.com/media/O8XZwrrU4NQC4/giphy-facebook_s.jpg",
"https://www.1999.co.jp/itbig35/10358248.jpg",
"https://honeysanime.com/wp-content/uploads/2015/09/sailor-moon-usagi-cookie--560x377.png",
"http://4.bp.blogspot.com/-fkkpC6FFETQ/T8S0ro_WHeI/AAAAAAAAA8E/q95UOz7jDQg/s1600/anime+cookiess_15.jpg",
"http://i.imgur.com/u4HdC.jpg",
"http://dessertrecipescorner.com/wp-content/uploads/2017/01/crunchy-and-adorable-checkerboar.jpg",
"https://blog.manga.tv/wp-content/uploads/2013/02/Cookie-Totoro-cookies-mon-voisin-my-neighbour-ghibli-miyazaki-anime-online-streaming-manga-tv-legal-gratuit-8.jpg",
"https://data.whicdn.com/images/72988865/large.png",
"https://data.whicdn.com/images/276671856/original.gif",
"http://favim.com/media/uploads/images/orig/140321/anime-food-Favim.com-1522596.gif",
"https://i.pinimg.com/originals/c5/d0/ab/c5d0ab213a38c377d1139ee57fa62e32.jpg",
"http://farm3.staticflickr.com/2894/9330100800_8535169e0f_b.jpg",
"http://i.imgur.com/E1AWI.jpg",
"https://itadakimasuanime.files.wordpress.com/2013/03/checkerboard-cookies-saint-seiya.jpg"
];
let embed = new Discord.RichEmbed()
.setDescription(`${user} **Дал(а) печение** ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor(message.member.highestRole.hexColor)
.setFooter(`Команда: ;cookie @user | ${message.guild.name}`)
.setTimestamp();
msg.edit({embed}).then(function(message) {
    message.react("🍪")
}).catch(function() {});
});
}
if (message.content.startsWith(p + `sad`)) {
    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://avatars.mds.yandex.net/get-pdb/805781/67906d0f-bda7-47a3-92d2-4ce1b4f728fd/orig",
"https://pa1.narvii.com/5821/76ddb33055d9574ccd11e051df968b4fbe5dcd18_hq.gif",
"https://i.pinimg.com/originals/94/2f/84/942f84de5d7471ab9751f2ba86e63b60.gif",
"https://steamusercontent-a.akamaihd.net/ugc/919176676388266575/8BA8145FF1760B8E60083656286E266B0DED1AA2/",
"https://pa1.narvii.com/5696/d3b317bb82fc086da90220a72cf6bfdc779e60e7_hq.gif",
"https://media.giphy.com/media/Gy7OHqaWnJBO8/giphy.gif",
"https://steamusercontent-a.akamaihd.net/ugc/2425628008261954271/007DB92C3AF029AFBBB07DFEEB1712F8B84DDDC7/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C500%3A250&composite-to=*,*%7C500%3A250&background-color=black",
"http://33.media.tumblr.com/8c701e63bdc00912c845953d57ea6097/tumblr_n3enupTctr1s2fmtuo1_500.gif",
"http://68.media.tumblr.com/4851cb0953a11f1e7a1da93c81a5bd97/tumblr_nz64zkMqPi1qe1bdeo1_500.gif",
"http://68.media.tumblr.com/2c6646ae33f53db3c4b46e2784debe61/tumblr_og7o1nlSWo1vctqxpo1_500.gif",
"http://68.media.tumblr.com/2190867b663ede80c0eea49fa5f9ac2b/tumblr_og7o2dhSc71vctqxpo1_500.gif",
"https://steamusercontent-a.akamaihd.net/ugc/923672032480155593/F58137E290C57DAA9FB7B3ED1EAC69777C76DCCF/",
"http://gifimage.net/wp-content/uploads/2017/07/anime-sad-gif-9.gif",
"http://gifimage.net/wp-content/uploads/2017/07/anime-sad-gif-15.gif",
"https://media.giphy.com/media/FB5EOw0CaaQM0/giphy.gif",
"https://thumbs.gfycat.com/CommonDownrightAndeancondor-small.gif",
"https://i.pinimg.com/originals/19/42/07/194207dd9df329dcc66bf0bc07eefe8c.gif"
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **Ушел(ла) в печаль**`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor(message.member.highestRole.hexColor)
	.setFooter(`Команда: ;sad | ${message.guild.name}`) 
	.setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("😢")
      }).catch(function() {});
});
}
if (message.content.startsWith(p + `lick`)) {
    let user = message.author;
    let user1 = message.mentions.users.first();
    message.channel.send('Загрузка...').then(msg => {
	    weeb.random('lick', { hidden: false, nsfw: false, filetype: 'gif' }).then(t => {
   
	let embed = new Discord.RichEmbed()
	.setDescription(`${user} **Лизнул(а)** ${user1}`)
	.setImage(t.url)
	.setColor(message.member.highestRole.hexColor)
	.setFooter(`Команда: ;lick @user | ${message.guild.name}`)  
	.setTimestamp();
	msg.edit({embed}).then(function(message) {
	message.react("😛")
	}).catch(function() {});
	});
    });
}
if (message.content.startsWith(p + `nom`)) {
    let user = message.author;
    let user1 = message.mentions.users.first();
    message.channel.send('Загрузка...').then(msg => {
        weeb.random('nom', { hidden: false, nsfw: false, filetype: 'gif' }).then(t => {
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **Дал(а) поесть**${user1}`)
      .setImage(t.url)
      .setColor(message.member.highestRole.hexColor)
	.setFooter(`Команда: ;nom @user | ${message.guild.name}`)
	.setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("🍱")
      }).catch(function() {});
});
    });
}
if (message.content.startsWith(p + `hi`)) {
    message.delete();
const urls = [
    "https://orig00.deviantart.net/8d1d/f/2010/319/4/b/hi_____animated_by_0febris0-d2wu3lv.gif",//1
"https://steamusercontent-a.akamaihd.net/ugc/1617175662597177927/732757601CDBF2E52C41EF3349035A337BB119D7/",//2
"https://image.noelshack.com/fichiers/2018/17/3/1524685070-df0a9rx.gif",//3
"https://thumbs.gfycat.com/HatefulBlindFunnelweaverspider-size_restricted.gif",//4
"https://thumbs.gfycat.com/AdorableFormalAngwantibo-size_restricted.gif",//5
"https://pa1.narvii.com/6505/ad5549ff5f252cd35e393f88c55d474ab83fd46d_hq.gif",//6
"http://gifimage.net/wp-content/uploads/2017/10/hi-anime-gif-9.gif",//7
"https://kingmarsblog.files.wordpress.com/2016/08/c5612569563abae86b811071616e4c07f5b3aa18_hq.gif?w=882",//8
"https://media.tenor.com/images/b96f06f81933f49b6d24577017eb4edd/tenor.gif",//9
"https://media.giphy.com/media/yyVph7ANKftIs/giphy.gif",//10
"https://media1.tenor.com/images/c2e21a9d8e17c1d335166dbcbe0bd1bf/tenor.gif?itemid=5459102",//11
"http://gifimage.net/wp-content/uploads/2017/10/hi-anime-gif-11.gif",//12
"https://data.whicdn.com/images/233897767/original.gif",//13
"http://i.imgbox.com/AYqk4UJk.gif",//14
"https://cdn105.picsart.com/203730462001202.gif?r1024x1024",//15
"https://thumbs.gfycat.com/HauntingNeighboringBarracuda-max-1mb.gif",//16
"http://pa1.narvii.com/5935/a557baffc06658c5b3c2932eb0bc496cb112d04c_00.gif"//17
];
    let user = message.author;
    let user1 = message.mentions.users.first();
    const selfbite = new Discord.RichEmbed()
                    .setDescription(message.author+` **сказал(а) всем привет**`)
                    .setImage((urls[Math.floor(Math.random() * urls.length)]))
                    .setColor(message.member.highestRole.hexColor)
                    .setFooter(`Команда: ;hi | ${message.guild.name}`) 
                    .setTimestamp(); 
    if (!user1 || user1.id === user.id) return message.channel.send(selfbite).then(function(message) {
                        message.react("👋")
                    }).catch(function() {});
                let embed = new Discord.RichEmbed()
                    .setDescription(message.author+` **сказал(а) привет** `+message.mentions.users.first())
                    .setImage((urls[Math.floor(Math.random() * urls.length)]))
                    .setColor(message.member.highestRole.hexColor)
                    .setFooter(`Команда: ;hi @user | ${message.guild.name}`)
                    .setTimestamp(); 
                    message.channel.send(embed
                    ).then(function(message) {
                        message.react("👋")
                    }).catch(function() {});
}
if (message.content.startsWith(p + `beer`)) {
    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://gifer.com/i/5TNn.gif",//1
"https://vignette.wikia.nocookie.net/simpsons/images/2/29/Beer_explosion.gif/revision/latest?cb=20170620212014",//2
"https://pa1.narvii.com/5837/c09e2864bfcbd5bf8cc734c5fd69422296c44608_hq.gif",//3
"https://media1.tenor.com/images/a3ec9393688af6debf5625d77c0ec401/tenor.gif?itemid=5474067",//4
"https://i.gifer.com/IcT8.gif",//5
"https://thumbs.gfycat.com/ImportantTestyLacewing-max-1mb.gif",//6
"http://i.imgur.com/k977t5w.gif",//7
"https://gifer.com/i/Qvi.gif",//8
"http://25.media.tumblr.com/09a7dbfe31d3855794c5fb7215264fa7/tumblr_mfrzxbxoXq1s1xlbuo1_500.gif",//9
"https://thumbs.gfycat.com/CalmEminentDromedary-size_restricted.gif",//10
"https://i.pinimg.com/originals/fa/6e/5c/fa6e5cedcaa621052ec865fab6d33ac5.gif",//11
"https://media.giphy.com/media/zbMUQKqHZQ4eY/giphy.gif",//12
"https://pa1.narvii.com/5843/602066d1cc987df37c05152d5756c533a73c8947_hq.gif",//13
"https://data.whicdn.com/images/247827296/original.gif",//14
"https://media1.tenor.com/images/f6ae078aca1b3db925a76afebe1749ef/tenor.gif?itemid=7460617",//15
"https://3.bp.blogspot.com/-pjrh7AyOG6Y/VqMgqo8q4tI/AAAAAAAAW1I/MRCIdMLRJ9Y/s1600/Omake%2BGif%2BAnime%2B-%2BGATE%2B-%2BEpisode%2B15%2B-%2BItami%2BChugs%2BBeer.gif",//16
"https://media1.tenor.com/images/4657ab00910adb50ff814f8a54f210dd/tenor.gif?itemid=5081999"//17
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **Выпил(а) пивасика**`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor(message.member.highestRole.hexColor)
.setFooter(`Команда: ;beer | ${message.guild.name}`)
.setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("🍺")
      }).catch(function() {});
});
}
if (message.content.startsWith(p + 'sex')) {
    if (!message.channel.nsfw) return message.channel.send("**Иди в nsfw!**");
    let user = message.author;
    let user1 = message.mentions.users.first();
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VG0hwWZdCDbyyBRyYKQ6A5YLvV64SaQEFhb8-f3gs_TQJIwdbQ",
"https://78.media.tumblr.com/tumblr_mad123wCwR1rdw7hvo1_500.gif",
"https://images.sex.com/images/pinporn/2013/09/20/620/3677439.gif",
"https://78.media.tumblr.com/tumblr_mad123wCwR1rdw7hvo1_500.gif",
"https://images.sex.com/images/pinporn/2013/08/23/620/3492045.gif",
"http://img0.joyreactor.com/pics/post/xxx-files-fandoms-Hentai-anime-1367984.gif",
"http://juicygif.com/albums/userpics/2015y/02/26/15/1/8649-submit-fine-gifs-to-my-blog-a-world-of-hentai-gifssave-amp-play-it-offline-on-iphone.gif",
"https://static4.hentai-image.com/upload/20170828/330/336999/1.gif",
"https://x.imagefapusercontent.com/u/ron2007/3601487/1845103806/006.gif"
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **выебал** ${user1}`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor(message.member.highestRole.hexColor)
	.setFooter(`Команда: ;sex @user | ${message.guild.name}`) 
	.setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("👄")
      }).catch(function() {});
});
}
if (message.content.startsWith(p + `coffee`)) {
    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://media1.tenor.com/images/41ca1498e20e7983bfb5be3a3c12d588/tenor.gif?itemid=10003402",//1
"https://media1.tenor.com/images/878b7d53a6b04bf09a222e9175a06b72/tenor.gif?itemid=10003333",//2
"https://i.pinimg.com/originals/90/0d/40/900d4092592c8c76514825702e0b1871.gif",//3
"https://i.gifer.com/ITNl.gif",//4
"https://media1.tenor.com/images/e38a9e8fe558bf48893f4c0069aa2b44/tenor.gif?itemid=5554691",//5
"https://gifer.com/i/CIaV.gif",//6
"http://37.media.tumblr.com/7b0291d11e0d7cd705d46a361606bd89/tumblr_n8vbqjY3sg1r11qslo2_500.gif",//7
"https://media.giphy.com/media/SCCjSLGQKfu6I/giphy.gif",//8
"https://gifer.com/i/DWbF.gif",//9
"https://data.whicdn.com/images/219385340/original.gif",//10
"https://i.pinimg.com/originals/b4/84/5c/b4845c9057251890188a121bdc9fa7f5.gif",//11
"https://i.imgur.com/Vg8BJBb.gif",//12
"https://rinscribble.files.wordpress.com/2016/09/tumblr_mlig9kpqkk1s55xs5o1_500.gif",//13
"https://cdn157.picsart.com/219546902011202.gif?r1024x1024",//14
"https://gifer.com/i/w3f.gif",//15
"https://data.whicdn.com/images/298743211/original.gif",//16
"https://media.giphy.com/media/OGzFu4KQuZ2/giphy.gif"//17
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **Выпил(а) кофе**`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor(message.member.highestRole.hexColor)
	.setFooter(`Команда: ;coffee | ${message.guild.name}`)
	.setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("☕")
      }).catch(function() {});
});
}
if (message.content.startsWith(p + `flower`)) {
    let user = message.author;
    let user1 = message.mentions.users.first();
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://gifer.com/i/ODsd.gif",//1
"https://vignette.wikia.nocookie.net/disney/images/d/d6/Tumblr_na3a2pu2N81ssaw6co2_500.gif/revision/latest?cb=20150214072201",//2
"https://data.whicdn.com/images/287290280/original.gif",//3
"https://gifer.com/i/3aXw.gif",//4
"https://i.pinimg.com/originals/fe/1b/3d/fe1b3d3f1859e3e114a523f022181947.gif",//5
"http://gifimage.net/wp-content/uploads/2017/09/anime-flower-gif-10.gif",//6
"http://www.animatedimages.org/data/media/50/animated-flower-image-0064.gif",//7
"https://uploads.disquscdn.com/images/3cd22412e5ff620ffe1b97097ac40252bbe5944db339a9811d5fb7b4a1e2253f.gif",//8
"https://cdn120.picsart.com/212974394002202.gif?r1024x1024",//9
"https://thumbs.gfycat.com/CourageousDamagedEkaltadeta-max-1mb.gif",//10
"https://i.pinimg.com/originals/d9/c0/84/d9c084bc7cbef715350da856531f0583.gif",//11
"https://media1.tenor.com/images/aa1ffffcc9fbb3742b719f84f48dc618/tenor.gif?itemid=9490271",//12
"https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/0/0e/Flower.gif/revision/latest?cb=20161228022902",//13
"https://i.pinimg.com/originals/8e/9b/af/8e9bafb5a07a3d340c906c835d186e8c.gif",//14
"http://blvcccvrd.com/images/spring-flower-cartoon-pictures-7.gif",//15
"https://78.media.tumblr.com/71e352c8a081e7bb09041a12adda9cf6/tumblr_p7rti3n5Jt1wg7k9po1_500.gif",//16
"http://s6.favim.com/orig/151201/anime-flowers-gif-girl-Favim.com-3684436.gif"//17
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **Подарил(а) цветы** ${user1}`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor(message.member.highestRole.hexColor)
	.setFooter(`Команда: ;flower @user | ${message.guild.name}`)
	.setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("💐")
      }).catch(function() {});
});
}
/*
if (message.content.startsWith(p + `название команды`)) {
    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
""
];
let embed = new Discord.RichEmbed()
      .setDescription(`Титл`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor(message.member.highestRole.hexColor)
.setFooter(server_name+"| ;команда")
.setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("эмоджи")
      }).catch(function() {});
});
}
*/
if (message.content.startsWith(p + `tea`)) {
    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://gifer.com/i/DWbF.gif",
"https://i.pinimg.com/originals/40/5e/f2/405ef2ad9f258c156f451b89f6bbe882.gif",
"https://media1.tenor.com/images/da0801a732b0340d8e723cbaeb7a4190/tenor.gif?itemid=10219968",
"https://cdn52.picsart.com/171700590000201.gif?r1024x1024",
"http://i.imgur.com/IS0nkrw.gif",
"http://data.whicdn.com/images/15175757/large.gif",
"http://joor.me/uploads/block/2017-01-13/b2/48/OCAG2akdl0mWI-55H24x5gQWjYieFqxi.gif",
"https://i.pinimg.com/originals/48/8b/4b/488b4bb42b11b7847c4d753ca0ace6ef.gif",
"https://vignette.wikia.nocookie.net/caravaneer2/images/7/73/Yuno_Cute.gif/revision/latest?cb=20170417235325",
"https://media.giphy.com/media/sdX9dcy0EcZyM/source.gif",
"https://78.media.tumblr.com/36f70582cb88d7f7fdc092574eabb76c/tumblr_oju3esp58b1uc9x1zo1_500.gif",
"https://media.giphy.com/media/x44paVW9zFZKw/giphy.gif",
"https://media.tenor.com/images/f1d92c2e1731253deb643de2a8d5b883/tenor.gif",
"https://i.pinimg.com/originals/e6/ed/e7/e6ede70528b7730aa39c6b0121f91bf2.gif",
"https://data.whicdn.com/images/240039491/original.gif",
"https://i.pinimg.com/originals/e0/00/10/e000104460fcf7f1e68666857efe6b78.gif",
"https://i.pinimg.com/originals/d5/ab/db/d5abdbeebd8f38054b775baf54023097.gif"
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **выпил(а) чая**`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor(message.member.highestRole.hexColor)
	.setFooter(`Команда: ;tea @user | ${message.guild.name}`)
	.setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("☕")
      }).catch(function() {});
});
}
if (message.content.startsWith(p + `neko`)) {
    message.channel.send('Загрузка...').then(msg => {
        request('https://nekos.life/api/v2/img/neko', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setDescription(`NEKOSSS! :D`)
                    .setImage(arr['url'])
                    .setColor(message.member.highestRole.hexColor)
		    .setFooter(`Команда: ;neko | ${message.guild.name}`)
		    .setTimestamp();
                    msg.edit({embed
                    }).then(function(message) {
                        message.react("🤰")
                    }).catch(function() {});
                    } catch (e) {
                   console.log(e)
             }
        });
    });
}
if (message.content.startsWith(p + `||test`)) {
    message.delete();
    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://media.discordapp.net/attachments/466199224254595072/480754949689442309/2x.gif",
"https://media.discordapp.net/attachments/466199224254595072/480754182325010442/1x.gif"
];
let embed = new Discord.RichEmbed()
      .setDescription(`**Тест бота**`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM')
      .setFooter(`Команда: ;||test | ${message.guild.name}`)
		    .setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("☑")
      }).catch(function() {});
});
}
    if(message.content.startsWith(p + 'poll')) {
		message.delete().catch(O_o => {});
		const say_poll_embed = args.join(" ");
		const embed = new Discord.RichEmbed()
			.setColor(message.member.highestRole.hexColor)
			.setDescription(say_poll_embed)
            message.channel.send({
                embed
            }).then(function(message) {
                message.react("✅")
                message.react("❎")
                message.react("🔘")
            }).catch(function() {});
        }
        if (message.author.bot) return;
        if (message.content.startsWith(p + 'ping')) {
        const embed = new Discord.RichEmbed()
    .setColor(message.member.highestRole.hexColor)
    .setDescription('\n **Pong!** `' + `${Date.now() - message.createdTimestamp}` + ' ms` \n')
    .setFooter(`Команда: ;ping | ${message.guild.name}`)
		    .setTimestamp();  
    message.channel.send({embed});
    }
//help 
if(message.content.startsWith(p + `help`)) {
    message.delete();
    message.author.sendCode("css", ";hug [user]          обнять человека \n;pat [user]          погладить человека \n;kiss [user]         поцеловать человека \n;poke [user]         тыкнуть человека \n;cuddle [user]       прижатся к человека \n;tickle [user]       пощекотать человека \n;angry               начать злится \n;sleep               пойти спать \n;smoke               покурить сигаретку \n;dance               начать танцевать \n;rip                 пойти и умереть \n;hi                  поприветствовать всех \n;sad                 уйти в печаль \n;beer                начать бухать \n;coffee              выпить чашку кофе \n;tea                 выпить чашку чая \n;bute [user]         укусить человека \n;lick [user]         лизнуть человека \n;cookie [user]       дать печеньку человеку \n;nom [user]          дать поесть человеку \n;slap [user]         ударить человека \n;flowet [user]       подарить цветы человеку \n\n;sms [user]          написать смс человеку \n;ship                посмотреть любовь \n;8ball               ответить на вопрос \n;rsp                 поиграть в игру к.н.б. \n\n;ping                посмотреть пинг \n;help                посмотреть команды \n;info-bot            узнать инфу о боте \n\n;gasm                испытать оргазм \n;hentai              посмотреть хентай \n;sex [user]          выебать человека").catch(err => message.reply("похоже у вас заблокированы личные сообщения"))
}});
//статус
    client.on('ready', () => {
        client.user.setActivity("жаркие огни 🔥| ;help", {type: "STREAMING"});
    });
