import WindowScrollingService from "window-scroller/service/window-scrolling-service";
import WindowScrollerConfiguration from "window-scroller/window-scroller-configuration";
import ScrollPositionSequenceGeneratorFactory from "./scroll-position-sequence-generator-factory";
import WindowScrollingServiceResolverServiceFactory from "./window-scrolling-service-resolver-service-factory";

export default class WindowScrollingServiceFactory {

    constructor(private resolverServiceFactory: WindowScrollingServiceResolverServiceFactory,
                private scrollPositionSequenceGeneratorFactory: ScrollPositionSequenceGeneratorFactory) {
    }

    public createFromConfiguration(configuration: WindowScrollerConfiguration): WindowScrollingService {
        return new WindowScrollingService(this.resolverServiceFactory.createFromConfiguration(configuration),
            this.scrollPositionSequenceGeneratorFactory);
    }
}
