import {registerDecorator, ValidationOptions} from "class-validator";

export function IsFunction(validationOptions?: ValidationOptions) {
    return (object: object, propertyName: string) => {
        registerDecorator({
            constraints: [],
            name: "IsFunction",
            options: validationOptions,
            propertyName,
            target: object.constructor,
            validator: {
                validate(value: any) {
                    return typeof value === "function";
                },
            },
        });
    };
}
