var dbd = require('dbd.js')
var fs = require('fs')
var bot = new dbd.Bot({
    token:"Tokeni Buraya Yazınız",
    prefix:"!"
})
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code
    })
}

bot.variables({
  tester:"Ayarlanmadı",
  onayredlog:"Ayarlanmadı",
  botlog:"Ayarlanmadı",
  başkanal:"Ayarlanmadı",
  gelenbotlar:"Ayarlanmadı",
  botoy:"0",
  sahibi:""
})

