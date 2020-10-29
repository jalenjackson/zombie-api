const NodeCache = require('node-cache');
const mainCache = new NodeCache();

const Locations = [
    { id: '1', name: 'Hospital', zombies: [] },
    { id: '2', name: 'School', zombies: [] },
    { id: '3', name: 'Warehouse', zombies: [] }
];

mainCache.set('locations', Locations);

module.exports = mainCache;