const mainCache = require('../../../../mainCache');

function FetchZombies() {
    const zombies = mainCache.get('zombies');

    console.log(zombies)

    // sort zombies by location and split into objects. { hospital: [Zombie], warehouse: [Zombie] }

    /*
    [ { id: 'a34ca090-5b77-44b0-8f5a-acbc67c58aba',
    name: 'Zombie A',
    location: null },
  { id: 'f53dc887-d795-42e9-ae38-de7226576b71',
    name: 'Zombie B',
    location: null },
  { id: 'a6d88aa0-0101-46e8-afc5-d5f6f1d463a4',
    name: 'Zombie C',
    location: null },
  { id: '2b8364b2-b7d2-4713-b0d0-a473c0df49e3',
    name: 'Zombie D',
    location: null },
  { id: '7ffd3cbe-1cd1-4ef0-90fb-199337397886',
    name: 'Zombie E',
    location: null } ]
     */

    return zombies || [];
}

module.exports = FetchZombies;