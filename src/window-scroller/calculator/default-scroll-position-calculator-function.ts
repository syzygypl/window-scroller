import ScrollPositionCalculatorFunction from "./scroll-position-calculator-function";

export default class DefaultScrollPositionCalculatorFunction implements ScrollPositionCalculatorFunction {
    public calculate(spentTime: number, startPoint: number, difference: number, duration: number): number {
        spentTime /= duration / 2;
        if (spentTime < 1) {
            return difference / 2 * spentTime * spentTime + startPoint;
        }
        spentTime--;
        return -difference / 2 * (spentTime * (spentTime - 2) - 1) + startPoint;
    }

}
