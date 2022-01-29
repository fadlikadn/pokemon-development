import {
    takeEvery, put, call,
} from "redux-saga/effects";
import { fetchPokemonList as fetchPokemonListService } from "../../services/PokemonService";
import { PokemonActionKeys, FetchPokemonListAction } from "../actionTypes";
import Pokemon from "../../models/pokemon";
import PaginationResponse from "../../../../interfaces/paginationResponse";
import { FETCH_POKEMON_LIST_SUCCESS_ACTION_CREATOR } from "../actions";

function* implFetchPokemonList(action: FetchPokemonListAction) {
    try {
        const paginatedPokemonList: PaginationResponse<Pokemon> = yield call(
            fetchPokemonListService,
            action.payload?.offset || 0,
            action.payload?.limit || 151,
        );
        yield put(FETCH_POKEMON_LIST_SUCCESS_ACTION_CREATOR(paginatedPokemonList));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

function* watchFetchPokemonList() {
    yield takeEvery(PokemonActionKeys.FETCH_POKEMON_LIST, implFetchPokemonList);
}

export default watchFetchPokemonList;
