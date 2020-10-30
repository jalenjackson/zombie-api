const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/schema');
const resolvers = require('./schema/Resolvers/index');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url })  => {
   console.log(`GraphQL server started at ${url}`);
});