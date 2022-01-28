import { LazyExoticComponent } from "react";

export default interface ComponentDefinition {
    componentId: string;
    componentRoute: string;
    componentRouteExact: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: LazyExoticComponent<any>;
    componentAlwaysLoaded: boolean;
}
