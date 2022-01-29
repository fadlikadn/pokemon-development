import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Pokemon from "../models/pokemon";

interface PokemonViewProps {
    pokemon: Pokemon,
}
const PokemonView: FC<PokemonViewProps> = ({
    pokemon
}): JSX.Element => {
    return (
        <Card>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={pokemon?.image}
                alt={pokemon.name}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {pokemon.name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PokemonView;
