## Get Started

1. Make sure you are on node version v12.19.0
2. Run npm install
3. Run npm run server

You should see "GraphQL server started at http://localhost:4000/"

This node app uses node-cache to save data, so restarting the server will reset everything.

Features:

Mutations
    createNewLocation
    createNewZombie
    moveZombieToLocation
    deleteZombie
    deleteLocation

Queries
    locations: [Location]!
    location(id: ID!): Location
    zombies: ZombiesResponse

