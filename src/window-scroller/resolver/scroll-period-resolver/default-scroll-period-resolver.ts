import ScrollPeriodResolver from "./scroll-period-resover";

export default class DefaultScrollPeriodResolver implements ScrollPeriodResolver {

    constructor(private period: number) {
    }

    public resolve() {
        return this.period;
    }

}
