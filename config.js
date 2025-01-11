function validatePresenceLinks(activity) {
    const youtubeVideoRegex = /^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+/;
    const imageLinkRegex = /^https?:\/\/(i\.imgur\.com\/|media\.tenor\.com\/|cdn\.discordapp\.com\/attachments\/)[\w./-]+$/;

    // Validate YouTube video link in setURL
    if (!youtubeVideoRegex.test(activity.setURL)) {
        return 'setURL must be a valid YouTube video link (e.g., https://www.youtube.com/watch?v=example).';
    }

    // Validate image link in setAssetsLargeImage
    if (!imageLinkRegex.test(activity.setAssetsLargeImage)) {
        return 'setAssetsLargeImage must be a valid image link (e.g., from Imgur, Tenor, or Discord).';
    }

    // Validate button links
    for (const button of activity.buttons || []) {
        if (!youtubeVideoRegex.test(button.link)) {
            return `Button link "${button.link}" must be a valid YouTube link.`;
        }
    }

    return true; // All validations pass
}

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

    const richPresence = new client.RichPresence()
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
    client.user.setStatus('idle');
}

module.exports = reloadPresence;
