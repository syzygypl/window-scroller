"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:enable:max-line-length */

var ToElementScrollerResolverService = function () {
    function ToElementScrollerResolverService(scrollDefaultPositionResolver, elementScrollPositionResolver, scrollOffsetResolver, elementScrollDurationResolver, windowScrollingElementResolver) {
        _classCallCheck(this, ToElementScrollerResolverService);

        this.scrollDefaultPositionResolver = scrollDefaultPositionResolver;
        this.elementScrollPositionResolver = elementScrollPositionResolver;
        this.scrollOffsetResolver = scrollOffsetResolver;
        this.elementScrollDurationResolver = elementScrollDurationResolver;
        this.windowScrollingElementResolver = windowScrollingElementResolver;
    }

    _createClass(ToElementScrollerResolverService, [{
        key: "resolveElementScrollPosition",
        value: function resolveElementScrollPosition(element) {
            return this.elementScrollPositionResolver.resolve(element, this.windowScrollingElementResolver.resolve(), this.scrollOffsetResolver);
        }
    }, {
        key: "resolveScrollDefaultPosition",
        value: function resolveScrollDefaultPosition(element) {
            return this.scrollDefaultPositionResolver.resolve(element);
        }
    }, {
        key: "resolveElementScrollDuration",
        value: function resolveElementScrollDuration(anchorElement, element) {
            return this.elementScrollDurationResolver.resolve(anchorElement, element);
        }
    }]);

    return ToElementScrollerResolverService;
}();

exports.default = ToElementScrollerResolverService;