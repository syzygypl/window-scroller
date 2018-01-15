import LogicComponentConfiguration from "./logic-component-configuration";

export default interface LogicComponent {
    getConfiguration(): LogicComponentConfiguration;
}
