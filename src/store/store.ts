import { createStore } from "redux-dynamic-modules-core";
import { getSagaExtension } from "redux-dynamic-modules-saga";
import { initialState } from "./reducer";
import getCoreModule from "./getCoreModule";

const extensions = [getSagaExtension()];

export const store = createStore({
    initialState: { core: initialState },
    extensions,
}, getCoreModule());
