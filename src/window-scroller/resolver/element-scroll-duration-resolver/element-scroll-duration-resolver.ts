export default interface ElementScrollDurationResolver {
    resolve(anchorElement: Element, element: Element): number;
}
