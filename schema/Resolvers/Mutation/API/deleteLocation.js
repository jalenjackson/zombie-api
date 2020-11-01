const mainCache = require('../../../../mainCache');

function DeleteLocation(data) {
    const locations = mainCache.get('locations');
    const newLocations = locations.filter(l => l.id !== data.locationID);
    mainCache.set('locations', newLocations);
}

module.exports = DeleteLocation;