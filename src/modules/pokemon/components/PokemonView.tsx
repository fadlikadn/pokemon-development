import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import Pokemon from "../models/pokemon";

interface PokemonViewProps {
    pokemon: Pokemon,
    onClickHandler: (name: string) => void;
}
const PokemonView: FC<PokemonViewProps> = ({
    pokemon,
    onClickHandler,
}): JSX.Element => {
    const history = useHistory();
    const clickHandler = () => {
        // history.push(`pokemon/${pokemon.name}`);
        onClickHandler(pokemon.name);
    }

    return (
        <Card onClick={() => clickHandler()} sx={{ 
            height: '270px',
            '&:hover': {
                backgroundColor: '#243440',
                color: 'white',
                cursor: 'pointer',
            }
        }}>
            <CardMedia
                component="img"
                sx={{ width: 200, margin: '0 auto', }}
                image={pokemon?.image}
                alt={pokemon.name}
            />
            <CardContent>
                <Typography variant="h5" component="div" sx={{ margin: '0 auto', textAlign: 'center', textTransform: 'capitalize', fontWeight: 'bold', }}>
                    {pokemon.name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PokemonView;
