import axios from 'axios';

class AuthService {
    static login = async (email, password) => {
        const response = await axios.post('/api/auth/login', {
            email, password
        });

        return response.data;
    };
}

export default AuthService;
