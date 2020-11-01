const NodeCache = require('node-cache');
const mainCache = new NodeCache();
const uuidv4 = require('./utils/generateUUID');

const hospitalID = uuidv4();
const schoolID = uuidv4();
const warehouseID = uuidv4();

const Locations = [
    { id: '0', name: 'Zombies Captured' },
    { id: hospitalID, name: 'Hospital' },
    { id: schoolID, name: 'School' },
    { id: warehouseID, name: 'Warehouse' }
];

const Zombies = [
    { id: uuidv4(), name: 'Zombie A', location: '0' },
    { id: uuidv4(), name: 'Zombie B', location: '0' },
    { id: uuidv4(), name: 'Zombie C', location: '0' },
    { id: uuidv4(), name: 'Zombie D', location: '0' },
];

mainCache.set('locations', Locations);
mainCache.set('zombies', Zombies);

module.exports = mainCache;