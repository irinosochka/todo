import React from 'react';
import {
    Checkbox,
    Layout,
    ListItemGraphic,
} from 'mdc-react';

import {
    List, ListItem, ListItemText,
    Typography, TextField
} from '@material-ui/core';

import './index.scss';

export default function TodoDetails({ todo }) {
    return (
        <aside className="todo-details">
            <Layout row>
                <TextField
                    label="Nazwa"
                    value={todo.title}
                    onChange={() => {}}
                />
            </Layout>

            <section className="todo-steps">
                <Typography variant="subtitle2" nomargin>Kroki</Typography>

                {todo.steps && todo.steps.length > 0 &&
                    <List className="todo-step-list" dense>
                        {todo.steps.map((step, index) =>
                            <ListItem key={index}>
                                <ListItemGraphic>
                                    <Checkbox
                                        checked={step.completed}
                                    />
                                </ListItemGraphic>

                                <ListItemText>{step.title}</ListItemText>
                            </ListItem>    
                        )}
                    </List>
                }
            </section>
        </aside>
    );
}