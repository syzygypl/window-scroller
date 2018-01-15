import ToElementScroller from "window-scroller/to-element-scroller";
import WindowScrollerConfiguration from "window-scroller/window-scroller-configuration";
import ToElementScrollerResolverServiceFactory from "./to-element-scroller-resolver-service-factory";
import WindowScrollingServiceFactory from "./window-scrolling-service-factory";

export default class ToElementScrollerFactory {

    constructor(private resolverServiceFactory: ToElementScrollerResolverServiceFactory,
                private scrollingServiceFactory: WindowScrollingServiceFactory) {
    }

    public createFromConfiguration(configuration: WindowScrollerConfiguration) {
        return new ToElementScroller(this.resolverServiceFactory.createFromConfiguration(configuration),
            this.scrollingServiceFactory.createFromConfiguration(configuration));
    }

}
