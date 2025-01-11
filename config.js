const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=ovT5AcJFaMQ') //Must be a youtube video link 
    .setState('☣ [King of Hackers] ☣')
    .setName('⚠◥◣_◢◤ "HACKER" ◥◣_◢◤⚠')
    .setDetails(`💢 "ATOMIC-Tier Hacker" 💢 [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://imgur.com/uLmY6Lz') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('⚠ Classified as a national Threat ⚠') //Text when you hover the Large image
    .setAssetsSmallImage('Small Image URL') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') //Text when you hover the Small image
    .addButton('♠ "Illegal Video" ♠', 'https://www.youtube.com/watch?v=ovT5AcJFaMQ')
    .addButton('⚠ "[YouTube Playlist]" ⚠', 'https://youtube.com/playlist?list=PLQBUreVNNjUgKhBL0eM-2Ak66xEuvsPAj&si=813wdMtDkjhK_pZb');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `💢 "ATOMIC-Tier Hacker" 💢 [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});
