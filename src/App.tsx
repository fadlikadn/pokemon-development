import { FC, Suspense, LazyExoticComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { CssBaseline, Fade } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { TransitionProps } from "@mui/material/transitions";
import { useModuleLoader } from "./modules";
import useComponent from "./helpers/useComponents";
import ComponentDefinition from "./interfaces/componentDefinition";
interface AppProps {
    // history: any,
}

const App: FC<AppProps> = ({ 
    // history: any,
}): JSX.Element => {
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
                {/* <ConnectedRouter history={history}> */}
                <Switch>
                {/* {getComponents({ componentAlwaysLoaded: true }).map((componentDefinition: ComponentDefinition) => { */}
                    {getComponents({ componentAlwaysLoaded: false }).map((componentDefinition: ComponentDefinition) => {
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
                </Switch>
                {/* </ConnectedRouter> */}
            </Suspense>
        </SnackbarProvider>
    );
};

export default App;
