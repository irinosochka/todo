import * as api from '../api'
import { useState, useMemo } from 'react';


export default function useApi() {

    function getLists() {
       return api.getLists()
           .then(setLists);
    }

    function getTodos() {
        return api.getTodos()
            .then(setTodos);
    }

    function getListTodos(listId) {
        return api.getListTodos(listId)
            .then(setTodos);
    }

    function createTodo(data) {
        return api.createTodo(data)
            .then(todo => {
                setTodos([...todos, todo])
            });
    }

    function updateTodo(todoId, data) {
        return api.updateTodo(todoId, data)
            .then(data => {
                setTodos([...todos.map(t => t.id !== todoId ? ({ ...t, ...data, }) : t)]);
            });
    }

    function deleteTodo(todoId) {
        return api.deleteTodo(todoId)
            .then(todoId => {
                setTodos([...todos.filter(t => t.id !== todoId)])
            });
    }

    const actions = useMemo(() => ({
        getLists,
        getTodos,
        getListTodos,
        createTodo,
        updateTodo,
        deleteTodo
    }), []);

    return {
        data: {
            lists,
            todos
        },

        actions
    };
}