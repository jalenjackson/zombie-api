const mainCache = require('../../../../mainCache');
const uuidv4 = require('../../../../utils/generateUUID');

function CreateNewLocation(data) {
    const locations = mainCache.get('locations');

    locations.push({
        id: uuidv4(),
        name: data.name,
        zombies: data.zombies
    });

    mainCache.set('locations', locations);
}

module.exports = CreateNewLocation;