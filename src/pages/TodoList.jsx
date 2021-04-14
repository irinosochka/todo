import React, { useState, useEffect } from 'react'

import {
    Layout
} from 'mdc-react'

import {
     LinearProgress
} from '@material-ui/core';

import useApi from "../hooks/api";

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import TodoDetails from "../components/TodoDetails";

import './index.scss'

export default function TodoListPage({ match }) {
    const { data: { lists, todos }, actions } = useApi();
    const [selectedTodo, setSelectedTodo] = useState(null);

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

    function handleSelect(todo) {
        setSelectedTodo(todo);
    }

    const list = lists.find(list => list.id === match.params.listId);

    if (!list || !todos) return <LinearProgress/>

    return (
        <Layout id="todo-list-page" className="page" row>
            <Layout>
                <TodoList
                    list={list}
                    todos={todos}
                    onSelect={handleSelect}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                />

                <TodoForm
                    onSubmit={handleSubmit}
                />
            </Layout>

            {selectedTodo &&
                <TodoDetails
                    todo={selectedTodo}
                    onClose={() => setSelectedTodo(null)}
                />
            }

        </Layout>
    )
}