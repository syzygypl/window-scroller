/* tslint:disable:max-line-length */
import ScrollOffsetPositionResolver from "window-scroller/resolver/scroll-offset-position-resolver/scroll-offset-position-resolver";
import ElementScrollPositionResolver from "./element-scroll-position-resolver";
/* tslint:enable:max-line-length */

export default class DefaultElementScrollPositionResolver implements ElementScrollPositionResolver {
    public resolve(element: Element,
                   windowScrollingElement: Element,
                   offsetResolver: ScrollOffsetPositionResolver): number {
        const result = windowScrollingElement.scrollTop
            + element.getBoundingClientRect().top
            - offsetResolver.resolve(element, windowScrollingElement);

        if (result < 0) {
            return 0;
        }

        return result;
    }
}
