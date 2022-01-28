import {
    AddModuleAction, AddComponentAction, ADD_MODULE, ADD_COMPONENT,
    AddMenuAction, ADD_MENU,
} from "./actionTypes";
import ComponentDefinition from "../interfaces/componentDefinition";
import ModuleDefinition from "../interfaces/moduleDefinition";

export const ADD_MODULE_ACTION_CREATOR = (moduleDefinition: ModuleDefinition): AddModuleAction => ({
    type: ADD_MODULE,
    payload: {
        moduleDefinition,
    },
});

export const ADD_COMPONENT_ACTION_CREATOR = (componentDefinition: ComponentDefinition): AddComponentAction => ({
    type: ADD_COMPONENT,
    payload: {
        componentDefinition,
    },
});

export const ADD_MENU_ACTION_CREATOR = (): AddMenuAction => ({
    type: ADD_MENU,
});
