"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:enable:max-line-length */

var DefaultElementScrollPositionResolver = function () {
    function DefaultElementScrollPositionResolver() {
        _classCallCheck(this, DefaultElementScrollPositionResolver);
    }

    _createClass(DefaultElementScrollPositionResolver, [{
        key: "resolve",
        value: function resolve(element, windowScrollingElement, offsetResolver) {
            var result = windowScrollingElement.scrollTop + element.getBoundingClientRect().top - offsetResolver.resolve(element, windowScrollingElement);
            if (result < 0) {
                return 0;
            }
            return result;
        }
    }]);

    return DefaultElementScrollPositionResolver;
}();

exports.default = DefaultElementScrollPositionResolver;