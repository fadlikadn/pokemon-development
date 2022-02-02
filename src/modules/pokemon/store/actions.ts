import PaginationResponse from "../../../interfaces/paginationResponse";
import Pokemon from "../models/pokemon";
import PokemonDetail from "../models/pokemonDetail";
import {
    PokemonActionKeys,
    FetchPokemonListAction,
    FetchPokemonListSuccessAction,
    SetPokemonStorageAction,
    FetchPokemonDetailAction,
    FetchPokemonDetailSuccessAction,
    TestFetchAction,
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

export const SET_POKEMON_STORAGE_ACTION_CREATOR = (pokemons: PokemonDetail[]): SetPokemonStorageAction => ({
    type: PokemonActionKeys.SET_POKEMON_STORAGE,
    payload: {
        pokemons,
    },
});

export const FETCH_POKEMON_DETAIL_ACTION_CREATOR = (name: string): FetchPokemonDetailAction => ({
    type: PokemonActionKeys.FETCH_POKEMON_DETAIL,
    payload: {
        name,
    },
});

export const FETCH_POKEMON_DETAIL_SUCCESS_ACTION_CREATOR = (pokemon: PokemonDetail): FetchPokemonDetailSuccessAction => ({
    type: PokemonActionKeys.FETCH_POKEMON_DETAIL_SUCCESS,
    payload: {
        pokemon,
    },
});

export const TEST_FETCH_ACTION_CREATOR = (): TestFetchAction => ({
    type: PokemonActionKeys.TEST_FETCH,
});
