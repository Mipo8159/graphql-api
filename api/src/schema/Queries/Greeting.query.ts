import { GraphQLString } from 'graphql';

export const GREETINGS = {
  type: GraphQLString,
  resolve: () => 'Hello there',
};
