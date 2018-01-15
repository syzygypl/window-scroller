export default interface ScrollOffsetResolver {
    resolve(element: Element, windowScrollingElement: Element): number;
}
