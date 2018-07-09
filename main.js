const client = require('discord-rich-presence')('id');
client.updatePresence({
  details: "First line",
  state: "Second line",
  largeImageKey: 'image',
  instance: true,
});
