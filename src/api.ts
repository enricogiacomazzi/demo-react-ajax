import { PokemonResponseModel } from "./models/PokemonResponseModel"
import axios from 'axios';
import { TodoModel } from "./models/TodoModel";

const baseUrl = 'http://localhost:3005';
const baseTodoUrl = baseUrl + '/todos';
const baseUserUrl = baseUrl + '/users';

export const GetPokemon = async (url: string): Promise<PokemonResponseModel> => {
    return (await axios.get<PokemonResponseModel>(url)).data;
}

export const GetTodos = async (): Promise<Array<TodoModel>> => {
    return (await axios.get<Array<TodoModel>>(baseTodoUrl)).data;
}

export const GetTodo = async (id: number): Promise<TodoModel> => {
    return (await axios.get<TodoModel>(`${baseTodoUrl}/${id}`)).data;
}

// export const filterProps = (obj: any, props: Array<string) => {
//     Object.keys(obj).
// }

export const CreateTodo = async (todo: Omit<TodoModel, 'id'>): Promise<TodoModel> => {
    return (await axios.post<TodoModel>(baseTodoUrl, todo)).data;
}

export const EditTodo = async (todo: TodoModel): Promise<TodoModel> => {
    return (await axios.put<TodoModel>(`${baseTodoUrl}/${todo.id}`, todo)).data;
}

export const EditTodo2 = async (todo: Partial<TodoModel> & Pick<TodoModel, 'id'>): Promise<TodoModel> => {
    return (await axios.patch<TodoModel>(`${baseTodoUrl}/${todo.id}`, todo)).data;
}

export const DeleteTodo = async (todo: Pick<TodoModel, 'id'>): Promise<void> => {
    await axios.delete(`${baseTodoUrl}/${todo.id}`);
}

