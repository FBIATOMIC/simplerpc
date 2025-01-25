const discord = require("discord.js-selfbot-v13");

function reloadPresence(client) {
    const activity = new discord.RichPresence()
        .setApplicationId('1')
        .setType('STREAMING')
        .setURL('https://www.youtube.com/watch?v=ovT5AcJFaMQ')
        .setState('☣ [King of Hackers] ☣')
        .setName('⚠◥◣_◢◤ "HACKER" ◥◣_◢◤⚠')
        .setDetails('💢 ATOMIC-Tier Hacker 💢')
        .setAssetsLargeImage('https://media.discordapp.net/external/svmVyE9opeT6hU2NHgmVT6M8N2xK9M76D0Z9NuaOOUk/https/i.imgur.com/uLmY6Lz.gif')
        .setAssetsLargeText('⚠ Classified as a national Threat ⚠')
        .addButton('♠ "Illegal Video" ♠', 'https://www.youtube.com/watch?v=ovT5AcJFaMQ');
    
    client.user.setActivity(activity.toJSON());
    client.user.setStatus("idle");
}

module.exports = reloadPresence;
