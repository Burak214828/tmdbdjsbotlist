module.exports = {
  name:"yardım",
  code:`
$color[RANDOM]

$addField[!başvurukanal #kanal;Etiketlenen Kanal Hariç Hiç Biryerde !botekle Kullanılamaz;yes]
$addField[!botekle <BOT ID> <PREFIX>;Ayarlar Tamamsa Botunuzu Ekletebilirsiniz;yes]
$addField[!botlog #kanal;Etiketlenen Kanala Bot Eklenirse Bildirim Atar;yes]
$addField[!gelenbot #kanal;Etiketlenen Kanala Botun 0 ve 8 Permli Davet Linkini Atar;yes]
$addField[!onay <Kişi ID>;Kişinin ID'sini Yazarak Onay Red Log Kanalına Bildirim Atar;yes]
$addField[!reddet <Kişi ID> <SEBEP>;Kişinin ID'si Ve Sebebi Belirterek Onay Red Log'a Bildirim Atar;yes]
$addField[!redonay #kanal;Etiketlenen Kanala Reddetme Ve Onaylama Kanalı Ayarlar;yes]
$addField[!tester @rol;Etiketlenen Rolde !onay !red Komutlarını Kullanır Ve Bildirim Alır;yes]
$addField[!oyver @Bot;Etiketlenen Bota 12 Saatte Bir Oy Verirsiniz;yes]
`
}