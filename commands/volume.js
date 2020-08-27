const Client = require('../structures/Client');
const { Message } = require('discord.js');
module.exports = {
    name: `volume`,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send(`You did not specify a query!`);
        if(!message.member.voice.channel) return message.channel.send(`You are not in a voice channel!`);
        await client.music.setVolume(message, parseInt(args[0]));
        message.channel.send(`Done!`);
    }
}