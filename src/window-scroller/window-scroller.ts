import LogicComponent from "abstract/logic-component";
import LogicComponentConfiguration from "abstract/logic-component-configuration";
import WindowScrollerResolverService from "./service/window-scroller-resolver-service";
import ToElementScroller from "./to-element-scroller";
import WindowScrollerConfiguration from "./window-scroller-configuration";

export default class WindowScroller implements LogicComponent {
    public constructor(private configuration: WindowScrollerConfiguration,
                       private resolverService: WindowScrollerResolverService,
                       private toElementScroller: ToElementScroller) {
        this.initialize();
    }

    public getConfiguration(): LogicComponentConfiguration {
        return this.configuration;
    }

    private initialize(): void {
        this.addClickEventListener(this.resolverService.resolveLinkingElements());
    }

    private addClickEventListener(elements: Element[]) {
        elements.forEach((element: Element) => {
            element.addEventListener("click",
                (event) => this.clickEventListener(event.srcElement));
        });
    }

    private clickEventListener(anchorElement: Element): void {
        const anchor: string = this.resolverService.resolveElementLinkAnchor(anchorElement);

        if (!anchor) {
            return;
        }

        const linkedElement: Element = this.resolverService.resolveElementByAnchor(anchor);

        this.toElementScroller.scrollToElement(anchorElement, linkedElement);
    }
}
