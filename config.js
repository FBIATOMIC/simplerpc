const
  discord = require("discord.js-selfbot-v13");
 
function reloadPresence(client) {
    const activity = new discord.RichPresence()
      //more command https://discordjs-self-v13.netlify.app/#/docs/docs/main/class/RichPresence or https://github.com/aiko-chan-ai/discord.js-selfbot-v13/blob/main/Document/RichPresence.md
        .setApplicationId('1')
        .setType('STREAMING')
        .setURL('https://www.youtube.com/watch?v=ovT5AcJFaMQ') //Must be a youtube video link 
        .setState('☣ [King of Hackers] ☣')
        .setName('⚠◥◣_◢◤ "HACKER" ◥◣_◢◤⚠')
        .setDetails(`💢 "ATOMIC-Tier Hacker" 💢`)
        .setStartTimestamp(global.startTime)
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1301227546251366424/1302578046599041024/0704.gif?ex=67839757&is=678245d7&hm=27ee8e9cd3f55f178cddd06fef5686b8d088f227b8d567a8cda5ae8d79008c14&=') //You can put links in tenor or discord and etc.
        .setAssetsLargeText('⚠ Classified as a national Threat ⚠') //Text when you hover the Large image
        .setAssetsSmallImage('Small Image URL') //You can put links in tenor or discord and etc.
        .setAssetsSmallText('Small Text') //Text when you hover the Small image
        .addButton('♠ "Illegal Video" ♠', 'https://www.youtube.com/watch?v=ovT5AcJFaMQ')
        .addButton('⚠ "[YouTube Playlist]" ⚠', 'https://youtube.com/playlist?list=PLQBUreVNNjUgKhBL0eM-2Ak66xEuvsPAj&si=813wdMtDkjhK_pZb');
    client.user.setActivity(activity.toJSON())
    client.user.setStatus("idle")
};
module.exports = reloadPresence;
