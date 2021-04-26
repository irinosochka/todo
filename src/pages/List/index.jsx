import React, { useState, useEffect } from 'react';
import {
    Layout,
    SideSheet,
    TopAppBar,
    Icon,  Typography,
    IconButton,
} from 'mdc-react';

import {
    LinearProgress,
} from '@material-ui/core';

import useStore from "../../hooks/store";

import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import TodoDetails from '../../components/TodoDetails';

import './index.scss';

export default function ListPage({ match }) {
    const { state, actions } = useStore();
    const [selectedTodo, setSelectedTodo] = useState(null);

    useEffect(() => {
        setSelectedTodo(null);
        
        if (match.params.listId) {
            actions.getListTodos(match.params.listId);
        } else {
            actions.getTodos();
        }
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

    const list = state.lists.find(list => list.id === match.params.listId);

    if (!list || !state.todos) return <LinearProgress />;

    return (
        <Layout id="list-page" className="page">
            <TopAppBar
                title={list.title}
            />

            <Layout row>
                <SideSheet
                    open={selectedTodo}
                    dismissible
                    appContentSelector=".mdc-side-sheet-app-content"
                >
                    <Layout row justifyContent="between" >
                        <Typography nomargin>Szczegówy zadania</Typography>

                        <IconButton onClick={() => setSelectedTodo(null)}>
                            <Icon>close</Icon>
                        </IconButton>
                    </Layout>

                    {selectedTodo &&
                        <TodoDetails
                            todo={selectedTodo}
                        />
                    }
                </SideSheet>

                <Layout column className="mdc-side-sheet-app-content">
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
            </Layout>
        </Layout>
    );
}