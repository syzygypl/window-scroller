export default interface ScrollPositionCalculatorFunction {
    calculate(spentTime: number, startPoint: number, difference: number, duration: number): number;
}
