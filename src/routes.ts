import { Response, Router } from 'express'
import { CreateCardListingController } from './controllers/Listings/createCardListingController'
import { ListCardController } from './controllers/Listings/listCardController'
import { ListPlayerListingsController } from './controllers/Listings/listPlayerListingsController'
import { AuthenticateUserController } from './controllers/Users/authenticateUserController'
import { CreateUserController } from './controllers/Users/createUserController'

const router = Router()

const createListingController = new CreateCardListingController()
const listPlayerListingController = new ListPlayerListingsController()
const listCardController = new ListCardController()
const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

router.get('/', (_, response: Response) => {
  return response.json({
    ok: true,
  })
})

router.post('/create-listing', createListingController.handle)
router.get('/listings', listPlayerListingController.handle)
router.get('/listings/:name', listCardController.handle)
router.post('/create-user', createUserController.handle)
router.post('/login/user', authenticateUserController.handle)

export { router }
