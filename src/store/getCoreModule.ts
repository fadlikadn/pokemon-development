import reducer from "./reducer";
import saga from "./sagas";

export const reducerId = "core";

export default () => ({
    id: reducerId,
    reducerMap: {
        [reducerId]: reducer,
    },
    sagas: [saga],
});
