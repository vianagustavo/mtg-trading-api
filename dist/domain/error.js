"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.InvalidArgument = exports.NotFound = void 0;
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, NotFound.prototype);
        return _this;
    }
    return NotFound;
}(Error));
exports.NotFound = NotFound;
var InvalidArgument = /** @class */ (function (_super) {
    __extends(InvalidArgument, _super);
    function InvalidArgument(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, InvalidArgument.prototype);
        return _this;
    }
    return InvalidArgument;
}(Error));
exports.InvalidArgument = InvalidArgument;
var InternalServerError = /** @class */ (function (_super) {
    __extends(InternalServerError, _super);
    function InternalServerError(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, InternalServerError.prototype);
        return _this;
    }
    return InternalServerError;
}(Error));
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=error.js.map