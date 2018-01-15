import ElementScrollDurationResolver from "./element-scroll-duration-resolver";

export default class DefaultElementScrollDurationResolver implements ElementScrollDurationResolver {

    constructor(private duration: number) {
    }

    public resolve(anchorElement: Element, element: Element): number {
        return this.duration;
    }
}
