/* tslint:disable:max-line-length */
import {Validator} from "class-validator";
import ScrollPositionSequenceGeneratorFactory from "window-scroller/factory/scroll-position-sequence-generator-factory";
import ToElementScrollerFactory from "window-scroller/factory/to-element-scroller-factory";
import ToElementScrollerResolverServiceFactory from "window-scroller/factory/to-element-scroller-resolver-service-factory";
import WindowScrollerConfigurationFactory from "window-scroller/factory/window-scroller-configuration-factory";
import WindowScrollerFactory from "window-scroller/factory/window-scroller-factory";
import WindowScrollerResolverServiceFactory from "window-scroller/factory/window-scroller-resolver-service-factory";
import WindowScrollingServiceFactory from "window-scroller/factory/window-scrolling-service-factory";
import WindowScrollingServiceResolverServiceFactory from "window-scroller/factory/window-scrolling-service-resolver-service-factory";
import WindowsScrollerConfigurationValidator from "window-scroller/windows-scroller-configuration-validator";
/* tslint:enable:max-line-length */

export default class DependencyContainer {

    public createWindowScrollerFactory() {
        return new WindowScrollerFactory(this.createWindowScrollerConfigurationFactory(),
            this.createWindowScrollerResolverServiceFactory(),
            this.createToElementScrollerFactory());
    }

    private createWindowScrollerConfigurationFactory(): WindowScrollerConfigurationFactory {
        return new WindowScrollerConfigurationFactory(this.createWindowScrollerConfigurationValidator());
    }

    private createWindowScrollerConfigurationValidator(): WindowsScrollerConfigurationValidator {
        return new WindowsScrollerConfigurationValidator(new Validator());
    }

    private createWindowScrollerResolverServiceFactory(): WindowScrollerResolverServiceFactory {
        return new WindowScrollerResolverServiceFactory();
    }

    private createToElementScrollerFactory(): ToElementScrollerFactory {
        return new ToElementScrollerFactory(this.createToElementScrollerResolverServiceFactory(),
            this.createWindowScrollingServiceFactory());
    }

    private createToElementScrollerResolverServiceFactory(): ToElementScrollerResolverServiceFactory {
        return new ToElementScrollerResolverServiceFactory();
    }

    private createWindowScrollingServiceFactory(): WindowScrollingServiceFactory {
        return new WindowScrollingServiceFactory(this.createWindowScrollingServiceResolverServiceFactory(),
            this.createScrollPositionSequenceGeneratorFactory());
    }

    private createWindowScrollingServiceResolverServiceFactory(): WindowScrollingServiceResolverServiceFactory {
        return new WindowScrollingServiceResolverServiceFactory();
    }

    private createScrollPositionSequenceGeneratorFactory(): ScrollPositionSequenceGeneratorFactory {
        return new ScrollPositionSequenceGeneratorFactory();
    }

}
