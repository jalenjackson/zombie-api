const mainCache = require('../../../../mainCache');

function FetchLocations() {
    const locations = mainCache.get('locations');
    return locations || [];
}

module.exports = FetchLocations;