import axios from "axios";
import { 
    apiPokemonEndpoint, 
    apiPokemonDetailEndpoint, 
} from "../settings/endpoints";

export const fetchPokemonList = async (offset: number, limit: number) => {
    const response = await axios.get(`${apiPokemonEndpoint}?offset=${offset}&limit=${limit}`);
    return response.data;
};

export const fetchPokemonDetail = async (name: string) => {
    const response = await axios.get(apiPokemonDetailEndpoint(name));
    return response.data;
}