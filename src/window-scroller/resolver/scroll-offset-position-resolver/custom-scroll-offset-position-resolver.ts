import LogicComponentResolverFunction from "abstract/logic-component-resolver-function";
import {isNumber} from "util";
import ScrollOffsetPositionResolver from "./scroll-offset-position-resolver";

export default class CustomScrollOffsetPositionResolver
    extends LogicComponentResolverFunction<number>
    implements ScrollOffsetPositionResolver {

    public resolve(element: Element, windowScrollingElement: Element): number {
        return this.callResolverFunction(element, windowScrollingElement);
    }

    protected checkReturnedValue(result: number) {
        if (!isNumber(result)) {
            throw new Error("Resolving scroll offset: function returned type is not number");
        }
    }
}
