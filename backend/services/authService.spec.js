import authService from './authService';
import {models} from '../../db';

const { User } = models;

it('return an authenticated user', async () => {
    const user = await User.create({ email: 'admin@friendthatcooks.com', password: 'password' });

    const authenticatedUser = await authService.login(user.email, 'password');

    expect(authenticatedUser).toEqual(expect.objectContaining({
        id: user.id,
        email: user.email,
    }));
});
