import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { LoginForm } from '../../components/login/login.comp';
import { ResetPassword } from '../../components/password-reset/passwordreset';

import PropTypes from 'prop-types';
import './entry.style.css';
export const Entry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState('login');

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;

        }
        console.log(email, password);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            return alert("Fill up all the form");
        }
        // TODO call api to submit the form
        console.log("AAA");

    }
    const handleOnResetSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            return alert("Please enter email!");
        }
        console.log(email);
    }
    const handleOnformSwitcher = (frm) => {
        console.log(frm);
        setFrmLoad(frm);

    }
    return (
        <div className='entry-page bg-info'>
            <Container >
                {frmLoad === "login" && (
                    <LoginForm
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                        formSwitcher={handleOnformSwitcher}
                        email={email}
                        password={password}></LoginForm>)}
                {frmLoad === "reset" && (
                    <ResetPassword
                        handleOnChange={handleOnChange}
                        handleOnResetSubmit={handleOnResetSubmit}
                        formSwitcher={handleOnformSwitcher}
                        email={email}
                    >
                    </ResetPassword>)}

            </Container>
        </div>
    )
}