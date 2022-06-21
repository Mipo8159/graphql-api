import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const UserTypeDef = new GraphQLObjectType({
  name: 'User',
  description: 'User type definition',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    name: { type: GraphQLString },
    lastname: { type: GraphQLString },
    username: { type: GraphQLString },
  },
});
