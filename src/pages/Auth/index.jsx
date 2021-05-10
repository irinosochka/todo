import React, {useState} from 'react';

import {
    Button, CssBaseline, FormControlLabel,Checkbox,
    Container,
    Typography,
    TextField
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import useStore from "../../hooks/store";
import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function AuthPage() {
    const classes = useStyles();
    const {actions} = useStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleLogInButtonClick() {
        if (email && password) {
            actions.logInUser(email, password)
                .catch(error => setError(error.message));
        }
    }

    function handleRegisterButtonClick() {
        if (email && password) {
            actions.registerUser(email, password)
                .catch(error => setError(error.message));
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h3" color="primary" >
                    React Todo
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        type="email"
                        label="Adres e-mail"
                        value={email}
                        required
                        fullWidth
                        autoFocus
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        type="password"
                        label="Hasło"
                        value={password}
                        required
                        fullWidth
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Zapamiętaj mnie"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleLogInButtonClick}
                    >
                        Zaloguj
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleRegisterButtonClick}
                    >
                        Załóż konto
                    </Button>
                </form>
            </div>
        </Container>
    );
}