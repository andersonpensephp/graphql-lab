import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  extend type Query {
    user(userId: ID!): User!
    users: [User!]!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
  }
`;
