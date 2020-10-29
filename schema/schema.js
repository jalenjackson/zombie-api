const { gql } = require('apollo-server');
const Queries  = require('./Queries/index');
const Mutations  = require('./Mutations/index');
const TypeDefs  = require('./TypeDefs/index');

const typeDefs = gql`
    ${Queries}
    ${Mutations}
    ${TypeDefs}
`;

module.exports = typeDefs;