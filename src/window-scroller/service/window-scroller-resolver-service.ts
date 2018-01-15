/* tslint:disable:max-line-length */
import ElementByAnchorResolver from "window-scroller/resolver/element-by-anchor-resolver/element-by-anchor-resolver";
import ElementLinkAnchorResolver from "window-scroller/resolver/element-link-anchor-resolver/element-linking-anchor-resolver";
import LinkingElementsResolver from "window-scroller/resolver/linking-elements-resolver/linking-elements-resolver";

export default class WindowScrollerResolverService {

    constructor(private linkingElementsResolver: LinkingElementsResolver,
                private elementLinkAnchorResolver: ElementLinkAnchorResolver,
                private elementByAnchorResolver: ElementByAnchorResolver) {
    }

    public resolveLinkingElements(): Element[] {
        return this.linkingElementsResolver.resolve();
    }

    public resolveElementLinkAnchor(element: Element): string {
        return this.elementLinkAnchorResolver.resolve(element);
    }

    public resolveElementByAnchor(anchor: string): Element {
        return this.elementByAnchorResolver.resolve(anchor);
    }
}
