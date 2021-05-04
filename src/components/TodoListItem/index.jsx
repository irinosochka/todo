import React from 'react';
import {
    ListItemGraphic, ListItemMeta
} from 'mdc-react';

import {
    Checkbox,
    Icon,
    IconButton,
    ListItem, ListItemText,
} from '@material-ui/core';

import './index.scss';

export default function TodoListItem({
    todo,
    onUpdate,
    onDelete,
    onSelect
}) {
    function handleChange(completed) {
        onUpdate(todo.id, { completed: !todo.completed });
    }

    return (
        <ListItem className="todo-list-item">
            <ListItemGraphic>
                <Checkbox color="primary"
                    checked={todo.completed}
                    onChange={handleChange}
                />
            </ListItemGraphic>

            <ListItemText onClick={() => onSelect(todo)}>{todo.title}</ListItemText>

            <ListItemMeta>
                <IconButton onClick={() => onUpdate(todo.id, {important: !todo.important})}>
                    <Icon>{todo.important ? 'star' : 'star_bordered' }</Icon>
                </IconButton>


                <IconButton onClick={() => onDelete(todo.id)}>
                    <Icon>delete</Icon>
                </IconButton>
            </ListItemMeta>
        </ListItem>
    );
}