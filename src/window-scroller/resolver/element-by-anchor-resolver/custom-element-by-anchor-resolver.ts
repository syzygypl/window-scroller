import LogicComponentResolverFunction from "abstract/logic-component-resolver-function";
import ElementByAnchorResolver from "./element-by-anchor-resolver";

export default class CustomElementByAnchorResolver
    extends LogicComponentResolverFunction<Element>
    implements ElementByAnchorResolver {

    public resolve(anchor: string): Element {
        return this.callResolverFunction(anchor);
    }

    protected checkReturnedValue(result: Element) {
        if (!(result instanceof Element)) {
            throw new Error("Resolving element by anchor: function returned type is not Element");
        }
    }
}
