import Pokemon from "./pokemon";
import StatValue from "./statValue";
import TypeValue from "./typeValue";

export default interface PokemonDetail extends Pokemon {
    stats: StatValue[];
    types: TypeValue[];
}