import LogicComponentResolverFunction from "abstract/logic-component-resolver-function";
import {isString} from "util";
import ElementLinkingAnchorResolver from "./element-linking-anchor-resolver";

export default class CustomElementLinkingAnchorResolver
    extends LogicComponentResolverFunction<string>
    implements ElementLinkingAnchorResolver {

    public resolve(element: Element): string {
        return this.callResolverFunction(element);
    }

    protected checkReturnedValue(result: string) {
        if (!isString(result)) {
            throw new Error("Resolving linking anchor: function returned type is not string");
        }
    }
}
