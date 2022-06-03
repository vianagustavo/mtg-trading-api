"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var error_1 = require("../domain/error");
function errorHandler(err, req, res, next) {
    console.log(err);
    if (err instanceof error_1.InvalidArgument) {
        return res.status(400).json({
            error: err.message
        });
    }
    if (err instanceof error_1.NotFound) {
        return res.status(404).json({
            error: err.message
        });
    }
    if (err instanceof error_1.InternalServerError) {
        return res.status(500).json({
            error: err.message
        });
    }
    return res.status(503).json({
        status: "error",
        message: "Internal Server Error"
    });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map