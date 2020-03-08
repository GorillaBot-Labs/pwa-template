import React from 'react';
import axios from 'axios';
import {render, cleanup, fireEvent, wait} from '@testing-library/react';

import LoginForm from "./LoginForm";

const onSubmit = jest.fn();
const user = {
    name: "Admin",
    email: "admin@friendthatcooks.com"
};

jest.mock('axios');

afterEach(() => {
    jest.resetAllMocks();
    cleanup();
});

it('should send the user back on submit', async () => {
    axios.post.mockResolvedValue({data: user});

    const {getByTestId} = render(<LoginForm onSubmit={onSubmit}/>);
    const $email = getByTestId('email');
    const $password = getByTestId('password');
    const $button = getByTestId('submit');

    fireEvent.change($email, {target: {value: user.email}});
    fireEvent.change($password, {target: {value: 'password'}});
    fireEvent.click($button);

    await wait();

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(user);
});

it('should require email and password to submit', async () => {
    axios.post.mockResolvedValue({data: user});

    const {getByTestId} = render(<LoginForm onSubmit={onSubmit}/>);
    const $email = getByTestId('email');
    const $password = getByTestId('password');
    const $button = getByTestId('submit');

    fireEvent.change($email, {target: {value: ""}});
    fireEvent.change($password, {target: {value: ""}});
    fireEvent.click($button);

    await wait();

    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect($button.disabled).toEqual(true);
});

it('should handle error from api', async () => {
    axios.post.mockRejectedValue();

    const {getByTestId} = render(<LoginForm onSubmit={onSubmit}/>);
    const $email = getByTestId('email');
    const $password = getByTestId('password');
    const $button = getByTestId('submit');

    fireEvent.change($email, {target: {value: "fake@friendthatcooks.com"}});
    fireEvent.change($password, {target: {value: "password"}});
    fireEvent.click($button);

    await wait();

    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect(getByTestId('errorMessage').innerHTML).toEqual("Username or password was incorrect");
});
