import React from 'react';
import {
    Checkbox,
     ListItemGraphic, ListItemText, ListItemMeta
} from 'mdc-react';

import {
     ListItem, Icon, IconButton
} from '@material-ui/core';


import './index.scss';


export default function TodoListItem({todo, onStatusChange, onDelete}) {


    return (
        <ListItem className="todo-list-item">
            <ListItemGraphic>
                <Checkbox
                    checked={todo.completed}
                    onChange={onStatusChange}
                />
            </ListItemGraphic>

            <ListItemText>
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