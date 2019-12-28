import { ApolloError } from 'apollo-server-express';

import { AddUser, UpdateUser } from '../typeDefs';
import User, { UserSchema } from '../schemas/User';

type Context = {
  user?: UserSchema;
};

export async function addUser(
  _,
  { user }: { user: AddUser }
): Promise<UserSchema> {
  const userAlreadyExists = await User.findOne({ email: user.email });

  if (userAlreadyExists) {
    throw new ApolloError('User already exists');
  }

  return await User.create(user);
}

export async function updateUser(
  _,
  { name, password, oldPassword }: UpdateUser,
  { user }: Context
): Promise<UserSchema> {
  if (!user) {
    throw new ApolloError('You must be authenticated');
  }

  if (password && !oldPassword) {
    throw new ApolloError('Old password must be provided');
  }

  if (oldPassword && !password) {
    throw new ApolloError("You didn't provided the new password");
  }

  if (password && oldPassword) {
    if (!(await user.comparePassword(oldPassword))) {
      throw new ApolloError("Old password doesn't match");
    }

    user.password = password;
  }

  if (name) user.name = name;
  return await user.save();
}

export async function deleteUser(_, __, { user }: Context): Promise<boolean> {
  if (!user) {
    throw new ApolloError('You must be authenticated');
  }

  const { deletedCount } = await User.deleteOne({ _id: user._id });

  return !!deletedCount;
}

export async function queryUsers(_, args): Promise<UserSchema[]> {
  if (args.id) {
    const user = await User.findById(args.id);
    if (!user) throw new ApolloError('User not found');
    return [user];
  }

  return await User.find({
    ...(args.email && { email: args.email }),
  });
}
