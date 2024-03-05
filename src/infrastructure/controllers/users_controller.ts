import { HttpContext } from "@adonisjs/core/http";
import { inject } from "@adonisjs/core";

@inject()
export default class UsersController {
  show({ params }: HttpContext) {
    return `User ${params.id}`
  }
}