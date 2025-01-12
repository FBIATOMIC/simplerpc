const discord = require("discord.js-selfbot-v13");

function reloadPresence(client) {
    const activity = new discord.RichPresence()
        .setApplicationId('1')
        .setType('STREAMING')
        .setURL('https://www.youtube.com/watch?v=ovT5AcJFaMQ') // Must be a YouTube video link
        .setState('☣ [King of Hackers] ☣')
        .setName('⚠◥◣_◢◤ "HACKER" ◥◣_◢◤⚠')
        .setDetails('💢 ATOMIC-Tier Hacker 💢') // Corrected syntax
        .setStartTimestamp(global.startTime)
        .setAssetsLargeImage('https://i.imgur.com/uLmY6Lz.gif') // Image link
        .setAssetsLargeText('⚠ Classified as a national Threat ⚠') // Hover text for the large image
        .addButton('♠ "Illegal Video" ♠', 'https://www.youtube.com/watch?v=ovT5AcJFaMQ');
    
    client.user.setActivity(activity.toJSON());
    client.user.setStatus("idle");
}

module.exports = reloadPresence;
