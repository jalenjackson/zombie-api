const FetchLocations = require('./API/FetchLocations');
const FetchLocation = require('./API/FetchLocation');
const FetchZombies = require('./API/FetchZombies');

const Query = {
    locations() {
        return FetchLocations();
    },
    location: (_, data) => {
        return FetchLocation(data);
    },
    zombies: (_, data) => {
        return FetchZombies(data);
    }
};

module.exports = Query;