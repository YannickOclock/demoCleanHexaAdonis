import { test } from '@japa/runner'
import User from '#domain/models/user'

test.group('User user', () => {
  test('it should create a domain user', async ({ assert }) => {
    const user = new User()
    const payload = {
      name: 'John Doe',
      email: 'john@doe.fr',
      password: 'password',
    }
    user.registerUser(payload)
    user.generateNewId()
    assert.equal(payload.name, user.name)
    assert.equal(payload.email, user.email)
    assert.equal(payload.password, user.password)
    assert.isString(user.id)
  })
})
