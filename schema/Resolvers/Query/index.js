const FetchLocations = require('./API/FetchLocations');
const FetchLocation = require('./API/FetchLocation');

const Query = {
    locations() {
        return FetchLocations();
    },
    location: (_, data) => {
        return FetchLocation(data);
    }
};

module.exports = Query;