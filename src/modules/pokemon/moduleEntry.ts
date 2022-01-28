import { lazy } from "react";
import ModuleDefinition from "../../interfaces/moduleDefinition";
import { moduleId } from "./settings/config";

export const moduleEntry: ModuleDefinition = {
    moduleId,
    moduleComponents: [
        {
            componentId: "root-pokemon",
            component: lazy(() => import("./components/RootPokemon")),
            componentRoute: "/",
            componentRouteExact: true,
            componentAlwaysLoaded: true, // TODO need set to false when implement navigation
        },
    ],
};
