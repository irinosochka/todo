import React, { useState } from 'react';
import {
    List, ListItem,
    TextField
} from '@material-ui/core';

import './index.scss';

export default function TodoForm({onSubmit}) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        onSubmit(title);
        setTitle('');
    }


    return (
        <form onSubmit={handleSubmit} className="todo-form">
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
