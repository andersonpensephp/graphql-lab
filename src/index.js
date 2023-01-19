import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello'
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(({ url }) => console.log(`Server listening on url ${url}`));
