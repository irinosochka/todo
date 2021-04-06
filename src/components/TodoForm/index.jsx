import React, { useState } from 'react';
import {
    List, ListItem,
    TextField
} from '@material-ui/core';

import './index.scss';

export default function TodoForm() {
    const [title, setTitle] = useState('');

    return (
        <form className="todo-form">
            <List>
                <ListItem>
                    <TextField
                        label="Dodaj nowe zadanie..."
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        fullWidth
                    />
                </ListItem>
            </List>
        </form>
    );
}
