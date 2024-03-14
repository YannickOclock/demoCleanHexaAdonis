import User from '#domain/models/user'

export interface CreateUserDto {
  id: string
  name: string
  email: string
  password: string
}

export default abstract class UserRepository {
  abstract save(user: CreateUserDto): Promise<boolean>
  abstract findByEmail(email: string): Promise<User | null>
  abstract findAll(): Promise<User[]>
}
