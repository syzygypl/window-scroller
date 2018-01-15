import ToElementScrollerResolverService from "./service/to-element-scroller-resolver-service";
import WindowScrollingService from "./service/window-scrolling-service";

export default class ToElementScroller {

    constructor(private resolverService: ToElementScrollerResolverService,
                private scrollingService: WindowScrollingService) {
    }

    public scrollToElement(anchorElement: Element, element: Element): void {
        if (!element) {
            const defaultScrollPosition = this.resolverService.resolveScrollDefaultPosition(anchorElement);
            const defaultDuration = this.resolverService.resolveElementScrollDuration(anchorElement, null);
            this.scrollingService.scrollTo(defaultScrollPosition, defaultDuration);

            return;
        }
        const scrollPosition = this.resolverService.resolveElementScrollPosition(element);

        this.scrollingService.scrollTo(scrollPosition,
            this.resolverService.resolveElementScrollDuration(anchorElement, element));
    }

}
