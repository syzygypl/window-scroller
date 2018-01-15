/* tslint:disable:max-line-length */
import ScrollOffsetPositionResolver from "window-scroller/resolver/scroll-offset-position-resolver/scroll-offset-position-resolver";
/* tslint:enable:max-line-length */

export default interface ElementScrollPositionResolver {
    resolve(element: Element, windowScrollingElement: Element, offsetResolver: ScrollOffsetPositionResolver): number;
}
