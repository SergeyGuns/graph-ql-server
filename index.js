const { ApolloServer, gql } = require("apollo-server");
const resolvers = require("./models/resolvers");
const db = require("./models");
const schema = require("./models/schema");

console.log({ db });

const server = new ApolloServer({
  typeDefs: gql(schema),
  resolvers,
  context: { db }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
