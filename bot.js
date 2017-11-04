const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
  console.log(`Bot service launched. Bot ${client.user.tag} is successfully activated!`);
client.user.setStatus("online");
client.user.setGame('!hjelp');

});

client.on('message', msg => {
  if (msg.content === prefix + 'guacamolesquad') {
    msg.channel.sendMessage('Guacamole Squad  - gamer squad by guacamole lovers. Bot by Henrik ');
} else
  if (msg.content === prefix + 'hjelp') {
    msg.channel.sendMessage('Her er en liste over våre kommandoer: !hjelp - !guacamolesquad - !fuzey - FARLIG KOMMANDO > !hansikk <FARLIG KOMMANDO - !organicguacamole - !nonorganicguacamole og !gay');
} else
  if (msg.content === prefix + 'fuzey') {
    msg.channel.sendMessage('Yaa bro, eieren av denne serveren er Fuzey');
} else
  if (msg.content === prefix + 'hansikk') {
   msg.channel.sendMessage('Hansikk a.k.a Hans Jakob er en salty minecraft svettgamer. Han er 13 år og er 151cm. Han blir lett irritert');
 } else
   if (msg.content === prefix + 'nonorganicguacamole') {
    msg.channel.sendMessage('Ikke organisk og økologisk guacamole kan kjøpes her: https://kolonial.no/produkter/24023-rema-1000-dip-mild-guacamole-taste-lab/');
 } else
  if (msg.content === prefix + 'organicguacamole') {
   msg.channel.sendMessage('Organisk og Økologisk Guacamole kan kjøpes her: https://no.iherb.com/pr/Simply-Organic-Guacamole-Dip-Mix-12-Packets-0-8-oz-22-7-g-Each/31480?ccode=NO&currcode=NOK&langcode=en-US&gclid=Cj0KCQjwyvXPBRD-ARIsAIeQeoF6qv04h_IMXQWNoMqYMrwpvZgwDiuJO3qUC7DMT7VzI2FTu5kj2BkaAqIEEALw_wcB');
} else
 if (msg.content === prefix + 'gay') {
  msg.channel.sendMessage('Ja antar du er GAY');
}
});

client.login('Mzc2MzE4MjY0MzY1Njc4NTky.DN8pSg.4TmfG7HmVecrsNAagOTMUK3bGoo');
