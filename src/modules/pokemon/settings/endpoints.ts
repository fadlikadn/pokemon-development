import { apiHost } from "../../../settings/config";

export const apiPokemonEndpoint = `${apiHost}pokemon`;
export const apiPokemonDetailEndpoint = (name: string) => (`${apiPokemonEndpoint}/${name}`);
