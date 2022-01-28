import { InitialState } from "../reducer";
import { PokemonActionKeys, ActionTypes } from "../actionTypes";

export default (state = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case PokemonActionKeys.FETCH_POKEMON_LIST_SUCCESS: {
            return {
                ...state,
                pokemonList: action.payload.pokemonList,
            };
        }

        default:
            return state;
    }
};
