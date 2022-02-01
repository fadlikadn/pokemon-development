import { createStore } from "redux-dynamic-modules-core";
import { getSagaExtension } from "redux-dynamic-modules-saga";
// import { routerMiddleware } from "connected-react-router";
import { useHistory } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import { applyMiddleware, compose } from "redux";
import { initialState } from "./reducer";
import getCoreModule from "./getCoreModule";

const extensions = [getSagaExtension()];
// export const history = createBrowserHistory();
// export const history = useHistory();

export const configureStore = createStore({
    initialState: { core: initialState },
    extensions,
    // enhancers: [compose(applyMiddleware(routerMiddleware(history)))],
}, getCoreModule());

export default configureStore;
