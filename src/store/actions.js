import * as api from '../api';


export function getLists() {
    return api.getLists()
        .then(lists => ({
            type: 'GET_LISTS',
            payload: {
                lists
            }
        }));
}

export function getTodos() {
    return api.getTodos()
        .then(todos => ({
            type: 'GET_TODOS',
            payload: {
                todos
            }
        }));
}

export function getListTodos(listId) {
    return api.getListTodos(listId)
        .then(todos => ({
            type: 'GET_LIST_TODOS',
            payload: {
                todos
            }
        }));
}

export function createTodo(data) {
    return api.createTodo(data)
        .then(todo => ({
            type: 'CREATE_TODO',
            payload: {
                todo
            }
        }));
}

export function updateTodo(todoId, data) {
    return api.updateTodo(todoId, data)
        .then(todo => ({
            type: 'UPDATE_TODO',
            payload: {
                todo
            }
        }));
}

export function deleteTodo(todoId) {
    return api.deleteTodo(todoId)
        .then(todoId => ({
            type: 'DELETE_TODO',
            payload: {
                todoId
            }
        }));
}