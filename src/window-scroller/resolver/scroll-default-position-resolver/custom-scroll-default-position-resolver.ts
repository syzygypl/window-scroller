import LogicComponentResolverFunction from "abstract/logic-component-resolver-function";
import {isNumber} from "util";
import ScrollDefaultPositionResolver from "./scroll-default-position-resolver";

export class CustomScrollDefaultPositionResolver
    extends LogicComponentResolverFunction<number>
    implements ScrollDefaultPositionResolver {

    public resolve(element: Element): number {
        return this.callResolverFunction(element);
    }

    protected checkReturnedValue(result: number) {
        if (!isNumber(result)) {
            throw new Error("Resolving default position: function return type must be number");
        }
    }

}
