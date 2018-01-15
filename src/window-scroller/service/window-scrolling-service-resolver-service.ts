/* tslint:disable:max-line-length */
import ScrollPositionCalculatorFunction from "window-scroller/calculator/scroll-position-calculator-function";
import ScrollPeriodResolver from "window-scroller/resolver/scroll-period-resolver/scroll-period-resover";
import ScrollPositionCalculatorFunctionResolver from "window-scroller/resolver/scroll-position-calculator-function-resolver/scroll-position-calculator-function-resolver";
import WindowScrollingElementResolver from "window-scroller/resolver/window-scrolling-element-resolver/window-scrolling-element-resolver";
/* tslint:enable:max-line-length */

export default class WindowScrollingServiceResolverService {

    constructor(private windowScrollingElementResolver: WindowScrollingElementResolver,
                private scrollPeriodResolver: ScrollPeriodResolver,
                private scrollPositionCalculatorFunctionResolver: ScrollPositionCalculatorFunctionResolver) {
    }

    public resolveWindowScrollingElement(): Element {
        return this.windowScrollingElementResolver.resolve();
    }

    public resolveScrollPeriod(): number {
        return this.scrollPeriodResolver.resolve();
    }

    public resolveScrollPositionCalculatorFunction(): ScrollPositionCalculatorFunction {
        return this.scrollPositionCalculatorFunctionResolver.resolve();
    }
}
