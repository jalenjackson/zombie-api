const NodeCache = require('node-cache');
const mainCache = new NodeCache();

const Locations = [
    { id: '0', name: 'Zombies Captured' },
    { id: '1', name: 'Hospital' },
    { id: '2', name: 'School' },
    { id: '3', name: 'Warehouse' }
];

const Zombies = [
    { id: '1', name: 'Zombie A', location: '3' },
    { id: '2', name: 'Zombie B', location: '3' },
    { id: '3', name: 'Zombie C', location: '1' },
    { id: '4', name: 'Zombie D', location: '1' },
    { id: '5', name: 'Zombie E', location: null },
    { id: '6', name: 'Zombie E', location: null }
];

mainCache.set('locations', Locations);
mainCache.set('zombies', Zombies);

module.exports = mainCache;