"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var EnvironmentDetectUtility = function () {
    function EnvironmentDetectUtility() {
        _classCallCheck(this, EnvironmentDetectUtility);
    }

    _createClass(EnvironmentDetectUtility, null, [{
        key: "isNode",
        value: function isNode() {
            return !EnvironmentDetectUtility.isBrowser();
        }
    }, {
        key: "isBrowser",
        value: function isBrowser() {
            return typeof window !== "undefined";
        }
    }, {
        key: "throwIfBrowser",
        value: function throwIfBrowser() {
            if (EnvironmentDetectUtility.isBrowser()) {
                throw new Error("Module must be run only in node");
            }
        }
    }, {
        key: "throwIfNode",
        value: function throwIfNode() {
            if (!EnvironmentDetectUtility.isBrowser()) {
                throw new Error("Module must be run only in browser");
            }
        }
    }]);

    return EnvironmentDetectUtility;
}();

exports.default = EnvironmentDetectUtility;