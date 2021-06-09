import React, {useState} from 'react';
import moment from 'moment';
import 'date-fns';
import {
    TextField, Grid
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import './index.scss';
import "react-datepicker/dist/react-datepicker.css";

export default function Details({ todo, onUpdate }) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    function handleDateChange(date){
        setSelectedDate(date);
        date = moment.duration(date).asSeconds();
        onUpdate(todo.id, { dueDate: date });
    }
    return (
        <aside className="todo-details">
            <Grid varian="column">
                <TextField
                    variant="filled"
                    label="Nazwa:"
                    value={todo.title}
                    fullWidth
                />

                {todo.dueDate &&
                    <TextField
                        variant="filled"
                        label="Data wykonania:"
                        value={moment(todo.dueDate * 1000).format("DD-MM-YYYY")}
                        fullWidth
                    />
                }

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            type="date"
                            format="dd/MM/yyyy"
                            margin="normal"
                            label="Wybierz datę wykonania"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </Grid>
        </aside>
    );
}
