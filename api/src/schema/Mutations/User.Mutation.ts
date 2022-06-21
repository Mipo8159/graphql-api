import {
  GraphQLBoolean,
  GraphQLError,
  GraphQLID,
  GraphQLString,
} from 'graphql';
import { AppDataSource } from '../../config/data.source';
import { UserEntity } from '../../entities/user.entity';
import bcryptjs from 'bcryptjs';
import { UserTypeDef } from '../TypeDefs/User.TypeDef';

export const CREATE_USER = {
  type: UserTypeDef,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    name: { type: GraphQLString },
    lastname: { type: GraphQLString },
  },
  resolve: async (_: any, args: any) => {
    const { email, password, name, lastname } = args;
    const exist = await AppDataSource.getRepository(UserEntity).findOneBy({
      email,
    });

    if (exist) {
      throw new GraphQLError('Email is taken');
    }

    const user = new UserEntity();
    user.email = email;
    user.name = name || user.name;
    user.lastname = lastname || user.lastname;

    const hashed = await bcryptjs.hash(password, 10);
    user.password = hashed;

    return await AppDataSource.getRepository(UserEntity).save(user);
  },
};

export const DELETE_USER = {
  type: GraphQLBoolean,
  args: { id: { type: GraphQLID } },
  resolve: async (_: any, args: any) => {
    const user = await AppDataSource.getRepository(UserEntity).findOneBy({
      id: args.id,
    });

    if (!user) {
      throw new GraphQLError('user not found');
    }

    await AppDataSource.getRepository(UserEntity).remove(user);
    return true;
  },
};

export const UPDATE_USER = {
  type: UserTypeDef,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    lastname: { type: GraphQLString },
  },
  resolve: async (_: any, args: any) => {
    const { id, name, lastname } = args;

    const user = await AppDataSource.getRepository(UserEntity).findOneBy({
      id,
    });

    if (!user) {
      throw new GraphQLError('user not found');
    }

    user.name = name || user.name;
    user.lastname = lastname || user.lastname;

    return await AppDataSource.getRepository(UserEntity).save(user);
  },
};
