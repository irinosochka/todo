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
import useStore from "../../hooks/store";
import TodoForm from "../TodoForm";

export default function TodoDetails({ todo }) {
    const { state, actions } = useStore();

    function handleUpdateStep(todoId, data) {
        actions.createStep(todoId, data);
    }

    return (
        <aside className="todo-details">
            <Layout varian="column">
                <TextField
                    variant="filled"
                    label="Nazwa"
                    value={todo.title}
                    onChange={() => {}}
                />

                {todo.dueDate &&
                    <TextField
                        variant="filled"
                        label="Data wykonania"
                        value={moment(todo.dueDate * 1000).format("MM/DD")}
                        onChange={() => {}}
                    />
                }
            </Layout>

            <section className="todo-steps">
                <Typography variant="subtitle2">Kroki</Typography>

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

                <TodoForm
                    onSubmit={handleUpdateStep}
                />

                <TextField
                    id="standard-helperText"
                    type="datetime-local"
                    value={moment(todo.dueDate * 1000).format("MM/DD")}
                    onChange={() => {}}
                    fullWidth
                />
            </section>
        </aside>
    );
}