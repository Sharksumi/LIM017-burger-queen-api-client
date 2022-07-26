import Login from '../../Components/Login.js';
import { useState } from "react";
import React from "react";
import { Authentication } from "../../util/Authentication.js";
import { createMemoryHistory } from 'history';

import { Router, useNavigate } from "react-router-dom";
import { render } from '@testing-library/react';
import {fireEvent, screen} from "@testing-library/react";


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(() => { })
}));

describe('login', () => {
    it('should login with an authenticated username and password', () => {

        const history = createMemoryHistory();
        render(
            <Router location={history.location} navigator={history}>
                <Login />
            </Router>
        )

        const emailInput = screen.getByPlaceholderText('Ingrese su usuario');
        const passwordInput = screen.getByPlaceholderText('Ingrese contraseña');
        const buttonLogin = screen.getByText('INICIAR SESIÓN');

        fireEvent.change(emailInput, { target: { value: 'anita.borg@systers.xyz' } });
        fireEvent.change(passwordInput, { target: { value: '123456' } });
        fireEvent.submit(buttonLogin);


        expect().toBe()
    })



})
