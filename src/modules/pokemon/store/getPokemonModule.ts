import { moduleId } from "../settings/config";
import reducer from "./reducer";
import saga from "./sagas";
// import { routerReducer } from "../../../store/routerReducer";

export default () => ({
    id: moduleId,
    reducerMap: {
        [moduleId]: reducer,
        // router: routerReducer,
    },
    sagas: [saga],
});
