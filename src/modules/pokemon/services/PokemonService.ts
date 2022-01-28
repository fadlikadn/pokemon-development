import axios from "axios";
import { apiPokemonEndpoint } from "../settings/endpoints";

export const fetchPokemonList = async (offset: number, limit: number) => {
    const response = await axios.get(`${apiPokemonEndpoint}?offset=${offset}&limit=${limit}`);
    return response.data;
};
