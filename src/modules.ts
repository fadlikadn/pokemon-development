import { useEffect } from "react";
import { moduleEntry as pokemonModuleEntry } from "./modules/pokemon/moduleEntry";
import useModule from "./helpers/useModule";

export const useModuleLoader = () => {
    const { loadModule } = useModule();

    useEffect(() => {
        loadModule(pokemonModuleEntry);
    }, []);
};
