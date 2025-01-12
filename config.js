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
        ],
    };

    // Validate the activity links
    const validationResult = validatePresenceLinks(activity);
    if (validationResult !== true) {
        console.error(validationResult);
        return; // Stop execution if validation fails
    }

    // Define the presence data object
    const presenceData = {
        name: '⚠◥◣_◢◤ "HACKER" ◥◣_◢◤⚠', // Activity name
        type: 'STREAMING', // Activity type
        url: activity.setURL, // Streaming URL
        details: `💢 "ATOMIC-Tier Hacker" 💢`, // Details section
        state: '☣ [King of Hackers] ☣', // State section
        startTimestamp: global.startTime, // Start time
        assets: {
            largeImage: activity.setAssetsLargeImage, // Large image URL
            largeText: '⚠ Classified as a national Threat ⚠', // Tooltip for the large image
        },
        buttons: activity.buttons.map(button => ({ label: button.name, url: button.link })), // Buttons array
    };

    // Set the activity on the client
    client.user.setActivity(presenceData);
    client.user.setStatus('idle'); // Set user status
}

module.exports = reloadPresence;
