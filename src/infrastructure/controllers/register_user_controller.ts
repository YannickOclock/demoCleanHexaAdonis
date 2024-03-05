import { inject } from "@adonisjs/core";
import RegisterUserUseCase from "#domain/usecases/register_user_usecase";

@inject()
export default class RegisterUserController {
  constructor(private registerUserUseCase: RegisterUserUseCase) {}
  handle(){
    return this.registerUserUseCase.handle({
      name: 'John Doe',
      email: 'john@doe.fr',
      password: 'password'
    })
  }
}
