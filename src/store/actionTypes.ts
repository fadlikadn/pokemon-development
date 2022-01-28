import ModuleDefinition from "../interfaces/moduleDefinition";
import ComponentDefinition from "../interfaces/componentDefinition";

export const ADD_MODULE = "CORE_ADD_MODULE";
export const ADD_COMPONENT = "CORE_ADD_COMPONENT";
export const ADD_MENU = "CORE_ADD_MENU";

export interface AddModuleAction {
    type: typeof ADD_MODULE;
    payload: {
        moduleDefinition: ModuleDefinition;
    };
}

export interface AddComponentAction {
    type: typeof ADD_COMPONENT;
    payload: {
        componentDefinition: ComponentDefinition;
    };
}

export interface AddMenuAction {
    type: typeof ADD_MENU;
}

export type ActionTypes =
    AddModuleAction |
    AddComponentAction |
    AddMenuAction;
