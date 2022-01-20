import { PokemonModel } from "./PokemonModel";


export interface PokemonResponseModel {
    count: number;
    previous: string | null;
    next: string | null;
    results: Array<PokemonModel>
}