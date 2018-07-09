const client = require('discord-rich-presence')('465816900186800138');
client.updatePresence({
  details: "What am I doing?",
  state: "Why am I doing it?",
  largeImageKey: 'thinking',
  instance: true,
});
