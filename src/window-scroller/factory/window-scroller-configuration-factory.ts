import LogicComponentConfigurationFactory from "abstract/logic-component-configuration-factory";
import WindowScrollerConfiguration from "window-scroller/window-scroller-configuration";

export default class WindowScrollerConfigurationFactory extends LogicComponentConfigurationFactory {

    private defaultConfiguration: object = {
        locationAttribute: "data-scroll-to",
        offset: 0,
        scrollDefaultPosition: 0,
        scrollDuration: 500,
        scrollPeriod: 20,
        selector: ".window-scroller",
    };

    public createFromObject(configurationObject: object = {}): WindowScrollerConfiguration {
        return this.createOrThrow(configurationObject) as WindowScrollerConfiguration;
    }

    public createInstanceFromObject(configurationObject: object = {}): WindowScrollerConfiguration {
        const configuration = new WindowScrollerConfiguration();
        return configuration.mergeObject(configurationObject);
    }

    public getDefaultConfigurationObject(): object {
        return this.defaultConfiguration;
    }
}
