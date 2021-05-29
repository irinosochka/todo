import React from 'react';
import {
    Checkbox,
    Icon,
    IconButton,
    ListItem, ListItemText, ListItemIcon
} from '@material-ui/core';

import './index.scss';

export default function TodoListItem({
    todo,
    onUpdate,
    onDelete,
    onSelect
}) {
    function handleChange() {
        onUpdate(todo.id, { completed: !todo.completed });
    }

    return (
        <ListItem className="todo-list-item">
            <ListItemIcon>
                <Checkbox color="primary"
                    checked={todo.completed}
                    onChange={handleChange}
                />
            </ListItemIcon>

            <ListItemText onClick={() => onSelect(todo)}>{todo.title}</ListItemText>

            <ListItemIcon>
                <IconButton onClick={() => onUpdate(todo.id, {important: !todo.important})}>
                    <Icon>{todo.important ? 'star' : 'star_bordered' }</Icon>
                </IconButton>


                <IconButton onClick={() => onDelete(todo.id)}>
                    <Icon>delete</Icon>
                </IconButton>
            </ListItemIcon>
        </ListItem>
    );
}
