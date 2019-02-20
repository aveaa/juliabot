const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client({disableEveryone : true});
const ms = require('ms');

let id = '476978677872328705';
let p = "j!"
let admp = "j@"
let c = "#9d26ad"

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

client.login(process.env.BOT_TOKEN);
//команды
const wrapper = require('weeb-wrapper');
const weeb = new wrapper("Wolke "+process.env.WEEB_TOKEN);
client.on('ready', () => {
    function randomStatus() {
        let status = [`${client.guilds.size} servers!`, `j!help`];
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus]);
 }; setInterval(randomStatus, 15000)
console.log(`---ready---\nservers: ${client.guilds.size}`)	
});

client.on("guildCreate", guild => {
  const logsServerJoin = client.channels.get('517746904382308352');
  const embed = new Discord.RichEmbed()
  .setTitle(guild.name)
  .setDescription("Новый сервер.")
  .setColor("00ff00")
  .setThumbnail(guild.iconUrl)
  .addField("Количество людей:", guild.memberCount)
  .addField("Количество ролей:", guild.roles.size)
  .addField("Owner", guild.owner.user.tag)
  .addField("ID:", guild.id)
   logsServerJoin.send(guild.id, embed);
   logsServerJoin.send("``` ```");
});    
client.on("guildDelete", guild => {
  const logsServerLeave = client.channels.get('517746904382308352');
  const embed = new Discord.RichEmbed()
  .setTitle(guild.name)
  .setDescription("Я был удалён с сервера")
  .setColor("ff0000")
  .setThumbnail(guild.iconUrl)
  .addField("Количество людей:", guild.memberCount)
  .addField("Количество ролей:", guild.roles.size)
  .addField("Owner", guild.owner.user.tag)
  .addField("ID:", guild.id)
 
 	
  logsServerLeave.send(embed);
  logsServerLeave.send("``` ```");
});
client.on('message', message => {
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	if(message.author.bot) return;

/*if(message.content.startsWith(p + 'say')) {
    let say = message.content.slice((p + 'say').length);
    message.channel.send(say).catch(err => {
    //nothing to do lol
    })
   }*/
	if (message.content.startsWith(admp + `eval`) && (message.author.id === "406343162651738112" || message.author.id === "361951318929309707")) {
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
	if (message.content.startsWith(admp + 'eval2') && (message.author.id === "406343162651738112" || message.author.id === "361951318929309707")) {
		const code = message.content.split(" ").slice(1).join(" ");
        try {
         let evaled = eval(code);
         if (!code) {
             return message.channel.send("А где код?");
         }
       } catch (err) {
          message.channel.send(`\`\`\`${(err)}\`\`\``)
    
       }
	}
    if (message.content.startsWith(p + `hug`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
            }
        message.channel.send('Загрузка...').then(msg => {
             request('https://nekos.life/api/v2/img/hug', function (error, response, body) {
                 try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **обнял(а)** ${user1}`)
                        .setImage(arr['url'])
                        .setColor(c)
                         msg.edit(embed)
                         } catch (e) {
                        console.log(e)
                     }
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
    .setColor(c)
if (!user1 || user1.id === user.id) return message.channel.send(selfbite)
let embed = new Discord.RichEmbed()
    .setDescription(`${user} **Погладила по голове** ${user1}`)
    .setImage(t.url)
    .setColor(c)
      msg.edit(embed)
    })
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
                        .setColor(c)
                         msg.edit(embed)
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
                        .setColor(c)
                        msg.edit(embed)
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
                        .setColor(c)
                        msg.edit(embed)
                        } catch (e) {
                       console.log(e)
                 }
            });
        });
    }
    if (message.content.startsWith(p + `gasm`)) {
        if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
        message.delete();
        message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/gasm', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor(c)
                    msg.edit(embed);
                } catch (e) {
               console.log(e)
                 }
            });
        });
    }

    if (message.content.startsWith(p + `hentai`)) {
        if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
        message.delete();
        message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/hentai', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor(c)
                        .setTimestamp(); 
                    msg.edit(embed);
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
                        .setColor(c)
        if (!user1 || user1.id === user.id) return message.channel.send(selfbite)
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **злится на** ${user1}`)
                        .setImage((urls[Math.floor(Math.random() * urls.length)]))
                        .setColor(c)
                        message.channel.send(embed)
    }
	if (message.content.startsWith(p + `bite`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
		weeb.random('bite', { hidden: false, nsfw: false, filetype: 'gif'}).then(t => {
		const selfbite = new Discord.RichEmbed()
                        .setDescription(`${user} **укусил(а)** себя`)
                        .setImage("https://78.media.tumblr.com/bbea36e4585df159eb4a339efc97313a/tumblr_ormo8ikFnO1wn2b96o1_500.gif")
                        .setColor(c)
        if (!user1 || user1.id === user.id) return message.channel.send(selfbite)
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **укусил(а)** ${user1}`)
                        .setImage(t.url)
                        .setColor(c)
                        message.channel.send(embed)
		});
    }
	if (message.content.startsWith(p + `smoke`)) {
        let user = message.author;
				      message.channel.send('Загрузка...').then(msg => {
		     const urls = ['https://thumbs.gfycat.com/SphericalDependentHalibut-small.gif', 'https://78.media.tumblr.com/7746fca41c6782df47d7cd6925adba6f/tumblr_orcpabAWTV1sqhf08o1_500.gif', 'http://animeonline.su/uploads/posts/2015-06/1435137244_end.gif', 'https://media.giphy.com/media/hnRXZQiHWTtTO/giphy.gif', 'https://media.giphy.com/media/1k6S4iyfFyTRK/giphy.gif' ,'https://i.pinimg.com/originals/10/4b/9e/104b9ea0f2dea93d9374b092b82e1256.gif', 'https://s3-eu-west-1.amazonaws.com/files.surfory.com/uploads/2015/2/14/54dd05a41f395d0b468b465a/54df5bf31f395daa438b4c8e.gif', 'http://s8.favim.com/orig/150926/anime-guy-black-and-white-gif-smoking-Favim.com-3361618.gif', 'http://img0.safereactor.cc/pics/post/anime-gif-Anime-Subete-ga-F-ni-Naru-The-Perfect-Insider-2638766.gif', 'http://s017.radikal.ru/i424/1111/2b/ecae2f095abb.gif', 'https://78.media.tumblr.com/5bec6027d1c27194e6d3d5863c739d5f/tumblr_ozmfkvy8Pc1urnatuo1_500.gif', 'https://78.media.tumblr.com/6ac2528e3cde0894adb41fbc4e56def0/tumblr_owayv78WNu1vbfbhho1_500.gif'];
		     let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **выкурил(а) сигарету.**`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor(c)
                    msg.edit(embed)
        });
    }
	if (message.content.startsWith(p + `sleep`)) {
        let user = message.author;
				      message.channel.send('Загрузка...').then(msg => {
					      const urls = ['https://media1.tenor.com/images/0d78943ec2d800847bfe98c0a5e03cd3/tenor.gif?itemid=11081269','https://thumbs.gfycat.com/DrearyDenseFlicker-size_restricted.gif','https://i.pinimg.com/originals/24/3e/2f/243e2f0cf4ad9ef9fb9def7594ec2c85.gif','https://thumbs.gfycat.com/SadWiltedHackee-small.gif','https://media.tenor.com/images/9bbd2789c5eaf20198205ca4976dda75/tenor.gif','https://data.whicdn.com/images/233322524/original.gif','https://gifer.com/i/8hQS.gif','http://gifimage.net/wp-content/uploads/2018/05/sleep-anime-gif-4.gif','https://media1.tenor.com/images/6f04cbe23fa862cd1e7da987c2b0308e/tenor.gif?itemid=9187874','https://i.pinimg.com/originals/92/8c/d7/928cd76c937e2f4c6d998651c2c88d58.gif','https://vignette.wikia.nocookie.net/kancolle/images/0/08/Umaru_sleeping.gif/revision/latest?cb=20161209020902','https://gifer.com/i/WDf.gif','https://i.imgur.com/Sb8Wls5.gif','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7Otqu-VpJAr92BOMTtSJkJLxMWBD_l6Yd41tCkxKzDxUWOCB9g','https://i.kym-cdn.com/photos/images/original/001/115/759/095.gif'];//12321312312
					      let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **пошел(шла) спать.**`)//мне за это вообще платили??\\ //А? А? А?
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor(c)
                    msg.edit(embed)
        });
    }
	if (message.content.startsWith(p + `rip`)) {
        let user = message.author;
		message.channel.send('Загрузка...').then(msg => {
         const urls = ['https://lh3.googleusercontent.com/-buUYgrq_wKc/VRO0gc7EHqI/AAAAAAAAAG0/7Ntm-6fFkk4/w500-h288/naomi%2Bsuicide%2Bgif.gif', 'https://uploads.disquscdn.com/images/2dbbc921cb13de3198a3b6ae0099e725bfb0c80129d70bacf47819fb765deef1.gif', 'http://37.media.tumblr.com/tumblr_m7ram5jIAA1qzbqw1o1_250.gif', 'https://i.pinimg.com/originals/79/2f/37/792f37131d123c568e7114b7b829e572.gif', 'http://thisisinfamous.com/wp-content/uploads/2014/12/tumblr_ngjphxwU011t3zq0no1_400.gif', 'httpsimage.net/wp-content/uploads/2017/07/anime-suicide-gif-15.gif', 'https://data.whicdn.com/images/290510883/original.gif', 'https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif', 'https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706', 'http://38.media.tumblr.com/c75ba943c38bad612d9e722ee3142bb3/tumblr_n418yewq601tubxydo1_500.gif', 'http://66.media.tumblr.com/e2ab4fd11151e5e8acc627254bb7594d/tumblr_mo1ef0QwUS1s0pcfao1_500.gif', 'https://i.gifer.com/3ZvS.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-8.gif', 'https://i.pinimg.com/originals/a5/f1/96/a5f196464ed42f493b95a600099e83b9.gif', 'https://cdn60.picsart.com/182542841000202.gif?r1024x1024', 'https://zippy.gfycat.com/EquatorialGleefulArabianhorse.gif', 'http://data.whicdn.com/images/107593752/large.gif', 'https://i.gifer.com/Rk5D.gif', 'https://pa1.narvii.com/6535/3eb238ede3ccbc364d487c60f9d8b9c9fcb4f515_hq.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-2.gif'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **совершил(а) суицид**`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor(c)
                        msg.edit(embed)
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
      .setDescription(`${user} **Ушел(а) в печаль**`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor(c)
  msg.edit(embed)
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
	.setColor(c)
	msg.edit(embed)
	});
    });
}

if (message.content.startsWith(p + `hi`)) {
    message.delete();
const urls = [
    "https://media.tenor.com/images/824a5c6fb0eff4de202d0cd4da1e6692/tenor.gif",//1
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
"http://pa1.narvii.com/5935/a557baffc06658c5b3c2932eb0bc496cb112d04c_00.gif",//17
"https://thumbs.gfycat.com/ArtisticVelvetyBarebirdbat-max-1mb.gif",
"https://media1.tenor.com/images/ae40603eddb6e4bb1ea56cc6de7d0f6e/tenor.gif?itemid=5142315",
"https://media.tenor.com/images/21f53e7521c2262f778cb71bd671522b/tenor.gif",
"https://media.tenor.com/images/73ce6a152fdf3fa2645f6153c646c9b7/tenor.gif",
"https://image.myanimelist.net/ui/z9mCAeIYypLkQQhpPKgdnaknwcoChRZHEz5uuGvWqjGX9hQXPKVaIgGJhk17VmmwNuay0ifX7duQKIoAzhryEWr3Rof3GZ_OaH5gLoVMkOU",
"https://pa1.narvii.com/6749/99edaa75487131db6d433c0c9442051f6314452c_hq.gif",
"http://gifimage.net/wp-content/uploads/2017/10/hello-anime-gif-7.gif",
"https://i.kym-cdn.com/photos/images/newsfeed/001/402/477/2ec.gif",
"https://media1.tenor.com/images/943a3f95936d66dc0c78fd445893431e/tenor.gif?itemid=9060940",
"https://image.myanimelist.net/ui/_D9BvY42y5B3XjqszccZEcQ2SNP8h5106Ssqd0yjIoOLHYVPNM4QRf3QlKgAuc3crFW1imwGXqnkBUWKef6Xz6ux7UeaqIiqrDQNmkpinsaSrt7QBBqeEk5M-IkPP4mA",
"https://pa1.narvii.com/6482/b4862bba0a3633b3bb3e6f4b6a72b8047f932c4a_hq.gif"
];
    let user = message.author;
    let user1 = message.mentions.users.first();
    const selfbite = new Discord.RichEmbed()
                    .setDescription(message.author+` **сказал(а) всем привет**`)
                    .setImage((urls[Math.floor(Math.random() * urls.length)]))
                    .setColor(c)
    if (!user1 || user1.id === user.id) return message.channel.send(selfbite)
                let embed = new Discord.RichEmbed()
                    .setDescription(message.author+` **сказал(а) привет** `+message.mentions.users.first())
                    .setImage((urls[Math.floor(Math.random() * urls.length)]))
                    .setColor(c)
                    message.channel.send(embed)
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
      .setColor(c)
  msg.edit(embed)
});
}
if (message.content.startsWith(p + 'sex')) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
    let user = message.author;
    let user1 = message.mentions.users.first();
	if(!user1) { user1=client.user }
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
      .setColor(c)
  msg.edit(embed)
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
if (message.content.startsWith(p + `kill`)) {
    let user = message.author;
    let user1 = message.mentions.users.first();
      if(!user1) { user1=client.user }
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://i.gifer.com/9KyA.gif",
"https://i.gifer.com/5hQ1.gif",
"https://i.gifer.com/777c.gif",
"https://i.gifer.com/C3SI.gif",
"https://media.giphy.com/media/iUgoB9zOO0QkU/giphy.gif",
"http://animechan.ru/uploads/posts/2011-09/1315813239_tumblr_lq6ytuegoe1qzea6yo1_500.gif",
"http://gifimage.net/wp-content/uploads/2017/09/akame-ga-kill-leone-gif-5.gif",
"http://static4.wikia.nocookie.net/__cb20131228141116/anime-characters-fight/ru/images/0/0b/Tumblr_my2qhyoRZ81r3rdh2o1_400.gif",
"https://media1.tenor.com/images/5ab22ca640af20cd3b479694bde9e25c/tenor.gif?itemid=4961067",
"https://vignette.wikia.nocookie.net/berserk/images/f/f8/%D0%A3%D0%B4%D0%B0%D1%80_%D0%BC%D0%B5%D1%87%D0%BE%D0%BC_%281997%29.gif/revision/latest?cb=20170728042606&path-prefix=ru",
"https://i.pinimg.com/originals/03/25/4b/03254b3e75161c5c8bbf7364f2d41d9d.gif",
"https://uploads.disquscdn.com/images/4fbdf1f8b0dc6bd114eb5270de642da061a00d35c7efb07d40121bb8d2b572dc.gif",
"https://38.media.tumblr.com/fe1fd006f18108c329c8a6360db6ea31/tumblr_mly4q7Ftq61s5h198o1_r1_400.gif",
"https://img-fotki.yandex.ru/get/6436/137106206.2ce/0_b7d4d_d014e887_orig.jpg",
"https://cs4.pikabu.ru/post_img/2014/08/06/5/1407301513_322675141.gif",
"https://i.gifer.com/7ODW.gif",
"https://media1.tenor.com/images/46051e203deaefc5642916c1eafa54a7/tenor.gif?itemid=3660367",
"https://i.imgur.com/Bti43x8.gif",
"https://i.gifer.com/2ctw.gif",
"https://gifimage.net/wp-content/uploads/2017/09/anime-kill-gif-5.gif",
"https://pa1.narvii.com/6839/bddc4a19c9e3cb7e5e6bf83afb23407ebe31a11a_hq.gif",
"https://i.gifer.com/2hBx.gif",
"https://pa1.narvii.com/6467/4a054ee5fa7222473ff2c2dd7974e4c8c0c6ff00_hq.gif",
"https://media1.tenor.com/images/aa5a82dcaff6309dfd5ee5cfeaad4bed/tenor.gif?itemid=10616092",
"https://steamusercontent-a.akamaihd.net/ugc/870746400639910679/2AB3A3A3B3740019D0DFCF73DAFA6E3BCA32C6B9/",
"https://media1.tenor.com/images/c1b725e33769b0e3c0d549593587cd5f/tenor.gif?itemid=8430439",
"https://i.pinimg.com/originals/19/88/c8/1988c8d65590df4df62894495e44343c.gif",
"https://vignette.wikia.nocookie.net/absolute/images/8/8d/Suzuka-gif1.gif/revision/latest?cb=20141116085550&path-prefix=ru",
"https://i.gifer.com/FCJA.gif"
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **Убил(а)** ${user1}`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor(c)
  msg.edit({embed})
});
}
if (message.content.startsWith(p + `happy`)) {
    message.delete();
    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://media.giphy.com/media/3Cm8cxtSHqu6Q/giphy.gif",
"https://media1.tenor.com/images/0f9847a5f258da9a3bdccc3860f91eb5/tenor.gif?itemid=9188246",
"https://media.giphy.com/media/IWM2uI93SaTde/giphy.gif",
"https://i.gifer.com/3TMr.gif",
"https://thumbs.gfycat.com/ScentedSecondaryDoe-size_restricted.gif",
"https://data.whicdn.com/images/174338423/original.gif",
"https://i.imgur.com/he3uUsy.gif",
"https://thumbs.gfycat.com/BrilliantScaryAmethystsunbird-small.gif",
"https://i.kym-cdn.com/photos/images/original/001/103/137/7d4.gif",
"https://i.pinimg.com/originals/14/7b/ba/147bba012d5781ead622f9c2a4a02be2.gif",
"https://thumbs.gfycat.com/FamiliarSourAddax-size_restricted.gif",
"https://media.tenor.com/images/8db3116594dfaece15072855400aec87/tenor.gif",
"https://i.pinimg.com/originals/99/83/04/9983043d7af2d94b76fe4751e0264cd6.gif",
"https://media.giphy.com/media/CNUb51EbTxuRG/giphy.gif",
"https://media1.tenor.com/images/3913935066604c16c7fe91cbfa492bec/tenor.gif?itemid=8743868",
"https://cdn72.picsart.com/186168594000202.gif?r1024x1024",
"https://media1.tenor.com/images/4a967984e3517772f0f490c946a7652e/tenor.gif?itemid=5208815",
"https://i.gifer.com/embedded/download/Fsnm.gif",
"https://media1.tenor.com/images/0dba6ce428e4199a9a2aef768b93b494/tenor.gif?itemid=5633051",
"https://data.whicdn.com/images/174338297/original.gif",
"https://gif-free.com/uploads/posts/2017-05/1493788658_happy-anime-hearts.gif",
"https://image.myanimelist.net/ui/THP3d05SFhdRvLOKLs2gqUFz0THCvIe10gufubJGDV2XdWQOGjgCmk-Xv-oy3g6MLyaIspD8i_b2ZkdKcHBu0nvATFLxCU3wu_2-nUc2KGUGRANnnpHYhkpVHX_3yEhidE7NihNVBc0Vz69IbWChDA",
"https://i.pinimg.com/originals/e5/0b/66/e50b66e752fba006fe082ea8e90b03f7.gif",
"https://i.gifer.com/3Sca.gif",
"https://media.tenor.com/images/d93523c4db7e20254c4dcd512029d51e/tenor.gif",
"https://avatars.mds.yandex.net/get-pdb/49816/62b37a68-151f-4812-8d8d-e460081f1676/orig",
"https://i.pinimg.com/originals/92/1b/af/921baf5e9ba06fc332c9b87faae526c2.gif",
"https://i.kym-cdn.com/photos/images/original/001/103/132/883.gif",
"http://pa1.narvii.com/6176/8e66714966d71edb2a08d2ee898b8cae01ffa1b7_00.gif",
"https://media.giphy.com/media/fl8RHI2JxXqqQ/giphy.gif",
"https://i.gifer.com/QLml.gif",
"https://i.chzbgr.com/full/8246936576/h6C16760E/",
"https://i.gifer.com/Xn.gif",
"https://thumbs.gfycat.com/BriskOpenInexpectatumpleco-small.gif"
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **Радуется**`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor(c)
  msg.edit({embed})
});
}
if (message.content.startsWith(p + `neko`)) {
    message.channel.send('Загрузка...').then(msg => {
        request('https://nekos.life/api/v2/img/neko', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setImage(arr['url'])
                    .setColor(c)
                    msg.edit({embed})
                    } catch (e) {
                   console.log(e)
             }
        });
    });
}
if (message.content.startsWith(p + `woof`)) {
    message.channel.send('Загрузка...').then(msg => {
        request('https://nekos.life/api/v2/img/woof', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setImage(arr['url'])
                    .setColor(c)
                    msg.edit({embed})
                    } catch (e) {
                   console.log(e)
             }
        });
    });
}
if (message.content.startsWith(p + `waifu`)) {
    message.channel.send('Загрузка...').then(msg => {
request('https://nekos.life/api/v2/img/waifu', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setImage(arr['url'])
                    .setColor(c) 
                msg.edit({embed});
            } catch (e) {
           console.log(e)
             }
        });
    });
}
if(message.content.startsWith(p + `avatar`)) {
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/avatar', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if (message.content.startsWith(p + `smug`)) {
            message.delete();
            let user = message.author;
            let user1 = message.mentions.users.first();
            if (!user1 || user1.id === user.id) {
                user = client.user;
                user1 = message.author;
            }
            message.channel.send('Загрузка...').then(msg => {
                request('https://nekos.life/api/v2/img/smug', function (error, response, body) {
                    try {
                        let arr = JSON.parse(body);
                        let embed = new Discord.RichEmbed()
                            .setDescription(`${user} **	Надсмеиваться над** ${user1}`)
                            .setImage(arr['url'])
                            .setColor(c) 
                            msg.edit({embed});
                            } catch (e) {
                           console.log(e)
                     }
                });
            });
        }
