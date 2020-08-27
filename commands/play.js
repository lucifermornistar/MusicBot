const Client = require('../structures/Client');
const { Message } = require('discord.js');
module.exports = {
    name: `play`,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send(`You did not specify a query!`);
        if(!message.member.voice.channel) return message.channel.send(`You are not in a voice channel!`);
        const res = await client.music.searchAndPlay(client.music.shoukaku.getNode(), args.join(" "), `youtube`, message);
        message.channel.send(res.isPlaylist ? `Added the playlist ${res.playlistName} to the queue, which has ${res.tracks.length} songs.` : `${res.songInfo.title} was added to the queue.`);
    }
}