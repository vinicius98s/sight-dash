import { ApolloError } from "apollo-server-express";

import { AddUser, UpdateUser } from "../typeDefs";
import User, { UserSchema } from "../schemas/User";

export async function addUser(
  _,
  { user }: { user: AddUser }
): Promise<UserSchema> {
  const userAlreadyExists = await User.findOne({ email: user.email });

  if (userAlreadyExists) {
    throw new ApolloError("User already exists", "400");
  }

  return await User.create(user);
}

export async function updateUser(
  _,
  { id, name, password, oldPassword }: UpdateUser
): Promise<UserSchema> {
  const user = await User.findById(id);

  if (!user) {
    throw new ApolloError("User not found", "400");
  }

  if (password && !oldPassword)
    throw new ApolloError("Old password must be provided", "400");

  if (oldPassword && !password)
    throw new ApolloError("You didn't provided the new password", "400");

  if (password && oldPassword) {
    if (!(await user.comparePassword(oldPassword))) {
      throw new ApolloError("Old password doesn't match");
    }

    user.password = password;
  }

  if (name) user.name = name;
  return await user.save();
}

export async function deleteUser(_, args): Promise<string> {
  const user = await User.findByIdAndDelete(args.id);
  if (!user) {
    throw new ApolloError("User not found", "400");
  }

  return user._id;
}

export async function queryUsers(_, args): Promise<UserSchema[]> {
  if (args.id) {
    const user = await User.findById(args.id);
    if (!user) throw new ApolloError("User not found", "400");
    return [user];
  }

  return await User.find({
    ...(args.email && { email: args.email })
  });
}
