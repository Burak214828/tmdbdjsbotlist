var dbd = require('dbd.js')
var fs = require('fs')
var bot = new dbd.Bot({
    token:"NzkwMDI0MzcwNTQ5NTU1MjUw.X96lhw.2m_hdFO479d7fhljW2Met-1iE7w",
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

