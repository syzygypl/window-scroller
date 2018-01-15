import LogicComponentFactory from "abstract/logic-component-factory";
import EnvironmentDetectUtility from "utility/environment-detect-utility";
import WindowScroller from "window-scroller/window-scroller";
import ToElementScrollerFactory from "./to-element-scroller-factory";
import WindowScrollerConfigurationFactory from "./window-scroller-configuration-factory";
import WindowScrollerResolverServiceFactory from "./window-scroller-resolver-service-factory";

export default class WindowScrollerFactory implements LogicComponentFactory {

    constructor(private configurationFactory: WindowScrollerConfigurationFactory,
                private resolverServiceFactory: WindowScrollerResolverServiceFactory,
                private toElementScrollerFactory: ToElementScrollerFactory) {
    }

    public create(configurationObject: object = null): WindowScroller {
        EnvironmentDetectUtility.throwIfNode();
        const configuration = this.configurationFactory.createFromObject(configurationObject);
        const resolverService = this.resolverServiceFactory.createFromConfiguration(configuration);
        const toElementScroller = this.toElementScrollerFactory.createFromConfiguration(configuration);
        return new WindowScroller(configuration, resolverService, toElementScroller);
    }
}
