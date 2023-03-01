import { gql } from 'apollo-server';
import { userTypeDefs } from './user/typeDefs';
import { userResolvers } from './user/resolvers';
import { postTypeDefs } from './post/typeDefs';
import { postResolvers } from './post/resolvers';
import { apiFiltersTypeDefs } from './api-filters/typeDefs';
import { apiFilterOrder } from './api-filters/resolvers';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true
  }
}

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs, apiFiltersTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers, apiFilterOrder];
