import LogicComponentResolverFunction from "abstract/logic-component-resolver-function";
import {isNumber} from "util";
import ScrollPositionCalculatorFunction from "./scroll-position-calculator-function";

export default class CustomScrollPositionCalculatorFunction
    extends LogicComponentResolverFunction<number>
    implements ScrollPositionCalculatorFunction {

    public calculate(spentTime: number, startPoint: number, difference: number, duration: number): number {
        return this.callResolverFunction(spentTime, startPoint, difference, duration);
    }

    protected checkReturnedValue(result: number) {
        if (!isNumber(result)) {
            throw  new Error("function return type must be number");
        }
    }
}
