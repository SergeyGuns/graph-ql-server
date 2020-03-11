const { ApolloServer, gql } = require("apollo-server");
const resolvers = require("./models/resolvers");
const db = require("./models");
const schema = require("./models/schema");
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  ${schema}
`;

// Provide resolver functions for your schema fields

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
