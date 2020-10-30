const { gql } = require('apollo-server');

const TypeDefs = gql`
     scalar JSON

     type Location {
        id: ID!
        name: String!
        zombies: [Zombie]
    }
    
    type Zombie {
        id: ID!
        name: String!
        location: ID
    }
    
    type ZombiesResponse {
        response: JSON
    }
`;

module.exports = TypeDefs;