import React, {useState, useContext, useEffect} from 'react'

import {
     LinearProgress
} from '@material-ui/core';


import DBContext from '../context/db';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

import './index.scss'

export default function TodoListPage({ match }) {
    const db = useContext(DBContext);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos();

        db.getListTodos(match.params.listId)
            .then(setTodos);
    }, [db, match.params.listId]);

    const list = db.lists.find(list => list.id === match.params.listId);

    function handleSubmit(title) {
        db.createTodo({
            title,
            listId: list.id
        }).then(todo => {
            setTodos([...todos, todo])
        });
    }

    function handleDelete(todoId) {
        db.deleteTodo(todoId).then(todoId => {
            setTodos([...todos.filter(t => t.id !== todoId)])
        });
    }


    if (!list || !todos) return <LinearProgress/>

    return (
        <div id="todo-list-page" className="page">

            <TodoList
                list={list}
                todos={todos}
                onDelete={handleDelete}
            />

            <TodoForm
                onSubmit={handleSubmit}
            />

        </div>
    )
}