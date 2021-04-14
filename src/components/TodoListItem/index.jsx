import React from 'react';
import {
    Checkbox,
     ListItemGraphic, ListItemText, ListItemMeta
} from 'mdc-react';

import {
     ListItem, Icon, IconButton
} from '@material-ui/core';


import './index.scss';


export default function TodoListItem({todo, onDelete, onUpdate, onSelect }) {

    function handleChange(completed) {
        onUpdate(todo.id, { completed });
    }


    return (
        <ListItem className="todo-list-item">
            <ListItemGraphic>
                <Checkbox
                    checked={todo.completed}
                    onChange={handleChange}
                />
            </ListItemGraphic>

            <ListItemText onClick={() => onSelect(todo)}>
                {todo.title}
            </ListItemText>

            <ListItemMeta>
                <IconButton>
                    <Icon>edit</Icon>
                </IconButton>
                <IconButton onClick={() => onDelete(todo.id) }>
                    <Icon>delete</Icon>
                </IconButton>
            </ListItemMeta>
        </ListItem>
    )
}