if (message.content.startsWith(p + `ero`)) {
        if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
    message.channel.send('Загрузка...').then(msg => {
        request('https://nekos.life/api/v2/img/ero', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setImage(arr['url'])
                    .setColor(c)
                    msg.edit({embed});
                    } catch (e) {
                   console.log(e)
             }
        });
    });
}
if (message.content.startsWith(p + `eron`)) {
        if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
    message.channel.send('Загрузка...').then(msg => {
        request('https://nekos.life/api/v2/img/eron', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setImage(arr['url'])
                    .setColor(c)
                    msg.edit({embed});
                    } catch (e) {
                   console.log(e)
             }
        });
    });
}
if (message.content.startsWith(p + `tits`)) {
        if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
    message.channel.send('Загрузка...').then(msg => {
        request('https://nekos.life/api/v2/img/tits', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setImage(arr['url'])
                    .setColor(c)
                    msg.edit({embed});
                    } catch (e) {
                   console.log(e)
             }
        });
    });
}
if (message.content.startsWith(p + `pussy`)) {
        if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
    message.channel.send('Загрузка...').then(msg => {
        request('https://nekos.life/api/v2/img/pussy', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setImage(arr['url'])
                    .setColor(c)
                    msg.edit({embed});
                    } catch (e) {
                   console.log(e)
             }
        });
    });
}
if (message.content.startsWith(p + `trap`)) {
        if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
    message.channel.send('Загрузка...').then(msg => {
        request('https://nekos.life/api/v2/img/trap', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setImage(arr['url'])
                    .setColor(c)
                    msg.edit({embed});
                    } catch (e) {
                   console.log(e)
             }
        });
    });
}
if (message.content.startsWith(p + `anal`)) {
        if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
    message.channel.send('Загрузка...').then(msg => {
        request('https://nekos.life/api/v2/img/anal', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setImage(arr['url'])
                    .setColor(c)
                    msg.edit({embed});
                    } catch (e) {
                   console.log(e)
             }
        });
    });
}
if (message.content.startsWith(p + `yuri`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/yuri', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `kuni`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/kuni', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `solo`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/solo', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `futanari`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/futanari', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `femdom`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/femdom', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `eroyuri`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/eroyuri', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `cum`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/cum', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `les`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/les', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `lewdkemo`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/lewdkemo', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `blowjob`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/blowjob', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `kemonomimi`)) {
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/kemonomimi', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `boobs`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/boobs', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `lewd`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/lewd', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `feet`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/feet', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `keta`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/keta', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `feet`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/feet', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `erofeet`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/erofeet', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `bj`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/bj', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `classic`)) {
    if (!message.channel.nsfw) return message.channel.send("**Только в nsfw!**");
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/classic', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `holo`)) {
message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/holo', function (error, response, body) {
        try {
            let arr = JSON.parse(body);
            let embed = new Discord.RichEmbed()
                .setImage(arr['url'])
                .setColor(c)
                msg.edit({embed});
                } catch (e) {
               console.log(e)
         }
    });
});
}
if(message.content.startsWith(p + `cat`)) {
    message.channel.send('Загрузка...').then(msg => {
        request('https://nekos.life/api/v2/img/meow', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setImage(arr['url'])
                    .setColor(c)
                    msg.edit({embed});
                    } catch (e) {
                   console.log(e)
             }
        });
    });
    }
