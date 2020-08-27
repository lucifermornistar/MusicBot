const MusicClient = require('./structures/Client');
new MusicClient().start(require('./config').token, `./commands`)