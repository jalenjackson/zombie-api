const { gql } = require('apollo-server');

const Queries = gql`
    type Query {
        locations: [Location]!
        location(id: ID!): Location
        zombies: ZombiesResponse
    }
`;

module.exports = Queries;