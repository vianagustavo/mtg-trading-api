"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var createCardListingController_1 = require("./controllers/Listings/createCardListingController");
var deleteCardListingController_1 = require("./controllers/Listings/deleteCardListingController");
var listCardController_1 = require("./controllers/Listings/listCardController");
var listPlayerListingsController_1 = require("./controllers/Listings/listPlayerListingsController");
var updateCardListingController_1 = require("./controllers/Listings/updateCardListingController");
var authenticateUserController_1 = require("./controllers/Users/authenticateUserController");
var createUserController_1 = require("./controllers/Users/createUserController");
var ensureAuthenticated_1 = require("./middleware/ensureAuthenticated");
var router = (0, express_1.Router)();
exports.router = router;
var createListingController = new createCardListingController_1.CreateCardListingController();
var listPlayerListingController = new listPlayerListingsController_1.ListPlayerListingsController();
var listCardController = new listCardController_1.ListCardController();
var createUserController = new createUserController_1.CreateUserController();
var authenticateUserController = new authenticateUserController_1.AuthenticateUserController();
var deleteCardListingController = new deleteCardListingController_1.DeleteCardListingController();
var updateCardListingController = new updateCardListingController_1.UpdateCardListingController();
router.get("/", function (_, response) {
    return response.json({
        ok: true
    });
});
router.post("/user", createUserController.handle);
router.post("/login/user", authenticateUserController.handle);
router.post("/create-listing", ensureAuthenticated_1.ensureAuthenticated, createListingController.handle);
router.get("/listing", ensureAuthenticated_1.ensureAuthenticated, listPlayerListingController.handle);
router.get("/listing/:name", ensureAuthenticated_1.ensureAuthenticated, listCardController.handle);
router.patch("/listing/:id", ensureAuthenticated_1.ensureAuthenticated, updateCardListingController.handle);
router.delete("/listing/:id", ensureAuthenticated_1.ensureAuthenticated, deleteCardListingController.handle);
//# sourceMappingURL=routes.js.map