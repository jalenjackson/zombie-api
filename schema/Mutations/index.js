const { gql } = require('apollo-server');

const Mutations = gql`
   type Mutation {
        createNewLocation(name: String!, zombies: [ZombieInput]!): Location
        createNewZombie(name: String!, locationID: ID!): Location
        moveZombieToLocation(locationID: ID!, zombieID: ID!): Location
    }
    
    input ZombieInput {
        name: String!
        location: ID
        id: ID!
    }
`;

module.exports = Mutations;