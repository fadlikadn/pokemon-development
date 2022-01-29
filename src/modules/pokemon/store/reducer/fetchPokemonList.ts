import { InitialState } from "../reducer";
import { PokemonActionKeys, ActionTypes } from "../actionTypes";
import Pokemon from "../../models/pokemon";

export default (state = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case PokemonActionKeys.FETCH_POKEMON_LIST_SUCCESS: {
            const payload = action.payload.pokemonList;
            const newPokemons: Pokemon[] = payload.results.map((pokemon) => {
                const urlSplice = pokemon.url?.split("/");
                const id = urlSplice ? urlSplice[urlSplice.length - 2] : 0;
                return {
                    id,
                    name: pokemon.name,
                    url: pokemon.url,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                } as Pokemon;
            });

            return {
                ...state,
                pokemons: [
                    ...state.pokemons,
                    ...newPokemons,
                ],
                morePokemonAvailable: payload.next !== null,
            };
        }

        default:
            return state;
    }
};
