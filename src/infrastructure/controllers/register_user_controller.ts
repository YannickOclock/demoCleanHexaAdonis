import { inject } from '@adonisjs/core'
import RegisterUserUseCase from '#domain/usecases/register_user_usecase'
import { HttpContext } from "@adonisjs/core/http";

@inject()
export default class RegisterUserController {
  constructor(private registerUserUseCase: RegisterUserUseCase) {}
  handle({ request }: HttpContext) {
    return this.registerUserUseCase.handle({
      name: request.input('name'),
      email: request.input('email'),
      password: request.input('password'),
    })
  }
}
