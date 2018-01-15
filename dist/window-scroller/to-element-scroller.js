"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var ToElementScroller = function () {
    function ToElementScroller(resolverService, scrollingService) {
        _classCallCheck(this, ToElementScroller);

        this.resolverService = resolverService;
        this.scrollingService = scrollingService;
    }

    _createClass(ToElementScroller, [{
        key: "scrollToElement",
        value: function scrollToElement(anchorElement, element) {
            if (!element) {
                var defaultScrollPosition = this.resolverService.resolveScrollDefaultPosition(anchorElement);
                var defaultDuration = this.resolverService.resolveElementScrollDuration(anchorElement, null);
                this.scrollingService.scrollTo(defaultScrollPosition, defaultDuration);
                return;
            }
            var scrollPosition = this.resolverService.resolveElementScrollPosition(element);
            this.scrollingService.scrollTo(scrollPosition, this.resolverService.resolveElementScrollDuration(anchorElement, element));
        }
    }]);

    return ToElementScroller;
}();

exports.default = ToElementScroller;