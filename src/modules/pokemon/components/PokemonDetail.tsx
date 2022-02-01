import { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_POKEMON_DETAIL_ACTION_CREATOR, TEST_FETCH_ACTION_CREATOR } from "../store/actions";
import { StateDefinition } from "../store/reducer";

const PokemonDetail: FC = (): JSX.Element | null => {
    const dispatch = useDispatch();
    // const { pokemons } = useSelector((state: StateDefinition) => state.pokemon);

    const getPokemonDetail = (name: string): void => {
        console.log("get pokemon detail");
        dispatch(TEST_FETCH_ACTION_CREATOR());
        // dispatch(FETCH_POKEMON_DETAIL_ACTION_CREATOR(name));
    };

    useEffect(() => {
        // getPokemonDetail("bulbasaur");
    }, []);

    const history = useHistory();
    const backHandler = () => {
        history.goBack();
        console.log("back");
    };

    return (
        <>
            <div>Pokemon Detail</div>
            <button onClick={() => backHandler()}>Back</button>
        </>
    );
};

export default PokemonDetail;