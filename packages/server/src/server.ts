import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

import User, { UserSchema } from './schemas/User';
import auth from './config/auth';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

type Context = {
  user: UserSchema | null;
};

(async (): Promise<void> => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }): Promise<Context> => {
      const token = req.headers.authorization
        ? req.headers.authorization.replace('Bearer ', '')
        : '';

      if (token) {
        const { _id } = await promisify(jwt.verify)(token, auth.secret);
        if (_id) {
          const user = await User.findById(_id);
          return { user };
        }
      }

      return { user: null };
    },
  });

  const app = express();
  server.applyMiddleware({ app });

  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/SIGHT_DASH_DEV',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (e) {
    console.error('Database connection failed');
  }

  const port = process.env.PORT || 4000;

  app.listen({ port }, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
})();
