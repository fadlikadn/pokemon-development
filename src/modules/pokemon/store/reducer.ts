import PaginationResponse from "../../../interfaces/paginationResponse";
import Pokemon from "../models/pokemon";
import PokemonDetail from "../models/pokemonDetail";
import { moduleId } from "../settings/config";
import { ActionTypes, PokemonActionKeys } from "./actionTypes";
import fetchPokemonList from "./reducer/fetchPokemonList";
import fetchPokemonDetail from "./reducer/fetchPokemonDetail";
import { StateDefinition as CoreState } from "../../../store/reducer";

export const InitialState = {
    pokemonList: {
        count: 0,
        next: "",
        previous: "",
        results: [],
    } as PaginationResponse<Pokemon>,
    pokemons: [] as PokemonDetail[],
    morePokemonAvailable: true,
};

const reducer = (state = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case PokemonActionKeys.FETCH_POKEMON_LIST_SUCCESS:
            return fetchPokemonList(state, action);

        case PokemonActionKeys.FETCH_POKEMON_DETAIL_SUCCESS:
            return fetchPokemonDetail(state, action);

        default:
            return state;
    }
};

export type StateDefinition = { [moduleId]: ReturnType<typeof reducer> } & CoreState;

export default reducer;
