import { addUser, updateUser, deleteUser, queryUsers } from './user';
import { login } from './authentication';

export const resolvers = {
  Query: {
    users: queryUsers,
  },
  Mutation: {
    login,
    addUser,
    updateUser,
    deleteUser,
  },
};
