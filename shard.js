const { ShardingManager } = require('discord.js');
const ayarlar = require('./ayarlar.json');
const shard = new ShardingManager('./bot.js', { //main dosyanız

    token: ayarlar.token,
    autoSpawn: true
});
shard.spawn(); 
shard.on('launch', shard => console.log(`[DUYUURU:SHARD] ${shard.id} Idine sahip shard başlatılmıştır!`));