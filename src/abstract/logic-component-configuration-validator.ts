import {ValidationError, Validator} from "class-validator";
import {isArray} from "util";
import LogicComponentConfiguration from "./logic-component-configuration";

export default class LogicComponentConfigurationValidator {
    constructor(private validator: Validator) {
    }

    public validate(configuration: LogicComponentConfiguration) {
        const errors = this.validator.validateSync(configuration, {skipMissingProperties: true});

        if (isArray(errors) && errors.length !== 0) {
            throw Error(this.formatErrors(errors));
        }
    }

    private formatErrors(errors: ValidationError[]): string {
        const messages = errors.map((error: ValidationError) => {
            return error.property.toString() + ": \n" + this.formatFailedConstraints(error.constraints);
        });

        return messages.join("\n");
    }

    private formatFailedConstraints(constraints: {[type: string]: string }) {
        const error = Object.keys(constraints).map((key, index) => {
            return index + ") " + constraints[key];
        });

        return error.join("\n");
    }
}
