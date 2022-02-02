import { FC, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import getPokemonModule from "../store/getPokemonModule";
import {
    FETCH_POKEMON_DETAIL_ACTION_CREATOR,
    SET_POKEMON_STORAGE_ACTION_CREATOR,
} from "../store/actions";
import { StateDefinition } from "../store/reducer";
import PokemonDetail from "../models/pokemonDetail";
import { getSessionStorage } from "../../../helpers/useSessionStorage";
import { pokemonStorageKey } from "../../../settings/config";

const PokemonDetail: FC = (): JSX.Element | null => {
    const location = useLocation();
    const locationPathName = location.pathname.split("/");
    const pokemonName = locationPathName[locationPathName.length - 1];
    const dispatch = useDispatch();
    const state = useSelector((state: StateDefinition) => state);
    // const [pokemon, setPokemon] = useState<PokemonDetail|null>(null);

    useEffect(() => {
        if(state.pokemon && state.pokemon.pokemons) {
            const pokemons = state.pokemon.pokemons;
            const pokemonTest = pokemons.find((pokemon) => pokemon.name === pokemonName);
            console.log(pokemonTest);
        }
    }, [state.pokemon]);

    const getPokemonDetail = (name: string): void => {
        const storedPokemons = getSessionStorage(pokemonStorageKey);
        if (storedPokemons) {
            dispatch(SET_POKEMON_STORAGE_ACTION_CREATOR(JSON.parse(storedPokemons) as PokemonDetail[]));
        }
        dispatch(FETCH_POKEMON_DETAIL_ACTION_CREATOR(name));
    };

    useEffect(() => {
        getPokemonDetail(pokemonName);
    }, []);

    const history = useHistory();
    const backHandler = () => {
        history.goBack();
    };

    return (
        <DynamicModuleLoader modules={[getPokemonModule()]}>
            <div>Pokemon Detail</div>
            <button onClick={() => backHandler()}>Back</button>
        </DynamicModuleLoader>
    );
};

export default PokemonDetail;