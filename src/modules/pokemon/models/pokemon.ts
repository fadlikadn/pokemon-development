import Entity from "../../../interfaces/entity";

export default interface Pokemon extends Entity {
    name: string;
    url?: string;
}
