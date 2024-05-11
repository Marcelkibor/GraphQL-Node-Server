// index.js
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Resolver function for the "hello" query
const resolvers = {
  Query: {
    hello: () => "Hello, GraphQL!",
  },
};

// Create an Apollo Server and apply it to Express
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
