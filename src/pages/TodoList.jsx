import React, { useEffect } from 'react'

import {
     LinearProgress
} from '@material-ui/core';

import useApi from "../hooks/api";

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

import './index.scss'

export default function TodoListPage({ match }) {
    const { data: { lists, todos }, actions } = useApi();

    useEffect(() => {
        actions.getListTodos(match.params.listId);
    }, [actions, match.params.listId]);

    function handleSubmit(title) {
        actions.createTodo({
            title,
            listId: list.id
        });
    }

    function handleDelete(todoId) {
        actions.deleteTodo(todoId);
    }

    function handleUpdate(todoId, data) {
        actions.updateTodo(todoId, data);
    }

    const list = lists.find(list => list.id === match.params.listId);

    if (!list || !todos) return <LinearProgress/>

    return (
        <div id="todo-list-page" className="page">
            <TodoList
                list={list}
                todos={todos}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
            />

            <TodoForm
                onSubmit={handleSubmit}
            />
        </div>
    )
}