const mainCache = require('../../../../mainCache');

function RemoveZombiesFromLocation(data) {
    console.log(data);
    const locations = mainCache.get('locations');
    console.log(locations);
}

module.exports = RemoveZombiesFromLocation;