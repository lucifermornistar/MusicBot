const Client = require('../structures/Client');
const { Message } = require('discord.js');
module.exports = {
    name: `queue`,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send(`You are not in a voice channel!`);
        if(!client.music.getQueue(message)) return message.channel.send(`Nothing is currently playing.`);
        const np = client.music.getQueue(message).nowPlaying;
        const queue = client.music.getQueue(message).queue;
        message.channel.send(`Now playing: ${np.title} <${np.uri}> by ${np.author}\n${queue.slice(0, 10).map((song, i) => {
            return `${i+1} - ${song.info.title} <${song.info.uri}> by ${song.info.author}`
        }).join("\n")}${queue.length > 10 ? `\nAnd ${queue.length - 10} songs more...` : ``}`.trim());
    }
}