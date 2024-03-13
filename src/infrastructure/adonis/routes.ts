/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const RegisterUserController = () => import('#controllers/register_user_controller')

router.get('/user/add', [RegisterUserController])
