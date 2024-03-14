import edge from 'edge.js'
import app from '@adonisjs/core/services/app'
import UserRepository from '#domain/contracts/repositories/user_repository'

edge.global('findUsers', async () => {
  const userRepository = await app.container.make(UserRepository)
  return userRepository.findAll()
})
