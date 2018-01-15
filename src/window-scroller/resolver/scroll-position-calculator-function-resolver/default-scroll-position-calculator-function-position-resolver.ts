import ScrollPositionCalculatorFunction from "window-scroller/calculator/scroll-position-calculator-function";
import ScrollPositionCalculatorFunctionResolver from "./scroll-position-calculator-function-resolver";

export default class DefaultScrollPositionCalculatorFunctionResolver
    implements ScrollPositionCalculatorFunctionResolver {
    constructor(private calculatorFunction: ScrollPositionCalculatorFunction) {
    }

    public resolve(): ScrollPositionCalculatorFunction {
        return this.calculatorFunction;
    }
}
