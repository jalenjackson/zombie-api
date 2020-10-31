const mainCache = require('../../../../mainCache');

function CreateNewLocation(data) {
    const zombies = mainCache.get('zombies');

    zombies.map(zombie => {
        if (zombie.id === data.zombieID) {
            if (data.locationID === 'noLocation') {
                zombie.location = null;
            } else {
                zombie.location = data.locationID;
            }
        }
    });

    mainCache.set('zombies', zombies);
}

module.exports = CreateNewLocation;