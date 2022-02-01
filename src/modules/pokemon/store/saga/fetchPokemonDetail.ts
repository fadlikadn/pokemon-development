import {
    takeEvery, put, call,
} from "redux-saga/effects";
import { fetchPokemonDetail as fetchPokemonDetailService } from "../../services/PokemonService";
import { PokemonActionKeys, FetchPokemonDetailAction } from "../actionTypes";
import PokemonDetail from "../../models/pokemonDetail";
import { FETCH_POKEMON_DETAIL_SUCCESS_ACTION_CREATOR } from "../actions";

function* implFetchPokemonDetail(action: FetchPokemonDetailAction) {
    try {
        console.log("start fetch pokemon detail");
        const pokemon: PokemonDetail = yield call(fetchPokemonDetailService, action.payload.name);
        yield put(FETCH_POKEMON_DETAIL_SUCCESS_ACTION_CREATOR(pokemon));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

function* watchFetchPokemonDetail() {
    console.log("watch fetch pokemon detail");
    yield takeEvery(PokemonActionKeys.FETCH_POKEMON_DETAIL, implFetchPokemonDetail);
}

export default watchFetchPokemonDetail;