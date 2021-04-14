import React from "react";
import { Layout, Typography, List, ListItem, ListItemText } from "mdc-react";

import { Icon, IconButton, TextField, Checkbox } from '@material-ui/core'

import './index.scss'

export default function TodoDetails({ todo, onClose }) {
    return (
        <aside className="todo-details">
            <Layout row justifyContent="between">
                <Typography>Szczegóły zadania</Typography>

                <IconButton onClick={onClose}>
                    <Icon>close</Icon>
                </IconButton>
            </Layout>

            <Layout>
                <Layout row>
                    <Checkbox>
                        checked={todo.completed}
                        onChange={() => {}}
                    </Checkbox>

                    <TextField
                        value={todo.title}
                        onChange={() => {}}
                        fullWidth
                    />
                </Layout>

                {todo.steps && todo.steps.length > 0 &&
                    <List>
                        {todo.steps.map((step, index) =>
                            <ListItem key={index}>
                                <ListItemText>{step}</ListItemText>
                            </ListItem>
                        )}
                    </List>
                }
            </Layout>
        </aside>
    );
}