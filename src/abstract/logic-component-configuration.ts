export default abstract class LogicComponentConfiguration {
    public abstract merge(configuration: this): this;

    public abstract mergeObject(configuration: object): this;
}
