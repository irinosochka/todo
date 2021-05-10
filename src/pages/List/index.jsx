import React, { useState } from 'react';
import {
    SideSheet,
    Typography,
} from 'mdc-react';

import {
    LinearProgress, Grid, IconButton, Icon
} from '@material-ui/core';

import useStore from "../../hooks/store";

import FadeMenu from "../../components/PageHeader/fade";
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

    function handleSortChange(sort) {
        actions.updateList(list.id, {sort});
    }

    const sortFn = {
        title: (a,b) => a.title.localeCompare(b.title),
        date: (a,b) => new Date(a.seconds * 1000) - new Date(b.seconds * 1000),
        important: (a,b) => b.important- a.important,
        completed: (a,b) =>b.completed - a.completed
    }

    const list = state.lists.find(list => list.id === match.params.listId) || { title: "Zadania"};
    const path = match.path;

    const getTodosByFilter = ({
        '/': todos => todos,
        '/important': todos => todos.filter(todo => todo.important),
        '/planned': todos => todos.filter(todo => todo.dueDate),
        '/done': todos => todos.filter(todo => todo.completed),
        '/not_done': todos => todos.filter(todo => !(todo.completed)),
    });

    const getTodosByList = (listId, todos) => todos.filter(todo => todo.listId === listId);

    const todos = match.params.listId ?
        getTodosByList(match.params.listId, state.todos) :
        getTodosByFilter[path](state.todos);

    const sortedTodos = list.sort ? todos.slice().sort(sortFn[list.sort]) : todos;

    if (!list || !todos) return <LinearProgress />;

    return (
        <Grid id="list-page" className="page">
            <FadeMenu
                title={list.title}
                sortBy={list.sort}
                onSortChange={handleSortChange}
            />

            <Grid variant="row">
                <SideSheet
                    open={selectedTodo}
                    dismissible
                    appContentSelector=".mdc-side-sheet-app-content"
                >
                    <Grid container spacing={1}>
                        <Typography>Szczegówy zadania</Typography>

                        <IconButton onClick={() => setSelectedTodo(null)}>
                            <Icon>close</Icon>
                        </IconButton>
                    </Grid>

                    <Grid variant="row">
                    {selectedTodo &&
                        <TodoDetails
                            todo={selectedTodo}
                        />
                    }
                    </Grid>
                </SideSheet>

                <Grid variant="column" className="mdc-side-sheet-app-content">
                    <TodoList
                        list={list}
                        todos={sortedTodos}
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