export interface UserRegister {
  name: string
  email: string
  password: string
}

export default class User {
  id: string | undefined
  name: string | undefined
  email: string | undefined
  password: string | undefined

  registerUser(payload: UserRegister): void {
    this.name = payload.name
    this.email = payload.email
    this.password = payload.password
  }

  generateNewId(): string {
    this.id = Math.random().toString(36).substring(2, 9)
    return this.id
  }
}
