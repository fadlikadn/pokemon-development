import Pokemon from "../models/pokemon";
import PaginationResponse from "../../../interfaces/paginationResponse";
import PokemonDetail from "../models/pokemonDetail";

export enum PokemonActionKeys {
    FETCH_POKEMON_LIST = "FETCH_POKEMON_LIST",
    FETCH_POKEMON_LIST_SUCCESS = "FETCH_POKEMON_LIST_SUCCESS",
    FETCH_POKEMON_DETAIL = "FETCH_POKEMON_DETAIL",
    FETCH_POKEMON_DETAIL_SUCCESS = "FETCH_POKEMON_DETAIL_SUCCESS",
    TEST_FETCH = "TEST_FETCH",
}

export interface FetchPokemonListAction {
    type: typeof PokemonActionKeys.FETCH_POKEMON_LIST;
    payload?: {
        offset: number;
        limit: number;
    }
}

export interface FetchPokemonListSuccessAction {
    type: typeof PokemonActionKeys.FETCH_POKEMON_LIST_SUCCESS;
    payload: {
        pokemonList: PaginationResponse<Pokemon>;
    }
}

export interface FetchPokemonDetailAction {
    type: typeof PokemonActionKeys.FETCH_POKEMON_DETAIL;
    payload: {
        name: string;
    }
}

export interface FetchPokemonDetailSuccessAction {
    type: typeof PokemonActionKeys.FETCH_POKEMON_DETAIL_SUCCESS;
    payload: {
        pokemon: PokemonDetail;
    }
}

export interface TestFetchAction {
    type: typeof PokemonActionKeys.TEST_FETCH;
}

export type ActionTypes =
    FetchPokemonListAction |
    FetchPokemonListSuccessAction |
    FetchPokemonDetailAction |
    FetchPokemonDetailSuccessAction |
    TestFetchAction;
