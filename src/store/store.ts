import { createStore } from "redux-dynamic-modules-core";
import { initialState } from "./reducer";
import getCoreModule from "./getCoreModule";

export const store = createStore({
    initialState: { core: initialState },
}, getCoreModule());
