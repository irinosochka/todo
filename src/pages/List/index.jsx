import React, { useState, useEffect } from 'react';
import {
    SideSheet,
    TopAppBar,
    Icon, Typography,

} from 'mdc-react';

import {
    LinearProgress, Grid, IconButton
} from '@material-ui/core';

import useStore from "../../hooks/store";

import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import TodoDetails from '../../components/TodoDetails';

import './index.scss';

export default function ListPage({ match }) {
    const { state, actions } = useStore();
    const [selectedTodo, setSelectedTodo] = useState(null);

    function handleSubmit(title) {
        actions.createTodo({
            title,
            userId: state.user.uid,
            listId: list.id || ''
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

    const list = state.lists.find(list => list.id === match.params.listId) || { title: "Zadania"};
    const path = match.path;

    const getTodosByFilter = ({
        '/': todos => todos,
        '/important': todos => todos.filter(todo => todo.important),
        '/planned': todos => todos.filter(todo => todo.dueDate)
    });

    const getTodosByList = (listId, todos) => todos.filter(todo => todo.listId === listId);

    const todos = match.params.listId ? getTodosByList(match.params.listId, state.todos) : getTodosByFilter[path](state.todos);

    if (!list || !todos) return <LinearProgress />;

    return (
        <Grid id="list-page" className="page">
            <TopAppBar
                title={list.title}
            />

            <Grid row>
                <SideSheet
                    open={selectedTodo}
                    dismissible
                    appContentSelector=".mdc-side-sheet-app-content"
                >
                    <Grid container spacing={1}>
                        <Typography nomargin>Szczegówy zadania</Typography>

                        <IconButton onClick={() => setSelectedTodo(null)}>
                            <Icon>close</Icon>
                        </IconButton>
                    </Grid>

                    <Grid row >
                    {selectedTodo &&
                        <TodoDetails
                            todo={selectedTodo}
                        />
                    }
                    </Grid>
                </SideSheet>

                <Grid column className="mdc-side-sheet-app-content">
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
                </Grid>
            </Grid>
        </Grid>
    );
}