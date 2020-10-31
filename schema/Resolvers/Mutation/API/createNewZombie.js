const mainCache = require('../../../../mainCache');
const uuidv4 = require('../../../../utils/generateUUID');

function CreateNewZombie(data) {
    const zombies = mainCache.get('zombies');
    const zombieID = uuidv4();

    zombies.push({
        id: zombieID,
        name: data.name,
        location: data.locationID
    });

    mainCache.set('zombies', zombies);
}

module.exports = CreateNewZombie;