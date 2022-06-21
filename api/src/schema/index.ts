import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from './Mutations/User.Mutation';
import { GREETINGS } from './Queries/Greeting.query';
import { GET_USER, GET_USERS } from './Queries/User.query';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: { greetings: GREETINGS, getUsers: GET_USERS, getUser: GET_USER },
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updateUser: UPDATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
