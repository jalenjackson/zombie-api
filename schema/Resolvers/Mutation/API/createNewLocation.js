const mainCache = require('../../../../mainCache');
const uuidv4 = require('../../../../utils/generateUUID');

function CreateNewLocation(data) {
    const locations = mainCache.get('locations');
    let zombies = mainCache.get('zombies');
    const locationID = uuidv4();

    data.zombies.map(zombie => {
        zombie.location = locationID;
        return zombie;
    });

    zombies = zombies.map(zombie => {
        const foundZombie = data.zombies.find(z => z.id === zombie.id);
        if (foundZombie) zombie = foundZombie;
        return zombie;
    });

    locations.push({
        id: locationID,
        name: data.name
    });

    mainCache.set('locations', locations);
    mainCache.set('zombies', zombies);
}

module.exports = CreateNewLocation;