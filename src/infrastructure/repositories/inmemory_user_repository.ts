import User from "#domain/models/user";
import UserRepository from "#domain/contracts/repositories/user_repository";

let users: User[];

export default class InMemoryUserRepository implements UserRepository {

  constructor() {
    users = [];
  }

  async save(user: any): Promise<boolean> {
    users.push(user);
    return true;
  }

  async findByEmail(email: string): Promise<any> {
    return users.find((user) => user.email === email);
  }
}
