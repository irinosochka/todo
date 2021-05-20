import React, {useState} from 'react';
import firebase from "firebase";
import "firebase/auth";

import {
    Button, CssBaseline, FormControlLabel,Checkbox,
    Container,
    Typography,
    TextField, Grid
} from '@material-ui/core';

import "./index.scss";

import useStore from "../../hooks/store";

export default function AuthPage() {
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

    function handleGoogle() {
        var provider = new firebase.auth.GoogleAuthProvider();

        if (provider) {
            actions.logInUserGoogle(provider)
                .catch(error => setError(error.message));
        }
    }

    return (
        <Container component="main">
            <CssBaseline/>
            <div className='paper'>
                <Typography component="h1" variant="h3" color="primary">
                    React Todo
                </Typography>
                <div className='forms'>
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

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLogInButtonClick}
                    >
                        Zaloguj się
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleGoogle}
                        style={{marginTop:'10px'}}
                    >
                        Zaloguj się za pomocą Google
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleRegisterButtonClick}
                        style={{marginTop:'10px'}}
                    >
                        Załóż konto
                    </Button>
                </div>
            </div>
        </Container>
    );
}
