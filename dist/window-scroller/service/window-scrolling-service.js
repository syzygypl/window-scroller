"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var WindowScrollingService = function () {
    function WindowScrollingService(resolverService, scrollPositionSequenceGeneratorFactory) {
        _classCallCheck(this, WindowScrollingService);

        this.resolverService = resolverService;
        this.scrollPositionSequenceGeneratorFactory = scrollPositionSequenceGeneratorFactory;
        this.windowScrollingElement = resolverService.resolveWindowScrollingElement();
    }

    _createClass(WindowScrollingService, [{
        key: "scrollTo",
        value: function scrollTo(endPoint, duration) {
            var scrollPositionCalculator = this.createScrollPositionSequenceGenerator(endPoint, duration);
            this.recursiveScrolling(scrollPositionCalculator);
        }
    }, {
        key: "recursiveScrolling",
        value: function recursiveScrolling(scrollPositionCalculator) {
            var _this = this;

            this.scroll(scrollPositionCalculator.next());
            if (!scrollPositionCalculator.isFinished()) {
                setTimeout(function () {
                    return _this.recursiveScrolling(scrollPositionCalculator);
                }, this.resolverService.resolveScrollPeriod());
            }
        }
    }, {
        key: "scroll",
        value: function scroll(position) {
            this.windowScrollingElement.scrollTop = position;
        }
    }, {
        key: "createScrollPositionSequenceGenerator",
        value: function createScrollPositionSequenceGenerator(endPoint, duration) {
            return this.scrollPositionSequenceGeneratorFactory.create(this.windowScrollingElement.scrollTop, endPoint, this.resolverService.resolveScrollPeriod(), duration, this.resolverService.resolveScrollPositionCalculatorFunction());
        }
    }]);

    return WindowScrollingService;
}();

exports.default = WindowScrollingService;