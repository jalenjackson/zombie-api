const mainCache = require('../../../../mainCache');

function DeleteZombie(data) {
    const zombies = mainCache.get('zombies');
    const newZombies = zombies.filter(z => z.id !== data.zombieID);
    mainCache.set('zombies', newZombies);
}

module.exports = DeleteZombie;