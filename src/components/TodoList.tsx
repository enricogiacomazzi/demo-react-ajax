import React from "react";
import { TodoModel } from "../models/TodoModel";

interface TodoListProps {
    todos: Array<TodoModel>,
    toggleCompleted: (todo: TodoModel) => void
    deleteTodo: (todo: TodoModel) => void
}

const TodoList:React.FC<TodoListProps> = ({todos, toggleCompleted, deleteTodo}) => (
    <ul>
        {todos.map(t => <li key={t.id}>
          <i onClick={() => deleteTodo(t)} className="fa fa-2x fa-trash"/>
          <i 
            onClick={() => toggleCompleted(t)} 
            className="fa fa-2x fa-check"/>
          <span style={{
              marginLeft: '10px',
              textDecoration: t.completed ? 'line-through' : 'inherit' }
            }>{t.text}</span>
          </li>)}
      </ul>
);

export default TodoList;