import React, { useState } from 'react';
import {
    TextField, List, ListItem,
} from 'mdc-react';

import './index.scss'

export default function TodoForm({ onSubmit }) {
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
                        label="Podaj..."
                        value={title}
                        onChange={setTitle}
                        fullWidth
                    />
                </ListItem>
            </List>
        </form>
    );
}
