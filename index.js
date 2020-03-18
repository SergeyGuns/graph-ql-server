const { ApolloServer, gql } = require("apollo-server");
const resolvers = require("./models/resolvers");
const { sequelize } = require("./models");
const schema = require("./models/schema");

(async function() {
  const server = new ApolloServer({
    typeDefs: gql(schema),
    resolvers,
    context: { db: sequelize.models }
  });
  await sequelize.sync();
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
