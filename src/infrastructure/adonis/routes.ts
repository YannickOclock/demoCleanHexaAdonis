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

router
  .get('/', async ({ view }) => {
    return view.render('pages/home')
  })
  .as('home')

router
  .get('/users', async ({ view }) => {
    return view.render('pages/users/all')
  })
  .as('users')

router
  .get('/user/add', async ({ view }) => {
    return view.render('pages/users/add')
  })
  .as('users.add')

router.post('/user/add', [RegisterUserController])
