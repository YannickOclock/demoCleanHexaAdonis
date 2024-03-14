import { test } from '@japa/runner'
import User, { UserRegister } from '#domain/models/user'
import RegisterUserUseCase from '#domain/usecases/register_user_usecase'
import SqliteUserRepository from '#infrastructure/repositories/sqlite_user_repository'
import InMemoryUserRepository from '#infrastructure/repositories/inmemory_user_repository'

test.group('User register', () => {

  test('register user user case successfully', async ({ assert }) => {
    const userRepository = new SqliteUserRepository()
    const registerUserUseCase = new RegisterUserUseCase(userRepository)
    const payload: UserRegister = {
      name: 'John Doe',
      email: 'john.doe@free.fr',
      password: 'password',
    }
    const result = await registerUserUseCase.handle(payload)
    assert.isTrue(result)
  })

  test('register user user case with invalid email', async ({ assert }) => {
    const userRepository = new SqliteUserRepository()
    const registerUserUseCase = new RegisterUserUseCase(userRepository)
    const payload: UserRegister = {
      name: 'John Doe',
      email: 'john.doe',
      password: 'password',
    }
    try {
      await registerUserUseCase.handle(payload)
    } catch (error) {
      assert.equal(error.code, 'E_VALIDATION_ERROR')
      assert.equal(error.messages[0].field, 'email')
      assert.include(error.messages[0].message, 'valid email')
    }
  })
})
