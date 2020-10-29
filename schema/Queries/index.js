const { gql } = require('apollo-server');

const Queries = gql`
    type Query {
        locations: [Location]!
        location(id: ID!): Location
    }
`;

module.exports = Queries;