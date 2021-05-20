import React, { useState } from 'react';
import {
    List, ListItem,
    TextField
} from '@material-ui/core';

import './index.scss';

export default function Form({ onSubmit }) {
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
                        label="Co jest do zrobienia..."
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        fullWidth
                    />
                </ListItem>
            </List>
        </form>
    );
}
