import { GraphQLError, GraphQLID, GraphQLList } from 'graphql';
import { AppDataSource } from '../../config/data.source';
import { UserEntity } from '../../entities/user.entity';
import { UserTypeDef } from '../TypeDefs/User.TypeDef';

export const GET_USERS = {
  type: new GraphQLList(UserTypeDef),
  resolve: async () => {
    return await AppDataSource.getRepository(UserEntity).find();
  },
};

export const GET_USER = {
  type: UserTypeDef,
  args: { id: { type: GraphQLID } },
  resolve: async (_: any, args: any) => {
    const user = await AppDataSource.getRepository(UserEntity).findOneBy({
      id: args.id,
    });

    if (!user) {
      throw new GraphQLError('user not found');
    }

    return user;
  },
};
