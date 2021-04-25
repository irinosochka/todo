import React, { useState, useEffect, useContext } from 'react'

import {
    Layout, TopAppBar
} from 'mdc-react'

import {
     LinearProgress
} from '@material-ui/core';

import { actions } from "../../store";
import DataContext from '../../context/data';

import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import TodoDetails from '../../components/TodoDetails';

import './index.scss'

export default function TodoListPage({ match }) {
    const { state, dispatch } = useContext(DataContext);
    const [selectedTodo, setSelectedTodo] = useState(null);

    useEffect(() => {
        if(match.params.listId) {
            actions.getListTodos(match.params.listId, dispatch);
        } else {
            actions.getTodos(dispatch);
        }
    }, [dispatch, match.params.listId])

    function handleSubmit(title) {
        actions.createTodo({
            title,
            listId: list.id
        });
    }

    function handleDelete(todoId) {
        actions.deleteTodo(todoId, dispatch);
    }

    function handleUpdate(todoId, data) {
        actions.updateTodo(todoId, data, dispatch);
    }

    function handleSelect(todo) {
        setSelectedTodo(todo, dispatch);
    }

    const list = state.lists.find(list => list.id === match.params.listId);

    if (!list || !state.todos) return <LinearProgress/>

    return (
        <Layout id="todo-list-page" className="page">
            <TopAppBar
                title={list.title}
            />

            <Layout>
                <Layout>
                    <TodoList
                        list={list}
                        todos={state.todos}
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
        </Layout>
    )
}