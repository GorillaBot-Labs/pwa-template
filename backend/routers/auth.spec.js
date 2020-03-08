import axios from 'axios';

it('return authenticated user', async () => {
    const response = await axios.post('http://localhost:3001/api/auth/login', {
        email: 'admin@friendthatcooks.com',
        password: 'password'
    });

    expect(response.status).toEqual(200);
});
