/* tslint:disable:max-line-length */
import LogicComponentResolverFunction from "abstract/logic-component-resolver-function";
import {isNumber} from "util";
import ScrollOffsetPositionResolver from "window-scroller/resolver/scroll-offset-position-resolver/scroll-offset-position-resolver";
import ElementScrollPositionResolver from "./element-scroll-position-resolver";
/* tslint:enable:max-line-length */

export default class CustomElementScrollPositionResolver
    extends LogicComponentResolverFunction<number>
    implements ElementScrollPositionResolver {

    public resolve(element: Element,
                   windowScrollingElement: Element,
                   offsetResolver: ScrollOffsetPositionResolver): number {
        return this.callResolverFunction(element, windowScrollingElement, offsetResolver);
    }

    protected checkReturnedValue(result: number) {
        if (!isNumber(result)) {
            throw new Error("Resolving element position: function return type is not number");
        } else if (result < 0) {
            throw new Error("Resolving element position: function return value mus be higher that 0");
        }
    }
}
