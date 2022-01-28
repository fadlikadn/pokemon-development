import { all } from "redux-saga/effects";
import watchFetchPokemonList from "./saga/fetchPokemonList";

export default function* saga() {
    yield all([
        watchFetchPokemonList(),
    ]);
}
