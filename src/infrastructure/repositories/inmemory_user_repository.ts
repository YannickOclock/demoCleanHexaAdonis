import UserRepository, { CreateUserDto } from '#domain/contracts/repositories/user_repository'
import User from '#domain/models/user'

let users: CreateUserDto[]

export default class InMemoryUserRepository implements UserRepository {
  constructor() {
    users = []
  }

  async save(user: CreateUserDto): Promise<boolean> {
    users.push(user)
    return true
  }

  async findByEmail(email: string): Promise<User | null> {
    const userDb = users.find((user) => user.email === email)
    if (!userDb) {
      return null
    } else {
      const newUser = new User()
      newUser.id = userDb.id
      newUser.name = userDb.name
      newUser.email = userDb.email
      newUser.password = userDb.password
      return newUser
    }
  }

  async findAll(): Promise<User[]> {
    return users.map((user) => {
      const newUser = new User()
      newUser.id = user.id
      newUser.name = user.name
      newUser.email = user.email
      newUser.password = user.password
      return newUser
    })
  }
}
