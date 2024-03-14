import type { ApplicationService } from '@adonisjs/core/types'
import UserRepository from '#domain/contracts/repositories/user_repository'
import SqliteUserRepository from '#infrastructure/repositories/sqlite_user_repository'

export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {}

  /**
   * The container bindings have booted
   */
  async boot() {
    this.app.container.bind(UserRepository, () => new SqliteUserRepository())
  }

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
