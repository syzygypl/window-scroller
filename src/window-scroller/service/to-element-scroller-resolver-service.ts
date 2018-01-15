/* tslint:disable:max-line-length */
import ElementScrollDurationResolver from "window-scroller/resolver/element-scroll-duration-resolver/element-scroll-duration-resolver";
import ElementScrollPositionResolver from "window-scroller/resolver/element-scroll-position-resolver/element-scroll-position-resolver";
import ScrollDefaultPositionResolver from "window-scroller/resolver/scroll-default-position-resolver/scroll-default-position-resolver";
import ScrollOffsetResolver from "window-scroller/resolver/scroll-offset-position-resolver/scroll-offset-position-resolver";
import WindowScrollingElementResolver from "window-scroller/resolver/window-scrolling-element-resolver/window-scrolling-element-resolver";
/* tslint:enable:max-line-length */

export default class ToElementScrollerResolverService {
    constructor(private scrollDefaultPositionResolver: ScrollDefaultPositionResolver,
                private elementScrollPositionResolver: ElementScrollPositionResolver,
                private scrollOffsetResolver: ScrollOffsetResolver,
                private elementScrollDurationResolver: ElementScrollDurationResolver,
                private windowScrollingElementResolver: WindowScrollingElementResolver) {
    }

    public resolveElementScrollPosition(element: Element): number {
        return this.elementScrollPositionResolver
            .resolve(element, this.windowScrollingElementResolver.resolve(), this.scrollOffsetResolver);
    }

    public resolveScrollDefaultPosition(element: Element): number {
        return this.scrollDefaultPositionResolver.resolve(element);
    }

    public resolveElementScrollDuration(anchorElement: Element, element: Element): number {
        return this.elementScrollDurationResolver.resolve(anchorElement, element);
    }
}
