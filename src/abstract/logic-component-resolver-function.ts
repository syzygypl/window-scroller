export default abstract class LogicComponentResolverFunction<ReturnType> {
    private resolverFunction: (...params: any[]) => ReturnType;

    constructor(resolverFunction: (...params: any[]) => any) {
        this.resolverFunction = resolverFunction;
    }

    public callResolverFunction(...params: any[]): ReturnType {
        const result = this.resolverFunction(...params);
        this.checkReturnedValue(result);

        return result;
    }

    protected abstract checkReturnedValue(result: ReturnType): void;
}
