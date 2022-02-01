import { lazy } from "react";
import ModuleDefinition from "../../interfaces/moduleDefinition";
import { moduleId } from "./settings/config";

export const moduleEntry: ModuleDefinition = {
    moduleId,
    moduleComponents: [
        {
            componentId: "pokemon-list",
            component: lazy(() => import("./components/RootPokemon")),
            componentRoute: "/",
            componentRouteExact: true,
            componentAlwaysLoaded: false, // TODO need set to false when implement navigation
        },
        {
            componentId: "pokemon-list",
            component: lazy(() => import("./components/PokemonDetail")),
            componentRoute: "/pokemon/:name",
            componentRouteExact: false,
            componentAlwaysLoaded: false,
        },
    ],
};
