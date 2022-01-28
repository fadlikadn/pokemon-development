import { useDispatch, useSelector } from "react-redux";
import ModuleDefinition from "../interfaces/moduleDefinition";
import { ADD_MODULE_ACTION_CREATOR } from "../store/actions";
import { StateDefinition } from "../store/reducer";
import useComponent from "./useComponents";

const useModule = () => {
    const { registerComponent } = useComponent();
    const dispatch = useDispatch();
    const modules = useSelector((state: StateDefinition) => state.core.modules);

    const registerModule = (moduleDefinition: ModuleDefinition) => {
        dispatch(ADD_MODULE_ACTION_CREATOR(moduleDefinition));
    };

    const getModule = (moduleId?: string) => {
        if (!moduleId) { return undefined; }
        return modules.find((module) => module.moduleId === moduleId);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const loadModule = (moduleDefinition: ModuleDefinition) => {
        const { moduleComponents, ...module } = moduleDefinition;
        if (!moduleDefinition.moduleId) {
            return;
        }

        registerModule(module);

        if (moduleComponents) {
            moduleComponents.forEach((component) => {
                registerComponent(component);
            });
        }
    };

    return {
        modules,
        registerModule,
        getModule,
        loadModule,
    };
};

export default useModule;
