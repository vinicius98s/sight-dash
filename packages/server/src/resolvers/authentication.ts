import { ApolloError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

import { Login } from '../typeDefs';
import User from '../schemas/User';

import auth from '../config/auth';

export async function login(_, { email, password }: Login): Promise<string> {
  const user = await User.findOne({ email });
  if (!user) throw new ApolloError('User not found');

  const matchingPasswords = await user.comparePassword(password);
  if (!matchingPasswords) throw new ApolloError('Incorrect password');

  const token = jwt.sign({ _id: user._id }, auth.secret, {
    expiresIn: auth.expiresIn,
  });

  return token;
}
