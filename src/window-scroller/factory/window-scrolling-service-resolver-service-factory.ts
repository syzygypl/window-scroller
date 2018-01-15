/* tslint:disable:max-line-length */
import {isNullOrUndefined} from "util";
import CustomScrollPositionCalculatorFunction from "window-scroller/calculator/custom-scroll-position-calculator-function";
import DefaultScrollPositionCalculatorFunction from "window-scroller/calculator/default-scroll-position-calculator-function";
import DefaultScrollPeriodResolver from "window-scroller/resolver/scroll-period-resolver/default-scroll-period-resolver";
import ScrollPeriodResolver from "window-scroller/resolver/scroll-period-resolver/scroll-period-resover";
import DefaultScrollPositionCalculatorFunctionResolver from "window-scroller/resolver/scroll-position-calculator-function-resolver/default-scroll-position-calculator-function-position-resolver";
import ScrollPositionCalculatorFunctionResolver from "window-scroller/resolver/scroll-position-calculator-function-resolver/scroll-position-calculator-function-resolver";
import WindowScrollingElementResolver from "window-scroller/resolver/window-scrolling-element-resolver/window-scrolling-element-resolver";
import WindowScrollingServiceResolverService from "window-scroller/service/window-scrolling-service-resolver-service";
import WindowScrollerConfiguration from "window-scroller/window-scroller-configuration";

export default class WindowScrollingServiceResolverServiceFactory {

    public createFromConfiguration(configuration: WindowScrollerConfiguration) {
        return new WindowScrollingServiceResolverService(this.createWindowScrollElementResolver(),
            this.createScrollPeriodResolver(configuration),
            this.createScrollPositionCalculatorFunctionResolver(configuration));
    }

    private createWindowScrollElementResolver(): WindowScrollingElementResolver {
        return new WindowScrollingElementResolver();
    }

    private createScrollPeriodResolver(configuration: WindowScrollerConfiguration): ScrollPeriodResolver {
        return new DefaultScrollPeriodResolver(configuration.getScrollPeriod());
    }

    private createScrollPositionCalculatorFunctionResolver(configuration: WindowScrollerConfiguration): ScrollPositionCalculatorFunctionResolver {
        if (!isNullOrUndefined(configuration.getScrollPositionCalculatorFunction())) {
            return new DefaultScrollPositionCalculatorFunctionResolver(
                new CustomScrollPositionCalculatorFunction(configuration.getScrollPositionCalculatorFunction()));
        }
        return new DefaultScrollPositionCalculatorFunctionResolver(new DefaultScrollPositionCalculatorFunction());
    }
}
