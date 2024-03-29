import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  extend type Query {
    post(postId: ID!): Post!
    posts(input: apiFiltersInput): [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    userId: String!
    indexRef: Int!
    createdAt: String!
  }
`;
