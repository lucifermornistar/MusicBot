const Client = require('../structures/Client');
const { Message } = require('discord.js');
module.exports = {
    name: `skip`,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send(`You are not in a voice channel!`);
        if(!client.music.getQueue(message)) return message.channel.send(`Nothing is playing..`);
        await client.music.skip(message);
        message.channel.send(`Skipped`);
    }
}