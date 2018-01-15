import LogicComponentConfiguration from "abstract/logic-component-configuration";
import {IsInt, IsString} from "class-validator";
import {IsFunction} from "custom-validator/is-function";

export default class WindowScrollerConfiguration extends LogicComponentConfiguration {
    @IsString()
    private selector: string = "";

    @IsString()
    private locationAttribute: string = "";

    @IsInt()
    private scrollDefaultPosition: number = 0;

    @IsInt()
    private offset: number = 0;

    @IsInt()
    private scrollPeriod: number = 0;

    @IsInt()
    private scrollDuration: number = 0;

    @IsFunction()
    private linkingElementsResolver: () => any;

    @IsFunction()
    private elementLinkingAnchorResolver: () => any;

    @IsFunction()
    private elementByAnchorResolver: () => any;

    @IsFunction()
    private scrollDefaultPositionResolver: () => any;

    @IsFunction()
    private elementScrollPositionResolver: () => any;

    @IsFunction()
    private scrollOffsetResolver: () => any;

    @IsFunction()
    private elementScrollDurationResolver: () => any;

    @IsFunction()
    private scrollPositionCalculatorFunction: () => any;

    public merge(configuration: this): this {
        return this.mergeObject(configuration);
    }

    public mergeObject(configurationObject: any): this {
        if (!configurationObject) {
            return this;
        }

        this.selector = configurationObject.selector || this.selector;
        this.locationAttribute = configurationObject.locationAttribute || this.locationAttribute;
        this.scrollDefaultPosition = configurationObject.scrollDefaultPosition || this.scrollDefaultPosition;
        this.offset = configurationObject.offset || this.offset;
        this.scrollPeriod = configurationObject.scrollPeriod || this.scrollPeriod;
        this.scrollDuration = configurationObject.scrollDuration || this.scrollDuration;

        this.linkingElementsResolver = configurationObject.linkingElementsResolver || this.linkingElementsResolver;
        this.elementLinkingAnchorResolver = configurationObject.elementLinkingAnchorResolver
            || this.elementLinkingAnchorResolver;
        this.elementByAnchorResolver = configurationObject.elementByAnchorResolver || this.elementByAnchorResolver;

        this.scrollDefaultPositionResolver = configurationObject.scrollDefaultPositionResolver
            || this.scrollDefaultPositionResolver;
        this.elementScrollPositionResolver = configurationObject.elementScrollPositionResolver
            || this.elementScrollPositionResolver;
        this.scrollOffsetResolver = configurationObject.scrollOffsetResolver || this.scrollOffsetResolver;

        this.elementScrollDurationResolver = configurationObject.elementScrollDurationResolver
            || this.elementScrollDurationResolver;
        this.scrollPositionCalculatorFunction = configurationObject.scrollPositionCalculatorFunction
            || this.scrollPositionCalculatorFunction;

        return this;
    }

    public getSelector(): string {
        return this.selector;
    }

    public getLocationAttribute(): string {
        return this.locationAttribute;
    }

    public getScrollDefaultPosition(): number {
        return this.scrollDefaultPosition;
    }

    public getOffset(): number {
        return this.offset;
    }

    public getScrollPeriod(): number {
        return this.scrollPeriod;
    }

    public getScrollDuration(): number {
        return this.scrollDuration;
    }

    public getLinkingElementsResolver(): () => any {
        return this.linkingElementsResolver;
    }

    public getElementLinkingAnchorResolver(): () => any {
        return this.elementLinkingAnchorResolver;
    }

    public getElementByAnchorResolver(): () => any {
        return this.elementByAnchorResolver;
    }

    public getScrollDefaultPositionResolver(): () => any {
        return this.scrollDefaultPositionResolver;
    }

    public getElementScrollPositionResolver(): () => any {
        return this.elementScrollPositionResolver;
    }

    public getScrollOffsetResolver(): () => any {
        return this.scrollOffsetResolver;
    }

    public getElementScrollDurationResolver(): () => any {
        return this.elementScrollDurationResolver;
    }

    public getScrollPositionCalculatorFunction(): () => any {
        return this.scrollPositionCalculatorFunction;
    }
}
