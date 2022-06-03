import { Response, Router } from "express";
import { CreateCardListingController } from "./controllers/Listings/createCardListingController";
import { DeleteCardListingController } from "./controllers/Listings/deleteCardListingController";
import { ListCardController } from "./controllers/Listings/listCardController";
import { ListPlayerListingsController } from "./controllers/Listings/listPlayerListingsController";
import { UpdateCardListingController } from "./controllers/Listings/updateCardListingController";
import { AuthenticateUserController } from "./controllers/Users/authenticateUserController";
import { CreateUserController } from "./controllers/Users/createUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

const createListingController = new CreateCardListingController();
const listPlayerListingController = new ListPlayerListingsController();
const listCardController = new ListCardController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const deleteCardListingController = new DeleteCardListingController();
const updateCardListingController = new UpdateCardListingController();

router.get("/", (_, response: Response) => {
  return response.json({
    ok: true
  });
});

router.post("/user", createUserController.handle);
router.post("/login/user", authenticateUserController.handle);

router.post(
  "/create-listing",
  ensureAuthenticated,
  createListingController.handle
);
router.get("/listing", ensureAuthenticated, listPlayerListingController.handle);
router.get("/listing/:name", ensureAuthenticated, listCardController.handle);
router.patch(
  "/listing/:id",
  ensureAuthenticated,
  updateCardListingController.handle
);
router.delete(
  "/listing/:id",
  ensureAuthenticated,
  deleteCardListingController.handle
);

export { router };
