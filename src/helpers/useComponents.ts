import { useDispatch, useSelector } from "react-redux";
import ComponentDefinition from "../interfaces/componentDefinition";
import { ADD_COMPONENT_ACTION_CREATOR } from "../store/actions";
import { StateDefinition } from "../store/reducer";

const useComponent = () => {
    const components = useSelector((state: StateDefinition) => state.core.components);
    const dispatch = useDispatch();

    const registerComponent = (componentDefinition: ComponentDefinition) => {
        dispatch(ADD_COMPONENT_ACTION_CREATOR(componentDefinition));
    };

    const getComponent = (componentId?: string) => {
        if (!componentId) {
            return undefined;
        }
        return components.find((component) => component.componentId === componentId);
    };

    const getComponents = (options?: {
        componentAlwaysLoaded?: boolean,
    }) => components.filter((component) => (options?.componentAlwaysLoaded !== undefined ? component.componentAlwaysLoaded === options.componentAlwaysLoaded : true));

    return {
        components,
        registerComponent,
        getComponent,
        getComponents,
    };
};

export default useComponent;
