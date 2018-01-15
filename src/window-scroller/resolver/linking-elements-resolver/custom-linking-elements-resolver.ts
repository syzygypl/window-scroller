import LogicComponentResolverFunction from "abstract/logic-component-resolver-function";
import {isArray} from "util";
import LinkingElementsResolver from "./linking-elements-resolver";

export default class CustomLinkingElementsResolver
    extends LogicComponentResolverFunction<Element[]>
    implements LinkingElementsResolver {
    public resolve(): Element[] {
        return this.callResolverFunction();
    }

    protected checkReturnedValue(result: Element[]) {
        if (!isArray(result)) {
            throw Error("Resolving linking elements: function returned type is not array");
        }
    }

}
