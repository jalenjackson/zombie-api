const mainCache = require('../../../../mainCache');
const FetchLocation = require('./FetchLocation');


function FetchZombies() {
    const zombies = mainCache.get('zombies');
    const locationsCache = mainCache.get('locations');

    let locations = {
        noLocation: []
    };

    let locationsFound = [];

    zombies.map(zombie => {
        if (zombie.location) {
            const isLocationFoundAlready = locationsFound.find(l => l.id === zombie.location);

            if (!isLocationFoundAlready) {
                const locationFound = FetchLocation({ id: zombie.location });

                if (locationFound) {
                    locationsFound.push(locationFound);
                    locations[locationFound.name] = [];
                    locations[locationFound.name].push(zombie);
                }
            } else {
                locations[isLocationFoundAlready.name].push(zombie);
            }
        } else {
            locations.noLocation.push(zombie);
        }
    });

    const locationKeys = Object.keys(locations);

    locationsCache.map(l => {
       if (locationKeys.indexOf(l.name) === -1) {
           locations[l.name] = l;
       }
    });

    return {
        response: locations
    }
}

module.exports = FetchZombies;