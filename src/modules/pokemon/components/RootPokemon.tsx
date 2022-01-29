import { Component, ErrorInfo } from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import getPokemonModule from "../store/getPokemonModule";
import PokemonList from "./PokemonList";

export default class RootPokemon extends Component {
    componentDidCatch(error: Error | null, info: ErrorInfo) {
        // eslint-disable-next-line no-console
        console.log(error, info);
    }

    render() {
        // eslint-disable-next-line no-console
        console.log("Root Pokemon");
        return (
            <DynamicModuleLoader modules={[getPokemonModule()]}>
                <PokemonList />
            </DynamicModuleLoader>
        );
    }
}
