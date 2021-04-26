import React, { useState } from 'react';

import {
    CardSection,
    Layout,
} from 'mdc-react';

import {
    Button,
    Card, CardActions,
    Typography,
    TextField
} from '@material-ui/core';

import useStore from '../../hooks/store';

import './index.scss';

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

        return(
    <Layout id="login-page" className="page">
        <Typography variant="headline1">React Todo</Typography>

        {error &&
        <Typography>{error}</Typography>
        }

        <Card outlined>
            <CardSection primary>
                <TextField
                    type="email"
                    value={email}
                    label="Adres e-mail"
                    required
                    fullWidth
                    onChange={(event) => setEmail(event.target.value)}
                />

                <TextField
                    type="password"
                    label="Hasło"
                    value={password}
                    required
                    fullWidth
                    onChange={(event) => setPassword(event.target.value)}
                />
            </CardSection>

            <CardActions>
                <Button onClick={handleLogInButtonClick}>Zaloguj</Button>
                <Button onClick={handleRegisterButtonClick}>Załóż konto</Button>
            </CardActions>
        </Card>

    </Layout>
);
}

