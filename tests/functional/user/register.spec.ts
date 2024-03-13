import { test } from '@japa/runner'
import User, { UserRegister } from '#domain/models/user'
import RegisterUserUseCase from '#domain/usecases/register_user_usecase';
import InMemoryUserRepository from '#infrastructure/repositories/inmemory_user_repository';

test.group('User register', () => {
  test('register user successfully', async ({ assert }) => {
    const user = new User()
    const payload: UserRegister = {
      name: 'John Doe',
      email: 'john.doe@free.fr',
      password: 'password',
    }
    user.registerUser(payload)
    user.generateNewId()
    assert.equal(user.name, payload.name)
    assert.equal(user.email, payload.email)
    assert.equal(user.password, payload.password)
    assert.isString(user.id)
  })

  test('register user usercase successfully', async ({ assert }) => {
    // use AdonisJS IoC container to resolve dependencies
    const inMemoryUserRepository = new InMemoryUserRepository()
    const registerUserUseCase = new RegisterUserUseCase(inMemoryUserRepository)
    const payload: UserRegister = {
      name: 'John Doe',
      email: 'john.doe@free.fr',
      password: 'password',
    }
    const result = await registerUserUseCase.handle(payload)
    assert.isTrue(result)
  })
})
