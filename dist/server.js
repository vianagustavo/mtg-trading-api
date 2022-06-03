"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
require("reflect-metadata");
try {
    app_1.default.listen(process.env.PORT, function () {
        return console.log("Server is running on port (".concat(process.env.PORT, ")"));
    });
}
catch (err) {
    console.log(err);
}
//# sourceMappingURL=server.js.map