if(message.content.startsWith(p+'ban')){
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('**У меня нету прав для бана.**');
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("**Этот пользователь не найдет!**");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**Простите,у вас нету прав.**");
    if (["ADMINISTRATOR","BAN_MEMBERS","KICK_MEMBERS"].some(r => bUser.hasPermission(r))) return message.channel.send("**У тебя нету прав для бана этого пользователя.**");    let g = message.createdAt;
    let times = g.toLocaleString();
    message.react("✅")
    const embed = new Discord.RichEmbed()
    .setColor(c)
    .setTitle("Banned!")
    .setDescription(`
Пользователь: ${bUser} ID \`${bUser.id}\`
Его забанил: <@${message.author.id}> ID \`${message.author.id}\`
Время: ${times}
Причина: ${bReason}
    `)
    message.channel.send(embed);
    message.guild.member(bUser).ban(bReason);
return;
}
if(message.content.startsWith(p+'kick')){
    if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('**У меня нету прав для кика.**');
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("**Этот пользователь не найден!**");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**У тебя нету прав для кика этого пользователя!**");
    if (["ADMINISTRATOR","BAN_MEMBERS","KICK_MEMBERS"].some(r => kUser.hasPermission(r))) return message.channel.send("**У тебя нету прав для кика этого пользователя.**");
    let g = message.createdAt;
    let times = g.toLocaleString();
    message.react("✅")
    const embed = new Discord.RichEmbed()
    .setColor(c)
    .setTitle("Kick!")
    .setDescription(`
Пользователь: ${kUser} ID \`${kUser.id}\`
Его кикнул: <@${message.author.id}> ID \`${message.author.id}\`
Время: ${times}
Причина: ${kReason}
    `)
    message.guild.member(kUser).kick(kReason);
    message.channel.send(embed);
}
if(message.content.startsWith(p + 'mute')) {
    if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('**У меня нету прав для мута.**');
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send("**Этот пользователь не найден.**");
    if (["ADMINISTRATOR","BAN_MEMBERS","KICK_MEMBERS"].some(r => tomute.hasPermission(r))) return message.channel.send("**У тебя нету прав для мута этого пользователя.**");
    if (parseInt(args[0]) < 0) return message.channel.send("**Я не могу мутить -0 или меньше.**")
    let mReason = args.join("     ").slice(29);
    if(tomute.hasPermission("KICK_MEMBERS")) return message.channel.send("**У вас нету прав.**");    
    let muterole = message.guild.roles.find(r => ['mute', 'Mut', 'Muted', 'Mute','muted','mut'].includes(r.name));    
    if(!muterole){
        try{
          muterole = message.guild.createRole({
            name: "Muted",
            color: "BLACK",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
              channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
    let mutetime = args[1];
    if(!mutetime) return message.channel.send("**Вы не указали время.**");
   (tomute.addRole(muterole.id));
   let g = message.createdAt;
   let times = g.toLocaleString();
   message.react("✅")
   const embed = new Discord.RichEmbed()
    .setColor(c)
    .setTitle("Muted!")
    .setDescription(`
Пользователь: <@${tomute.id}> ID ${tomute.id}
Его замутил: <@${message.author.id}> ID ${message.author.id}
На сколько замутили: \`${ms(ms(mutetime))}\`
Время: ${times}
Причина: ${mReason}
`)
    message.channel.send(embed);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **был размучен!**`);
    }, ms(mutetime));
  }
  if(message.content.startsWith(p+'unmute')){
    let muterole = message.guild.roles.find(r => ['mute', 'Mut', 'Muted', 'Mute','muted','mut'].includes(r.name));    
    let tomute = message.guild.members.get(message.mentions.users.first().id || args[0]);
    if (!tomute.roles.has(muterole.id)) return message.channel.send('**Этот пользователь и так не в муте.**');
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> **был размучен!**`)
}
if(message.content.startsWith(p+'clear')){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**У тебя нету прав!**");
    if(!args[0]) return message.channel.send("**Укажите сколько очистеть сообщений!**");
    message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`**Очищенно \`${args[0]}\` сообщений.**`).then(msg => msg.delete(2000));
  });
}
        if (message.author.bot) return;
        if (message.content.startsWith(p + 'ping')) {
    message.channel.send('Ping: ' + `**${Date.now() - message.createdTimestamp}**` + ' `ms` \n');
    }
