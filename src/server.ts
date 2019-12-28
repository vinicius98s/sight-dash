import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

(async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  const app = express();
  server.applyMiddleware({ app });

  try {
    await mongoose.connect("mongodb://localhost:27017/SIGHT_DASH_DEV", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch(e) {
    console.error("Database connection failed");
  }

  const port = process.env.PORT || 4000;

  app.listen({ port }, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
})();
