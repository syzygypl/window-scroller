import ScrollPositionSequenceGeneratorFactory from "window-scroller/factory/scroll-position-sequence-generator-factory";
import ScrollPositionSequenceGenerator from "window-scroller/generator/scroll-position-sequence-generator";
import WindowScrollingServiceResolverService from "./window-scrolling-service-resolver-service";

export default class WindowScrollingService {

    private windowScrollingElement: Element;

    constructor(private resolverService: WindowScrollingServiceResolverService,
                private scrollPositionSequenceGeneratorFactory: ScrollPositionSequenceGeneratorFactory) {
        this.windowScrollingElement = resolverService.resolveWindowScrollingElement();
    }

    public scrollTo(endPoint: number, duration: number) {
        const scrollPositionCalculator = this.createScrollPositionSequenceGenerator(endPoint, duration);
        this.recursiveScrolling(scrollPositionCalculator);
    }

    private recursiveScrolling(scrollPositionCalculator: ScrollPositionSequenceGenerator) {
        this.scroll(scrollPositionCalculator.next());
        if (!scrollPositionCalculator.isFinished()) {
            setTimeout(
                () => this.recursiveScrolling(scrollPositionCalculator), this.resolverService.resolveScrollPeriod(),
            );
        }
    }

    private scroll(position: number) {
        this.windowScrollingElement.scrollTop = position;
    }

    private createScrollPositionSequenceGenerator(endPoint: number, duration: number) {
        return this.scrollPositionSequenceGeneratorFactory.create(
            this.windowScrollingElement.scrollTop,
            endPoint,
            this.resolverService.resolveScrollPeriod(),
            duration,
            this.resolverService.resolveScrollPositionCalculatorFunction());
    }
}
