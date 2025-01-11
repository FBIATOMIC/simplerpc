const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const reloadPresence = require('./config.js');
const keepAlive = require('./keep_alive.js');

// Keep the bot alive
keepAlive();

if (!process.env.TOKEN) {
    console.error("Add a token inside Secrets.");
    process.exit();
}

client.login(process.env.TOKEN);

console.clear();
client.on('ready', async () => {
    global.startTime = new Date();
    reloadPresence(client);
    console.log('Discord RPC is running!');
});
