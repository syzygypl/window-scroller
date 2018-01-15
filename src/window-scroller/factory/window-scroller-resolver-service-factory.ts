/* tslint:disable:max-line-length */
import {isNullOrUndefined} from "util";
import CustomElementByAnchorResolver from "window-scroller/resolver/element-by-anchor-resolver/custom-element-by-anchor-resolver";
import DefaultElementByAnchorResolver from "window-scroller/resolver/element-by-anchor-resolver/default-element-by-anchor-resolver";
import CustomElementLinkingAnchorResolver from "window-scroller/resolver/element-link-anchor-resolver/custom-element-linking-anchor-resolver";
import DefaultElementLinkingAnchorResolver from "window-scroller/resolver/element-link-anchor-resolver/default-element-linking-anchor-resolver";
import CustomLinkingElementsResolver from "window-scroller/resolver/linking-elements-resolver/custom-linking-elements-resolver";
import DefaultLinkingElementsResolver from "window-scroller/resolver/linking-elements-resolver/default-linking-elements-resolver";
import WindowScrollerResolverService from "window-scroller/service/window-scroller-resolver-service";
import WindowScrollerConfiguration from "window-scroller/window-scroller-configuration";
/* tslint:enable:max-line-length */

export default class WindowScrollerResolverServiceFactory {
    public createFromConfiguration(configuration: WindowScrollerConfiguration): WindowScrollerResolverService {
        return new WindowScrollerResolverService(this.createLinkingElementsResolver(configuration),
            this.createElementLinkingAnchorResolver(configuration),
            this.createElementByAnchorResolver(configuration));
    }

    private createLinkingElementsResolver(configuration: WindowScrollerConfiguration) {
        if (!isNullOrUndefined(configuration.getLinkingElementsResolver())) {
            return new CustomLinkingElementsResolver(configuration.getLinkingElementsResolver());
        }
        return new DefaultLinkingElementsResolver(configuration.getSelector());
    }

    private createElementLinkingAnchorResolver(configuration: WindowScrollerConfiguration) {
        if (!isNullOrUndefined(configuration.getElementLinkingAnchorResolver())) {
            return new CustomElementLinkingAnchorResolver(configuration.getElementLinkingAnchorResolver());
        }
        return new DefaultElementLinkingAnchorResolver(configuration.getLocationAttribute());
    }

    private createElementByAnchorResolver(configuration: WindowScrollerConfiguration) {
        if (!isNullOrUndefined(configuration.getElementByAnchorResolver())) {
            return new CustomElementByAnchorResolver(configuration.getElementByAnchorResolver());
        }
        return new DefaultElementByAnchorResolver();
    }
}
