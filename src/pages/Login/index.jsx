import React, { useState } from 'react';

import {  actions } from "../../store";

import './index.scss';
import {act} from "@testing-library/react";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        actions.loginUser(email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    label="Adres e-mail"
                    required
                    fullWidth
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    label="Hasło"
                    value={password}
                    required
                    fullWidth
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Zaloguj</button>
            </form>
        </div>
    )
}