import { Response, Router } from "express";
import { CreateCardListingController } from "./controllers/Listings/createCardListingController";
import { ListCardController } from "./controllers/Listings/listCardController";
import { ListPlayerListingsController } from "./controllers/Listings/listPlayerListingsController";
import { AuthenticateUserController } from "./controllers/Users/authenticateUserController";
import { CreateUserController } from "./controllers/Users/createUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

const createListingController = new CreateCardListingController();
const listPlayerListingController = new ListPlayerListingsController();
const listCardController = new ListCardController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

router.get("/", (_, response: Response) => {
  return response.json({
    ok: true
  });
});

router.post(
  "/create-listing",
  ensureAuthenticated,
  createListingController.handle
);
router.get(
  "/listings",
  ensureAuthenticated,
  listPlayerListingController.handle
);
router.get("/listings/:name", ensureAuthenticated, listCardController.handle);
router.post("/create-user", createUserController.handle);
router.post("/login/user", authenticateUserController.handle);

export { router };
