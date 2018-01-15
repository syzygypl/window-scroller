import ScrollDefaultPositionResolver from "./scroll-default-position-resolver";

export default class DefaultScrollDefaultPositionResolver implements ScrollDefaultPositionResolver {
    constructor(private defaultPosition: number) {
    }

    public resolve(element: Element): number {
        return this.defaultPosition;
    }
}
