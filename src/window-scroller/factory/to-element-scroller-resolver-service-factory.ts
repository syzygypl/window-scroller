/* tslint:disable:max-line-length */
import {isNullOrUndefined} from "util";
import CustomElementScrollDurationResolver from "window-scroller/resolver/element-scroll-duration-resolver/custom-element-scroll-duration-resolver";
import DefaultElementScrollDurationResolver from "window-scroller/resolver/element-scroll-duration-resolver/default-element-scroll-duration-resolver";
import ElementScrollDurationResolver from "window-scroller/resolver/element-scroll-duration-resolver/element-scroll-duration-resolver";
import CustomElementScrollPositionResolver from "window-scroller/resolver/element-scroll-position-resolver/custom-element-scroll-position-resolver";
import DefaultElementScrollPositionResolver from "window-scroller/resolver/element-scroll-position-resolver/default-element-scroll-position-resolver";
import ElementScrollPositionResolver from "window-scroller/resolver/element-scroll-position-resolver/element-scroll-position-resolver";
import {CustomScrollDefaultPositionResolver} from "window-scroller/resolver/scroll-default-position-resolver/custom-scroll-default-position-resolver";
import DefaultScrollDefaultPositionResolver from "window-scroller/resolver/scroll-default-position-resolver/default-scroll-default-position-resolver";
import ScrollDefaultPositionResolver from "window-scroller/resolver/scroll-default-position-resolver/scroll-default-position-resolver";
import CustomScrollOffsetPositionResolver from "window-scroller/resolver/scroll-offset-position-resolver/custom-scroll-offset-position-resolver";
import DefaultScrollOffsetPositionResolver from "window-scroller/resolver/scroll-offset-position-resolver/default-scroll-offset-position-resolver";
import ScrollOffsetPositionResolver from "window-scroller/resolver/scroll-offset-position-resolver/scroll-offset-position-resolver";
import WindowScrollingElementResolver from "window-scroller/resolver/window-scrolling-element-resolver/window-scrolling-element-resolver";
import ToElementScrollerResolverService from "window-scroller/service/to-element-scroller-resolver-service";
import WindowScrollerConfiguration from "window-scroller/window-scroller-configuration";

export default class ToElementScrollerResolverServiceFactory {
    public createFromConfiguration(configuration: WindowScrollerConfiguration): ToElementScrollerResolverService {
        return new ToElementScrollerResolverService(this.createScrollDefaultPositionResolver(configuration),
            this.createElementScrollPositionResolver(configuration),
            this.createScrollOffsetPositionResolver(configuration),
            this.createElementScrollDurationResolver(configuration),
            new WindowScrollingElementResolver());
    }

    private createScrollDefaultPositionResolver(configuration: WindowScrollerConfiguration): ScrollDefaultPositionResolver {
        if (!isNullOrUndefined(configuration.getScrollDefaultPositionResolver())) {
            return new CustomScrollDefaultPositionResolver(configuration.getScrollDefaultPositionResolver());
        }
        return new DefaultScrollDefaultPositionResolver(configuration.getScrollDefaultPosition());
    }

    private createElementScrollPositionResolver(configuration: WindowScrollerConfiguration): ElementScrollPositionResolver {
        if (!isNullOrUndefined(configuration.getElementScrollPositionResolver())) {
            return new CustomElementScrollPositionResolver(configuration.getElementScrollPositionResolver());
        }
        return new DefaultElementScrollPositionResolver();
    }

    private createScrollOffsetPositionResolver(configuration: WindowScrollerConfiguration): ScrollOffsetPositionResolver {
        if (!isNullOrUndefined(configuration.getScrollOffsetResolver())) {
            return new CustomScrollOffsetPositionResolver(configuration.getScrollOffsetResolver());
        }
        return new DefaultScrollOffsetPositionResolver(configuration.getOffset());
    }

    private createElementScrollDurationResolver(configuration: WindowScrollerConfiguration): ElementScrollDurationResolver {
        if (!isNullOrUndefined(configuration.getElementScrollDurationResolver())) {
            return new CustomElementScrollDurationResolver(configuration.getElementScrollDurationResolver());
        }
        return new DefaultElementScrollDurationResolver(configuration.getScrollDuration());
    }
}
