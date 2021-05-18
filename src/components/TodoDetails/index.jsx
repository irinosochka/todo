import React from 'react';

import {
    TextField, Grid
} from '@material-ui/core';

import moment from 'moment';

import './index.scss';

export default function TodoDetails({ todo }) {
    return (
        <aside className="todo-details">
            <Grid varian="column">
                <TextField
                    variant="filled"
                    label="Nazwa"
                    value={todo.title}
                    onChange={() => {}}
                    fullWidth
                />

                {todo.dueDate &&
                    <TextField
                        variant="filled"
                        label="Data wykonania"
                        value={moment(todo.dueDate.seconds * 1000).format("DD/MM/YYYY")}
                        onChange={() => {}}
                    />
                }
            </Grid>
        </aside>
    );
}
