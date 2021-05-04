import React from 'react';
import {
    Layout,
    ListItemGraphic,
} from 'mdc-react';

import {
    Checkbox,
    List, ListItem, ListItemText,
    Typography, TextField
} from '@material-ui/core';

import moment from 'moment';

import './index.scss';

export default function TodoDetails({ todo }) {

    console.log(todo.dueDate)

    return (
        <aside className="todo-details">
            <Layout column>
                <TextField id="filled-basic" label="Filled" variant="filled"
                    label="Nazwa"
                    value={todo.title}
                    onChange={() => {}}
                />

                {todo.dueDate &&
                    <TextField id="filled-basic" label="Filled" variant="filled"
                               label="Data wykonania"
                               value={moment(todo.dueDate  * 1000).format("DD/MM/YYYY")}
                               onChange={() => {}}
                    />
                }
            </Layout>

            <section className="todo-steps">
                <Typography variant="subtitle2" nomargin>Kroki</Typography>

                {todo.steps && todo.steps.length > 0 &&
                    <List className="todo-step-list" dense>
                        {todo.steps.map((step, index) =>
                            <ListItem key={index}>
                                <ListItemGraphic>
                                    <Checkbox color="primary"
                                        checked={step.completed}
                                    />
                                </ListItemGraphic>

                                <ListItemText>{step.title}</ListItemText>
                            </ListItem>
                        )}
                    </List>
                }

                <TextField
                    id="standard-helperText"
                    type="datetime-local"
                    value={moment(todo.dueDate  * 1000 /39 ).format("DD/MM/YYYY")}
                    onChange={() => {}}
                    fullWidth
                />
            </section>
        </aside>
    );
}