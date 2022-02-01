import { all } from "redux-saga/effects";
import watchFetchPokemonList from "./saga/fetchPokemonList";
import watchFetchPokemonDetail from "./saga/fetchPokemonDetail";
import watchTestFetch from "./saga/testFetch";

export default function* saga() {
    yield all([
        watchFetchPokemonList(),
        watchFetchPokemonDetail(),
        watchTestFetch(),
    ]);
}
