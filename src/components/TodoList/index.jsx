import React from 'react';
import {
    List
} from 'mdc-react';

import TodoListItem from '../TodoListItem';

import './index.scss';


export default function TodoList({ list, todos, onDelete}) {

    return (
        <div className="todo-list">
            <mdc-typography
                className="todo-list__title"
                variant="headline4">{list.title}
            </mdc-typography>

            <List className="todo-list__items">
                {todos.map(todo =>
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                    />
                )}
            </List>
        </div>
    );
}