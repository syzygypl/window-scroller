import LogicComponentConfiguration from "./logic-component-configuration";
import LogicComponentConfigurationValidator from "./logic-component-configuration-validator";

export default abstract class LogicComponentConfigurationFactory {

    public constructor(private configurationValidator: LogicComponentConfigurationValidator) {
    }

    public abstract createInstanceFromObject(configurationObject: object): LogicComponentConfiguration;

    public abstract getDefaultConfigurationObject(): object;

    public createDefault(): LogicComponentConfiguration {
        return this.createInstanceFromObject(this.getDefaultConfigurationObject());
    }

    // noinspection JSUnusedGlobalSymbols
    public clone(configuration: LogicComponentConfiguration): LogicComponentConfiguration {
        return this.createInstanceFromObject(configuration);
    }

    public createOrThrow(configurationObject: object): LogicComponentConfiguration {
        configurationObject = configurationObject || {};
        const configuration = this.createDefault().merge(this.createInstanceFromObject(configurationObject));
        this.configurationValidator.validate(configuration);
        return configuration;
    }

}
