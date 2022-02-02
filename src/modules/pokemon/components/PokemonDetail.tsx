import { FC, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from "@mui/material/Button";
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
    const [pokemon, setPokemon] = useState<PokemonDetail|null>(null);
    const [forceUpdate, setForceUpdate] = useState(false);

    useEffect(() => {
        if(state.pokemon && state.pokemon.pokemons) {
            const pokemons = state.pokemon.pokemons;
            const pokemonFind = pokemons.find((pokemon) => pokemon.name === pokemonName);
            if (pokemonFind) {
                setPokemon(pokemonFind);
            }
        }
    }, [state.pokemon]);

    useEffect(() => {
        if (pokemon?.stats) {
            setForceUpdate(true);
        }
    }, [pokemon?.stats]);

    useEffect(() => {
        console.log("load ulang data pokemon...")
    }, [forceUpdate]);

    const getPokemonDetail = (name: string): void => {
        const storedPokemons = getSessionStorage(pokemonStorageKey);
        if (storedPokemons) {
            dispatch(SET_POKEMON_STORAGE_ACTION_CREATOR(JSON.parse(storedPokemons) as PokemonDetail[]));
        }
        // dispatch(FETCH_POKEMON_DETAIL_ACTION_CREATOR(name));
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
            <Grid sx={{
                width: '500px',
                margin: '0 auto',
            }}>
                <Box sx={{ padding: '50px' }}>
                    <Typography variant="h3" sx={{ margin: '0 auto' }}>Pokemon Detail</Typography>
                    { pokemon !== null && (
                        <Card sx={{
                            '&:hover': {
                                backgroundColor: '#243440',
                                color: 'white',
                            }
                        }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 200, margin: '0 auto', }}
                                image={pokemon?.image}
                                alt={pokemon?.name}
                            />
                            <CardContent sx={{ '> *': { margin: '10px 10px' } }}>
                                <Typography variant="h5" component="div" sx={{ margin: '0 auto', textAlign: 'center', textTransform: 'capitalize', fontWeight: 'bold', }}>
                                    {pokemon?.name}
                                </Typography>

                                { pokemon.types && (
                                    <Paper elevation={2} sx={{
                                        padding: '12px',
                                        margin: '10px 0px',
                                    }}>
                                        <Typography>Types</Typography>
                                        { pokemon.types.length > 0 && pokemon.types.map((type) => (
                                            <Chip key={type.slot} color="primary" label={type.type.name} ></Chip>
                                        ))}
                                    </Paper>
                                )}

                                { pokemon.stats && (
                                    <Paper elevation={2}  sx={{
                                        padding: '12px',
                                        margin: '10px 0px',
                                    }}>
                                        <Typography>Stats</Typography>
                                        <List>
                                            {pokemon.stats.length > 0 && pokemon.stats.map((stat, index) => (
                                                <ListItem key={index}>
                                                    <ListItemText
                                                        primary={`${stat.stat.name}: ${stat.base_stat}`}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Paper>
                                )}
                            </CardContent>
                        </Card>
                    )}

                    <Button variant="contained" sx={{ margin: '0 auto' }} onClick={() => backHandler()}>Back</Button>
                </Box>
            </Grid>
            
        </DynamicModuleLoader>
    );
};

export default PokemonDetail;