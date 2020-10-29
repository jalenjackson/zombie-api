const { gql } = require('apollo-server');

const TypeDefs = gql`
     type Location {
        id: ID!
        name: String!
        zombies: [Zombie]
    }
    
    type Zombie {
        id: ID!
        name: String!
        location: ID!
    }
`;

module.exports = TypeDefs;