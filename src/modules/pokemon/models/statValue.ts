import Stat from "./stat";

export default interface StatValue {
    base_state: number;
    effort: number;
    stat: Stat;
}