import ScrollOffsetResolver from "./scroll-offset-position-resolver";

export default class DefaultScrollOffsetResolver implements ScrollOffsetResolver {

    constructor(private scrollOffset: number) {
    }

    public resolve(element: Element, windowScrollingElement: Element): number {
        return this.scrollOffset;
    }
}
