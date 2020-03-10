import axios from 'axios';

import {models} from '../../db';

const { User } = models;

describe('login', () => {
    it('return authenticated user', async () => {
        const user = await User.create({ email: 'john.doe@gmail.com', password: 'password' });

        const response = await axios.post('/api/auth/login', {
            email: user.email,
            password: 'password',
        });

        expect(response.status).toEqual(200);
        expect(response.data).toEqual(expect.objectContaining({
            id: user.id,
            email: user.email,
        }));
    });

    it('error if no user found', async () => {
        expect.hasAssertions();

        try {
            await axios.post('/api/auth/login', { email: "fake@test.com", password: 'password' });
        } catch ({ response }) {
            expect(response.status).toEqual(400);
            expect(response.data).toEqual("Bad Request");
        }
    });

    it('error if wrong password', async () => {
        expect.hasAssertions();
        const user = await User.create({ email: 'john.doe@gmail.com', password: 'password' });

        try {
            await axios.post('/api/auth/login', { email: user.email, password: 'nope' });
        } catch ({ response }) {
            expect(response.status).toEqual(400);
            expect(response.data).toEqual("Bad Request");
        }
    });
});
