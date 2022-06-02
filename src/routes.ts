import { Response, Router } from "express";
import { CreateCardListingController } from "./controllers/createCardListingController";
import { ListCardController } from "./controllers/listCardController";
import { ListPlayerListingsController } from "./controllers/listPlayerListingsController";

const router = Router();

const createListingController = new CreateCardListingController();
const listPlayerListingController = new ListPlayerListingsController();
const listCardController = new ListCardController();

router.get("/", (_, response: Response) => {
    return response.json({
      ok: true
    });
  });

  router.post("/create-listing", createListingController.handle);
  router.get("/listings", listPlayerListingController.handle);
  router.get("/listings/:name", listCardController.handle);

export { router };