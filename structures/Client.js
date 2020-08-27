const { Collection, Client, MessageEmbed, Message } = require('discord.js');
class MusicClient extends Client {
    constructor() {
        super();
        this.commands = new Collection();
        this.discord = require('discord.js');
        this.ms = require('ms');
        this.path = require('path');
        this.fs = require('fs');
        this.salvage = require('salvage-music');
        this.music = new this.salvage(this, [
            {
                host: `localhost`,
                auth: `youshallnotpass`,
                port: 2333,
                name: `Node1`
            }
        ], {
            destroy: () => `I left.`,
            newSong: (song) => `Now playing ${song.title} by ${song.author}`
        });
    };
    commandHandler(path) {
        this.fs.readdirSync(this.path.normalize(path)).map((f) => {
            const File = require(this.path.join(__dirname, `..`, path, f));
            this.commands.set(File.name, File);
        });
    };
    getCommand(cmd) {
        return this.commands.has(cmd) ? this.commands.get(cmd) : false;
    }
    start(token, path) {
        this.commandHandler(path);
        this.login(token);
        this.on('ready', () => {
            console.log(`I'm now online!`);
        });
        this.prefix = `m!`;
        this.on('message', async(message) => {
            if(message.author.bot || !message.guild ||! message.content.toLowerCase().startsWith(this.prefix)) return;
            const [cmd, ...args] = message.content.slice(this.prefix.length).trim().split(/ +/g);
            const command = this.getCommand(cmd.toLowerCase());
            command.run(this, message, args).catch(console.erorr);
        });
    };
    /**
     * 
     * @param {MessageEmbed} data 
     * @param {Message} message 
     */
    embed(data, message) {
        return new MessageEmbed({ ...data, color: `RANDOM` }).setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, format: `png` }));
    }
};
module.exports = MusicClient;