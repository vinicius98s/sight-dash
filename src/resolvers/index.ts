import { addUser, updateUser, deleteUser, queryUsers } from "./user";

export const resolvers = {
  Query: {
    users: queryUsers
  },
  Mutation: {
    addUser,
    updateUser,
    deleteUser
  }
};
