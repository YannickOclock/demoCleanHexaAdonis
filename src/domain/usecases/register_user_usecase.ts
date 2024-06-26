import { RegisterUserDto } from '#domain/contracts/dto/register_user_dto'
import UserRepository from '#domain/contracts/repositories/user_repository'
import User from '#domain/models/user'
import { inject } from '@adonisjs/core'
import { registerUserValidator } from "#domain/validators/user";

@inject()
export default class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async handle(payload: RegisterUserDto): Promise<boolean> {
    const user = new User()
    // validation des data
    await registerUserValidator.validate(payload)
    // création de l'utilisateur
    user.registerUser(payload)
    // génération de l'identifiant et enregistrement
    return await this.userRepository.save({
      id: user.generateNewId(),
      name: user.name!,
      email: user.email!,
      password: user.password!,
    })
  }
}
