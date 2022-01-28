import { moduleId } from "../settings/config";
import reducer from "./reducer";
import saga from "./sagas";

export default () => ({
    id: moduleId,
    reducerMap: {
        [moduleId]: reducer,
    },
    sagas: [saga],
});
