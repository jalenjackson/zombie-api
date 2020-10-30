const createNewLocation = require('./API/createNewLocation');
const removeZombiesFromLocation = require('./API/removeZombiesFromLocation');

const Mutation = {
    createNewLocation: (_, data) => {
        return createNewLocation(data);
    },
    addZombiesToLocation(e) {
        console.log('adding zombies to location', e);
        return { id: '123', name: 'Hospital', zombies: [{ id: '4323', location: '123' }] }
    },
    removeZombiesFromLocation(_, data) {
        return removeZombiesFromLocation(data);
    },
    moveZombieToLocation(e) {
        console.log('move zombie to location', e);
        return { id: '123', name: 'Hospital', zombies: [{ id: '4323', location: '123' }] }
    }
};

module.exports = Mutation;