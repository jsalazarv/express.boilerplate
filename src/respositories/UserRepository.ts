import dataSource from '../database/data-source';
import { User } from '../entities/User';

export const UserRepository = dataSource.getRepository(User);
