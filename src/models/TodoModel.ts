import { type } from "os";


export interface TodoModel {
    id: number;
    text: string;
    completed: boolean;
}

export type TodosModel = Array<TodoModel>;