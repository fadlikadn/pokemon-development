import reducer from "./reducer";
import saga from "./sagas";
// import { routerReducer } from "./routerReducer";

export const reducerId = "core";

export default () => ({
    id: reducerId,
    reducerMap: {
        [reducerId]: reducer,
        // router: routerReducer,
    },
    sagas: [saga],
});
