import { randomUUID } from "node:crypto";

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
  created_at: string | undefined

  registerUser(payload: UserRegister): void {
    this.name = payload.name
    this.email = payload.email
    this.password = payload.password
  }

  getFormattedDate(): string {
    return new Date(this.created_at as string).toLocaleDateString()
  }

  generateNewId(): string {
    this.id = randomUUID()
    return this.id
  }
}
