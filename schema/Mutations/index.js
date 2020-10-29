const { gql } = require('apollo-server');

const Mutations = gql`
   type Mutation {
        createNewLocation(name: String): Location
        addZombiesToLocation(locationID: ID!, zombies: [ZombieInput]!): Location
        removeZombiesFromLocation(locationID: ID!, zombieIDS: [ID!]!): Location
        moveZombieToLocation(prevLocationID: ID!, nextLocationID: ID!, zombieID: ID!): Location
    }
    
    input ZombieInput {
        name: String!
        location: ID!
    }
`;

module.exports = Mutations;