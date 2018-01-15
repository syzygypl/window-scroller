export default class EnvironmentDetectUtility {

    // noinspection JSUnusedGlobalSymbols
    public static isNode(): boolean {
        return !EnvironmentDetectUtility.isBrowser();
    }

    public static isBrowser(): boolean {
        return typeof window !== "undefined";
    }

    // noinspection JSUnusedGlobalSymbols
    public static throwIfBrowser(): void {
        if (EnvironmentDetectUtility.isBrowser()) {
            throw new Error("Module must be run only in node");
        }
    }

    public static throwIfNode(): void {
        if (!EnvironmentDetectUtility.isBrowser()) {
            throw new Error("Module must be run only in browser");
        }
    }
}
