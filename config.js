const { validatePresenceLinks } = require('./index'); // Adjust the path as needed
const discord = require("discord.js-selfbot-v13");

function reloadPresence(client) {
    const activity = {
        setURL: 'https://www.youtube.com/watch?v=ovT5AcJFaMQ',
        setAssetsLargeImage: 'https://i.imgur.com/uLmY6Lz.gif',
        buttons: [
            { name: '♠ "Illegal Video" ♠', link: 'https://www.youtube.com/watch?v=ovT5AcJFaMQ' },
            { name: '⚠ "[YouTube Playlist]" ⚠', link: 'https://youtube.com/playlist?list=PLQBUreVNNjUgKhBL0eM-2Ak66xEuvsPAj&si=813wdMtDkjhK_pZb' },
        ],
    };

    // Validate the activity links
    const validationResult = validatePresenceLinks(activity);
    if (validationResult !== true) {
        console.error(validationResult);
        return; // Stop execution if validation fails
    }

    const richPresence = new discord.RichPresence()
        .setApplicationId('1')
        .setType('STREAMING')
        .setURL(activity.setURL)
        .setState('☣ [King of Hackers] ☣')
        .setName('⚠◥◣_◢◤ "HACKER" ◥◣_◢◤⚠')
        .setDetails(`💢 "ATOMIC-Tier Hacker" 💢`)
        .setStartTimestamp(global.startTime)
        .setAssetsLargeImage(activity.setAssetsLargeImage)
        .setAssetsLargeText('⚠ Classified as a national Threat ⚠');

    activity.buttons.forEach(button => {
        richPresence.addButton(button.name, button.link);
    });

    client.user.setActivity(richPresence.toJSON());
    client.user.setStatus("idle");
}

module.exports = reloadPresence;
