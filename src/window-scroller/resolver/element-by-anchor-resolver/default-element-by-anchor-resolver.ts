import ElementByAnchorResolver from "./element-by-anchor-resolver";

export default class DefaultElementByAnchorResolver implements ElementByAnchorResolver {
    public resolve(anchor: string): Element {
        return window.document.getElementById(anchor);
    }
}
