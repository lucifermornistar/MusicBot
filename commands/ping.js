const Client = require('../structures/Client');
const { Message } = require('discord.js');
module.exports = {
    name: `ping`,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const msg = await message.channel.send(`Pinging.`);
        await msg.edit(client.embed({ description: `WebSocket: ${client.ws.ping}\nEdit: ${msg.createdAt - message.createdAt}`}, message));
        await msg.edit("")
    }
}