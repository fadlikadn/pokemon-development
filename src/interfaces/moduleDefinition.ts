import ComponentDefinition from "./componentDefinition";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default interface ModuleDefinition {
    moduleId: string;
    moduleComponents?: Array<ComponentDefinition>;
}
