import { InitialState } from "../reducer";
import { PokemonActionKeys, ActionTypes } from "../actionTypes";

export default (state = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case PokemonActionKeys.SET_POKEMON_STORAGE: {
            return {
                ...state,
                pokemons: action.payload.pokemons,
            }
        }

        default:
            return state;
    }
}