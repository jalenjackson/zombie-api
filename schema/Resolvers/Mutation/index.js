const Mutation = {
    createNewLocation(e) {
        console.log('creating new location', e);
        return { id: '123', name: 'Hospital', zombies: [{ id: '4323', location: '123' }] };
    },
    addZombiesToLocation(e) {
        console.log('adding zombies to location', e);
        return { id: '123', name: 'Hospital', zombies: [{ id: '4323', location: '123' }] }
    },
    removeZombiesFromLocation(e) {
        console.log('remove zombie from location', e);
        return { id: '123', name: 'Hospital', zombies: [{ id: '4323', location: '123' }] }
    },
    moveZombieToLocation(e) {
        console.log('move zombie to location', e);
        return { id: '123', name: 'Hospital', zombies: [{ id: '4323', location: '123' }] }
    }
};

module.exports = Mutation;