import { InitialState } from "../reducer";
import { PokemonActionKeys, ActionTypes } from "../actionTypes";
import PokemonDetail from "../../models/pokemonDetail";
import { pokemonStorageKey } from "../../../../settings/config";
import { setSessionStorage } from "../../../../helpers/useSessionStorage";

export default (state = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case PokemonActionKeys.FETCH_POKEMON_LIST_SUCCESS: {
            const payload = action.payload.pokemonList;
            const newPokemons: PokemonDetail[] = payload.results.map((pokemon) => {
                const urlSplice = pokemon.url?.split("/");
                const id = urlSplice ? urlSplice[urlSplice.length - 2] : 0;
                return {
                    id,
                    name: pokemon.name,
                    url: pokemon.url,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                } as PokemonDetail;
            });

            const pokemons = [
                ...state.pokemons,
                ...newPokemons,
            ];
            setSessionStorage(pokemonStorageKey, JSON.stringify(pokemons));

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
