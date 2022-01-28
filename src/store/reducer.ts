import {
    ActionTypes,
    ADD_COMPONENT,
    ADD_MODULE,
} from "./actionTypes";
import { reducerId } from "./getCoreModule";
import ModuleDefinition from "../interfaces/moduleDefinition";
import ComponentDefinition from "../interfaces/componentDefinition";

export const initialState = {
    modules: [] as ModuleDefinition[],
    components: [] as ComponentDefinition[],
};

const reducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_MODULE:
            return {
                ...state,
                modules: [...state.modules, action.payload.moduleDefinition],
            };
        case ADD_COMPONENT:
            return {
                ...state,
                components: [...state.components, action.payload.componentDefinition],
            };
        default:
            return state;
    }
};

export type StateDefinition = { [reducerId]: ReturnType<typeof reducer>};

export default reducer;
