const Client = require('../structures/Client');
const { Message } = require('discord.js');
module.exports = {
    name: `np`,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send(`You are not in a voice channel!`);
        if(!client.music.getQueue(message)) return message.channel.send(`Nothing is currently playing.`);
        const np = client.music.getQueue(message).nowPlaying
        message.channel.send(`${np.title} <${np.uri}> by ${np.author}`)
    }
}