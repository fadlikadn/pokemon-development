import { all } from "redux-saga/effects";
import watchFetchPokemonList from "./saga/fetchPokemonList";
import watchTestFetch from "./saga/testFetch";

export default function* saga() {
    yield all([
        watchFetchPokemonList(),
        watchTestFetch(),
    ]);
}
