import { gql } from "apollo-server-express";

export type AddUser = {
  email: string;
  password: string;
  name: string;
};

export type UpdateUser = {
  id: string;
  name?: string;
  oldPassword?: string;
  password?: string;
};

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  input AddUser {
    email: String!
    password: String!
    name: String!
  }

  type Query {
    users(id: ID, email: String): [User!]!
  }

  type Mutation {
    addUser(user: AddUser!): User!
    updateUser(
      id: ID!
      name: String
      password: String
      oldPassword: String
    ): User!
    deleteUser(id: ID!): ID!
  }
`;
