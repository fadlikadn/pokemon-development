import PaginationResponse from "../../../interfaces/paginationResponse";
import Pokemon from "../models/pokemon";
import {
    PokemonActionKeys,
    FetchPokemonListAction,
    FetchPokemonListSuccessAction,
} from "./actionTypes";

export const FETCH_POKEMON_LIST_ACTION_CREATOR = (offset = 0, limit = 151): FetchPokemonListAction => ({
    type: PokemonActionKeys.FETCH_POKEMON_LIST,
    payload: {
        offset,
        limit,
    },
});

export const FETCH_POKEMON_LIST_SUCCESS_ACTION_CREATOR = (pokemonList: PaginationResponse<Pokemon>): FetchPokemonListSuccessAction => ({
    type: PokemonActionKeys.FETCH_POKEMON_LIST_SUCCESS,
    payload: {
        pokemonList,
    },
});