import ElementLinkAnchorResolver from "./element-linking-anchor-resolver";

export default class DefaultElementLinkingAnchorResolver implements ElementLinkAnchorResolver {
    constructor(private attribute: string) {
    }

    public resolve(element: Element): string {
        return element.getAttribute(this.attribute);
    }
}
