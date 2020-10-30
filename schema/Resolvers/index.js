const Query = require('./Query/index');
const Mutation = require('./Mutation/index');
const GraphQLJSON = require('graphql-type-json');

const resolvers = {
    Query,
    Mutation,
    JSON: GraphQLJSON
};

module.exports = resolvers;