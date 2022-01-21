import { PokemonResponseModel } from "./models/PokemonResponseModel"
import axios from 'axios';

export const GetPokemon = async (url: string): Promise<PokemonResponseModel>  => {
    return (await axios.get<PokemonResponseModel>(url)).data;
}