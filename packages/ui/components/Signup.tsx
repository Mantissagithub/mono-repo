import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export function Signup(props: {
    onClick: (username: string, password: string) => void
}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onClick(email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Email" type="email" value={email} onChange={handleEmailChange} />
            <TextField label="Password" type="password" value={password} onChange={handlePasswordChange} />
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    );
}
