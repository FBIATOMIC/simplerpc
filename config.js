const discord = require("discord.js-selfbot-v13");

function reloadPresence(client) {
    const activity = new discord.RichPresence()
        .setApplicationId('1')
        .setType('STREAMING')
        .setURL('https://www.youtube.com/watch?v=ovT5AcJFaMQ') // Must be a YouTube video link
        .setState('☣ [King of Hackers] ☣')
        .setName('⚠◥◣_◢◤ "HACKER" ◥◣_◢◤⚠')
        .setDetails('💢 ATOMIC-Tier Hacker 💢') // Corrected syntax
        .setStartTimestamp(global.startTime);

    try {
        activity.setAssetsLargeImage('https://media.discordapp.net/external/svmVyE9opeT6hU2NHgmVT6M8N2xK9M76D0Z9NuaOOUk/https/i.imgur.com/uLmY6Lz.gif'); // Image link
    } catch (error) {
        console.error("Invalid URL for large image:", error.message);
    }

    activity.setAssetsLargeText('⚠ Classified as a national Threat ⚠') // Hover text for the large image
        .addButton('♠ "Illegal Video" ♠', 'https://www.youtube.com/watch?v=ovT5AcJFaMQ');
    
    client.user.setActivity(activity.toJSON());
    client.user.setStatus("idle");
}

module.exports = reloadPresence;
