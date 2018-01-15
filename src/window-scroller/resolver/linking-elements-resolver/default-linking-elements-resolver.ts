import LinkingElementsResolver from "./linking-elements-resolver";

export default class DefaultLinkingElementsResolver implements LinkingElementsResolver {

    constructor(private selector: string) {
    }

    public resolve(): Element[] {
        return [].slice.call(document.querySelectorAll(this.selector));
    }

}
