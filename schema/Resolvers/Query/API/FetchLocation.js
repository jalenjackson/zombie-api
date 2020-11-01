const mainCache = require('../../../../mainCache');
const { ApolloError } = require('apollo-server');

function FetchLocation(data) {
    function error(message) {
        throw new ApolloError(message);
    }

    try {
        if (!data || !data.id) return error('No ID specified for location');

        const locations = mainCache.get('locations');

        if (locations && locations.length > 0) {
            const locationFound = locations.find(location => location.id === data.id);

            return locationFound || null
        }
    } catch (e) {
        return error(e.message || 'An error occurred');
    }
}

module.exports = FetchLocation;