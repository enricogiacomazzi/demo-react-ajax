import React, { useState } from "react";
import { TodoModel } from "../models/TodoModel";

type model = Omit<TodoModel, 'id'>;

interface AddTodoProps {
    addTodo: (todo: model) => void
}



const AddTodo: React.FC<AddTodoProps> = ({addTodo}) => {

    const initialState = {
        text: '',
        completed: false
    };

    const [frm, setFrm] = useState<model>(initialState);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.currentTarget.name) {
            case 'text':
                setFrm({...frm, text: e.currentTarget.value});
                break;
            case 'completed':
                setFrm({...frm, completed: e.currentTarget.checked});
                break;
        }
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTodo(frm);
        setFrm(initialState);
    } 

    return (
        <form onSubmit={onSubmit}>
            <input value={frm.text} onChange={onChangeHandler} type="text" name="text"/>
            <input checked={frm.completed} onChange={onChangeHandler} type="checkbox" name="completed"/>
            <button type="submit">Aggiungi</button>
        </form>
    )
}

export default AddTodo;