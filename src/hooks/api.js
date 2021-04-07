import * as api from '../api'
import {useEffect, useState} from 'react';

export default function useApi() {
    const [lists, setLists] = useState([]);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        api.getLists().then(setLists);
    }, []);

    function getLists() {
       return api.getLists()
           .then(setLists);
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



    return {
        data: {
            lists,
            todos
        },
        actions: {
            getLists,
            getListTodos,
            createTodo,
            updateTodo,
            deleteTodo
        }
    };
}