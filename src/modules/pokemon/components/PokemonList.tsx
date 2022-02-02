import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { isEmpty } from "lodash";
import { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router-dom";
import { 
    FETCH_POKEMON_LIST_ACTION_CREATOR,
    TEST_FETCH_ACTION_CREATOR,
    SET_POKEMON_STORAGE_ACTION_CREATOR,
 } from "../store/actions";
import { StateDefinition } from "../store/reducer";
import PokemonView from "./PokemonView";
import { getSessionStorage } from "../../../helpers/useSessionStorage";
import { pokemonStorageKey } from "../../../settings/config";
import PokemonDetail from "../models/pokemonDetail";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const PokemonList: FC = (): JSX.Element | null => {
    const dispatch = useDispatch();
    const history = useHistory();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoadingNext, setIsLoadingNext] = useState(false);

    const { pokemons, morePokemonAvailable } = useSelector((state: StateDefinition) => state.pokemon);

    const getPokemons = (offset: number, limit: number): void => {
        // eslint-disable-next-line no-console
        console.log("dispath fetch pokemons");
        dispatch(FETCH_POKEMON_LIST_ACTION_CREATOR(offset, limit));
        dispatch(TEST_FETCH_ACTION_CREATOR());
    };

    const getPokemonDetail = (name: string): void => {
        console.log("get pokemon detail");
        // dispatch(FETCH_POKEMON_DETAIL_ACTION_CREATOR(name));
        history.push(`pokemon/${name}`);
    };

    const onLoadNext = () => {
        // eslint-disable-next-line no-console
        console.log(`onLoadingNext ${pokemons.length}`);
        if (!morePokemonAvailable) { return; }
        setIsLoadingNext(true);
        dispatch(FETCH_POKEMON_LIST_ACTION_CREATOR(pokemons.length, 50));
    };

    useEffect(() => {
        // check session Storage
        const storedPokemons = getSessionStorage(pokemonStorageKey);
        if (storedPokemons) {
            console.log("Pokemon sudah ada");
            dispatch(SET_POKEMON_STORAGE_ACTION_CREATOR(JSON.parse(storedPokemons) as PokemonDetail[]));
        } else {
            // get Pokemon List
            // eslint-disable-next-line no-console
            console.log("fetching pokemon list");
            if (pokemons.length === 0) {
                getPokemons(0, 50);
            }
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            const { scrollHeight, clientHeight } = containerRef.current;
            containerRef.current.scrollTop = scrollHeight - clientHeight;
        }
    }, [containerRef]);

    useEffect(() => {
        if (isLoadingNext) {
            setIsLoadingNext(false);
        }
    }, [pokemons]);

    // eslint-disable-next-line no-console
    console.log("Pokemon List");
    return (
        <>
            <div>
                {/* Pokemon List
                <button onClick={() => getPokemons(0, 50)}>test Fetch</button> */}
                <InfiniteScroll
                    dataLength={pokemons.length}
                    next={onLoadNext}
                    hasMore={morePokemonAvailable}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p>
                            You have seen it all!
                        </p>
                    }
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {isEmpty(pokemons) && (
                                <Item>kosong</Item>
                            )}
                            {!isEmpty(pokemons) && pokemons.map((pokemon) => (
                                <Grid item xs={6} key={pokemon.id}>
                                    <PokemonView 
                                        pokemon={pokemon}
                                        onClickHandler={getPokemonDetail}
                                    />
                                    {/* <Item>
                                        {pokemon.name}
                                    </Item> */}
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </InfiniteScroll>
            </div>
        </>
    );
};

export default PokemonList;
