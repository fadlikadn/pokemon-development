import { FC, Suspense, LazyExoticComponent } from "react";
import { Route } from "react-router-dom";
import { CssBaseline, Fade } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { TransitionProps } from "@mui/material/transitions";
import { useModuleLoader } from "./modules";
import useComponent from "./helpers/useComponents";
import ComponentDefinition from "./interfaces/componentDefinition";

const App = () => {
    const { getComponents } = useComponent();
    useModuleLoader();
    // eslint-disable-next-line no-console
    console.log("App");
    return (
        <SnackbarProvider
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            TransitionComponent={Fade as FC<TransitionProps>}
        >
            <CssBaseline />
            <Suspense fallback={<></>}>
                {getComponents({ componentAlwaysLoaded: true }).map((componentDefinition: ComponentDefinition) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const DynamicComponent: LazyExoticComponent<any> = componentDefinition.component;
                    return (
                        <Route
                            key={componentDefinition.componentId}
                            exact={componentDefinition.componentRouteExact === true}
                            path={componentDefinition.componentRoute}
                            render={() => <DynamicComponent />}
                        />
                    );
                })}
            </Suspense>
        </SnackbarProvider>
    );
};

export default App;
