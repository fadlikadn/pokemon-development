import PaginationResponse from "../../../interfaces/paginationResponse";
import Pokemon from "../models/pokemon";
import { moduleId } from "../settings/config";
import { ActionTypes, PokemonActionKeys } from "./actionTypes";
import fetchPokemonList from "./reducer/fetchPokemonList";
// TODO: merge with core reducer later
import { StateDefinition as CoreState } from "../../../store/reducer";

export const InitialState = {
    pokemonList: {
        count: 0,
        next: "",
        previous: "",
        result: [],
    } as PaginationResponse<Pokemon>,
};

const reducer = (state = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case PokemonActionKeys.FETCH_POKEMON_LIST_SUCCESS:
            return fetchPokemonList(state, action);

        default:
            return state;
    }
};

export type StateDefinition = { [moduleId]: ReturnType<typeof reducer> } & CoreState;

export default reducer;
