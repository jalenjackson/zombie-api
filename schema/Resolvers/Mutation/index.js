const createNewLocation = require('./API/createNewLocation');
const moveZombieToLocation = require('./API/moveZombieToLocation');
const createNewZombie = require('./API/createNewZombie');
const deleteZombie = require('./API/deleteZombie');
const deleteLocation = require('./API/deleteLocation');

const Mutation = {
    createNewLocation: (_, data) => {
        return createNewLocation(data);
    },
    moveZombieToLocation(_, data) {
        return moveZombieToLocation(data);
    },
    createNewZombie(_, data) {
        return createNewZombie(data);
    },
    deleteZombie(_, data) {
        return deleteZombie(data)
    },
    deleteLocation(_, data) {
        return deleteLocation(data);
    }
};

module.exports = Mutation;