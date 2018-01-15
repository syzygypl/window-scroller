import LogicComponentResolverFunction from "abstract/logic-component-resolver-function";
import {isNumber} from "util";
import ElementScrollDurationResolver from "./element-scroll-duration-resolver";

export default class CustomElementScrollDurationResolver
    extends LogicComponentResolverFunction<number>
    implements ElementScrollDurationResolver {
    public resolve(anchorElement: Element, element: Element): number {
        return this.callResolverFunction(element);
    }

    protected checkReturnedValue(result: number) {
        if (!isNumber(result)) {
            throw new Error("Resolving scroll duration: function return type must be number");
        } else if (result < 100) {
            throw new Error("Resolving scroll duration: function return value must be  higher that 100");
        }
    }

}
