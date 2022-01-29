import {
    takeEvery, put, call,
} from "redux-saga/effects";
import { PokemonActionKeys, TestFetchAction } from "../actionTypes";

function* implTestFetch(action: TestFetchAction) {
    // eslint-disable-next-line no-console
    console.log("test fetch action saga");
}

function* watchTestFetch() {
    yield takeEvery(PokemonActionKeys.TEST_FETCH, implTestFetch);
}

export default watchTestFetch;
