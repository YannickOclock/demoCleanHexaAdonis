import UserRepository, { CreateUserDto } from '#domain/contracts/repositories/user_repository'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'
import User from '#domain/models/user'

interface UserDb {
  id: string
  full_name: string
  email: string
  password: string
  created_at: string
  updated_at: null
}

export default class SqliteUserRepository implements UserRepository {
  async save(user: CreateUserDto): Promise<boolean> {
    const userDb: UserDb = {
      id: user.id,
      full_name: user.name,
      email: user.email,
      password: user.password,
      created_at: DateTime.now().toISO(),
      updated_at: null,
    }
    try {
      db.table('users').insert(userDb)
      return true
    } catch (error) {
      return false
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const userDb: UserDb = await db.from('users').select('*').where('email', email).first()
      const user = new User()
      user.id = userDb.id
      user.name = userDb.full_name
      user.email = userDb.email
      user.password = userDb.password
      return user
    } catch (error) {
      return null
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const usersDb: UserDb[] = await db.from('users').select('*')
      return usersDb.map((userDb) => {
        const user = new User()
        user.id = userDb.id
        user.name = userDb.full_name
        user.email = userDb.email
        user.password = userDb.password
        return user
      })
    } catch (error) {
      return []
    }
  }
}
