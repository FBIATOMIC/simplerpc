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
        .setAssetsLargeImage('https://tenor.googleapis.com/v2/media?id=8612986208442250283&format=optimizedgif&client_key=tenor_web&appversion=browser-r20250108-1&access_token=ya29.a0ARW5m74ZtIfx4CN1sRCM8nuvPDRd5EyASqnD6Kx5EQo-T665OC4ozX4zBQ0Q-RNS6e2wxSTpUdYColLa2PtGqxM7vkBWaxzDbnVshzpOAwPoMAsll5SK93jNOYGEAR0o_wR3C-ivbLXqvsszbqaCjCHGWwIHq4-O_KQaCgYKAdYSARASFQHGX2MiiSIEQtUkUXe1oAa-LbEz_g0170&key=AIzaSyC-P6_qz3FzCoXGLk6tgitZo4jEJ5mLzD8') //You can put links in tenor or discord and etc.
        .setAssetsLargeText('⚠ Classified as a national Threat ⚠') //Text when you hover the Large image
        .setAssetsSmallImage('Small Image URL') //You can put links in tenor or discord and etc.
        .setAssetsSmallText('Small Text') //Text when you hover the Small image
        .addButton('♠ "Illegal Video" ♠', 'https://www.youtube.com/watch?v=ovT5AcJFaMQ')
        .addButton('⚠ "[YouTube Playlist]" ⚠', 'https://youtube.com/playlist?list=PLQBUreVNNjUgKhBL0eM-2Ak66xEuvsPAj&si=813wdMtDkjhK_pZb');
    client.user.setActivity(activity.toJSON())
    client.user.setStatus("idle")
};
module.exports = reloadPresence;
