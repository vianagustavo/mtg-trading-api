"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var errorHandler_1 = require("./middleware/errorHandler");
var routes_1 = require("./routes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map