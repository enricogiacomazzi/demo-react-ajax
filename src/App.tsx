import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PokemonResponseModel } from './models/PokemonResponseModel';
import axios from 'axios';
import { CreateTodo, DeleteTodo, EditTodo, EditTodo2, GetPokemon, GetTodos } from './api';
import { useQuery } from 'react-query';
import { TodoModel, TodosModel } from './models/TodoModel';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<TodoModel>>([]);

  useEffect(() => {
    GetTodos().then(res => setTodos(res));
    // (async () => {
    //   setTodos(await GetTodos())
    // })()
  }, []);


  const addTodoHandler = async (todo: Omit<TodoModel, 'id'>) => {
    const newTodo = await CreateTodo(todo);
    setTodos([...todos, newTodo]);
  }

  const toggleCompletedhandler = async (todo: TodoModel) => {
    const res = await EditTodo2({id: todo.id, completed: !todo.completed});
    setTodos(todos.map(t => t.id === res.id ? res : t));
  }

  const DeleteTodoHandler = async (todo: TodoModel) => {
    try {
      await DeleteTodo(todo);
      setTodos(todos.filter(t => t.id !== todo.id));
    } catch (e) {
        alert('todo non trovato');
    }
    
  }

  return (
    <div style={{margin: '50px'}}>
      <TodoList 
        todos={todos}
        toggleCompleted={toggleCompletedhandler}
        deleteTodo={DeleteTodoHandler}/>
      <AddTodo addTodo={addTodoHandler}/>
    </div>
    
  )
}

export default App;
