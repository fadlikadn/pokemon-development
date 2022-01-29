import {
    all,
} from "redux-saga/effects";
// import watchFetchPokemonList from "../modules/pokemon/store/saga/fetchPokemonList";

export default function* saga() {
    yield all([
        // put saga listener here
        // watchFetchPokemonList(),
    ]);
}
