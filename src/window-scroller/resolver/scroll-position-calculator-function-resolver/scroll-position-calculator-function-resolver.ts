import ScrollPositionCalculatorFunction from "window-scroller/calculator/scroll-position-calculator-function";

export default interface ScrollPositionCalculatorFunctionResolver {
    resolve(): ScrollPositionCalculatorFunction;
}
