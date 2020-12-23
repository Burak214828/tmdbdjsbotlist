module.exports = {
  name:"oyver",
  code:`
  $cooldown[12h;Üzgünüm Birdaki Oy İçin 12 Saat Sonra Gel]
<@$mentioned[1]> Adlı Bota Oy Verilmiştir. Toplam Oy Sayısı \`\`$sum[$getUserVar[botoy;$mentioned[1]];1]\`\` Olmuştur
$setUserVar[botoy;$sum[$getUserVar[botoy;$mentioned[1]];1];$mentioned[1]]
$onlyIf[$isBot[$mentioned[1]]!=false;Etiketlenen Kişi Bot Değil]
$onlyIf[$message!=;Birini Etiketle !]`
}