if(message.content.startsWith(p + `invite`)) {
message.channel.send("Invite me! \nhttps://discordapp.com/oauth2/authorize?client_id=476739055392915486&scope=bot&permissions=8")
}	
if(message.content.startsWith(p + `help`)) {
let embed = new Discord.RichEmbed()
.setColor(c)
.addField("HELP",`hello im Julia the help in commands <a:Julia_1:526355662909734917>`)
.addField('Reaction <a:julia_2:526359514895876154>',
`j!hug \`[user]\` - Обнять человека
j!pat \`[user]\` - Погладить человека
j!kiss \`[user]\` - Поцеловать человека
j!bite \`[user]\` - Укусить человека
j!lick \`[user]\` - лизнуть человека
j!slap \`[user]\` - Ударить человека
j!kill \`[user]\` - Убить коко-то
j!smug \`[user]\` - Надсмеиваться над кем-то
j!angry - Начать злится
j!sleep - Пойти спать
j!smoke - Покурить сигаретку
j!rip - Пойти и умереть
j!hi - Поприветствовать всех
j!sad - Уйти в печаль
j!beer - Начать пить пиво
j!happy - Радоватся
`)
.addField('NSFW <a:julia_4:526361698496413716>',
`j!sex \`[user]\` - Занятся половым актом с человеком
j!hentai - Посмотреть хентай
j!gasm - Отправить картинку оргазма
j!ero - Картинка ero
j!eron - Картинка eron
j!tits - Картинка tits
j!pussy - Картинка pussy
j!trap - Отправить картинку trap
j!anal - Отправить картинку anal
j!yuri - Отправить картинку yuri
j!kuni - Отправить гифку kuni
j!solo - Отправить картинку solo
j!futanari - Отправить картинку futanari
j!femdom - Отправить картинку femdom
j!eroyuri - Отправить картинку eroyuri
j!cum - Отправить гифку cum
j!les - Отправить гифку les
j!blowjob - Отправить картинку blowjob
j!lewdkemo - Отправить картинку lewdkemo
j!boobs - Отправить картинку boobs
j!lewd - Отправить картинку lewd
j!feet - отправить картинку feet
j!erofeet - Отправить картинку erofeet
j!bj - Отправить гифку bj
j!classic - Отправить гифку classic`)
.addField('Anime <a:julia_5:526362108976300062>',
`j!neko - Отправить картинку неко тян
j!waifu - Отправить картинку waifu
j!avatar - Отправить рандом аватарку[anime]
j!holo - Отправить картинку holo
j!kemonomimi - Отправить картинку kemonomimi`)
.addField('Img <:julia_12:546224338857230339>',`
j!dog - Отправить картинку собаки
j!cat - Отправить картинку кошки
`)
.addField("Moderation <:julia_13:546675790717386763>",`
j!ban \`[user]\` - Забанить пользователя
j!kick \`[user]\` - Кикнуть пользователя
j!clear \`Количество сообщений\` - Очистеть сообщения
j!mute \`[user]\` \`На сколько\` \`{Причина}\` - Замутить пользоваетля[много багов]
j!unmute \`[user]\` - Унмут\`нуть пользователя 
`)
.addField('Other <a:julia_7:526362654659575808>',
`j!help - Посмотреть команды
j!invite - Пригласить бота себе на сервер
j!ping - Проверить пинг бота`)
.addField('Server Link <a:julia_6:526362654655381515>',
'** https://discord.gg/6ygBnMg **')
try {
	message.author.send(embed).then(m =>{
	message.channel.send("Check your DM`S!");	
	})
} catch (err) {
	message.channel.send("Ваши личные сообщения заблокированы.");
}
}
});
