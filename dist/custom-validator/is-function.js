"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
function IsFunction(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            constraints: [],
            name: "IsFunction",
            options: validationOptions,
            propertyName: propertyName,
            target: object.constructor,
            validator: {
                validate: function validate(value) {
                    return typeof value === "function";
                }
            }
        });
    };
}
exports.IsFunction = IsFunction;