const createNewLocation = require('./API/createNewLocation');
const moveZombieToLocation = require('./API/moveZombieToLocation');
const createNewZombie = require('./API/createNewZombie');

const Mutation = {
    createNewLocation: (_, data) => {
        return createNewLocation(data);
    },
    moveZombieToLocation(_, data) {
        return moveZombieToLocation(data);
    },
    createNewZombie(_, data) {
        return createNewZombie(data);
    }
};

module.exports = Mutation;