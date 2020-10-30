const NodeCache = require('node-cache');
const mainCache = new NodeCache();
const uuidv4 = require('./utils/generateUUID');

const Locations = [
    { id: '1', name: 'Hospital' },
    { id: '2', name: 'School' },
    { id: '3', name: 'Warehouse' }
];

const Zombies = [
    { id: uuidv4(), name: 'Zombie A', location: '3' },
    { id: uuidv4(), name: 'Zombie B', location: '3' },
    { id: uuidv4(), name: 'Zombie C', location: '1' },
    { id: uuidv4(), name: 'Zombie D', location: '1' },
    { id: uuidv4(), name: 'Zombie E', location: null },
    { id: uuidv4(), name: 'Zombie E', location: null }
];

mainCache.set('locations', Locations);
mainCache.set('zombies', Zombies);

module.exports = mainCache;