export default class WindowScrollingElementResolver {
    public resolve(): Element {
        const windowScrollingElement = window.document.scrollingElement ||
            window.document.documentElement;

        if (!windowScrollingElement) {
            throw new Error("Window scrolling element is not found");
        }

        return windowScrollingElement;
    }
}
