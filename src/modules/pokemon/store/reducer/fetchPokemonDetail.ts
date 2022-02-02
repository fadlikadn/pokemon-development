import { InitialState } from "../reducer";
import { PokemonActionKeys, ActionTypes } from "../actionTypes";
import { setSessionStorage } from "../../../../helpers/useSessionStorage";
import { pokemonStorageKey } from "../../../../settings/config";

export default (state = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case PokemonActionKeys.FETCH_POKEMON_DETAIL_SUCCESS: {
            console.log("reducer fetch pokemon detail success");
            const payload = action.payload.pokemon;
            const selectedPokemon = state.pokemons.find((pokemon) => pokemon.id == payload.id);
            if (selectedPokemon) {
                selectedPokemon.stats = payload.stats;
                selectedPokemon.types = payload.types;
            }

            setSessionStorage(pokemonStorageKey, JSON.stringify(state.pokemons));

            return state;
        }

        default:
            return state;
    }
};