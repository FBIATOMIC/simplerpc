const
  discord = require("discord.js-selfbot-v13");
 
function reloadPresence(client) {
    const activity = new discord.RichPresence()
        .setApplicationId('1')
        .setType('STREAMING')
        .setURL('https://www.youtube.com/watch?v=ovT5AcJFaMQ') //Must be a youtube video link 
        .setState('☣ [King of Hackers] ☣')
        .setName('⚠◥◣_◢◤ "HACKER" ◥◣_◢◤⚠')
        .setDetails(💢 "ATOMIC-Tier Hacker" 💢)
        .setStartTimestamp(global.startTime)
        .setAssetsLargeImage('https://i.imgur.com/uLmY6Lz.gif') //You can put links in tenor or discord and etc.
        .setAssetsLargeText('⚠ Classified as a national Threat ⚠') //Text when you hover the Large image
        .addButton('♠ "Illegal Video" ♠', 'https://www.youtube.com/watch?v=ovT5AcJFaMQ')
        .addButton('⚠ "[YouTube Playlist]" ⚠', 'https://youtube.com/playlist?list=PLQBUreVNNjUgKhBL0eM-2Ak66xEuvsPAj&si=813wdMtDkjhK_pZb');
    client.user.setActivity(activity.toJSON())
    client.user.setStatus("idle")
};
module.exports = reloadPresence;
