import React from 'react'
import {
    ListItem, ListItemGraphic, ListItemText,
    Checkbox,
} from 'mdc-react';


export default function TodoList({todo, onStatusChange: onCompleteChange}) {
    return (
        <ListItem>
            <ListItemGraphic>
                <Checkbox
                    checked={todo.completed}
                    onChange={onCompleteChange}
                />
            </ListItemGraphic>

            <ListItemText>
                {todo.title}
            </ListItemText>
        </ListItem>
    )
}