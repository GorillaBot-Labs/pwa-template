import {Router} from 'express';

import authService from '../services/authService';

const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await authService.login(email, password);

    if (user) {
        return res.send(user);
    }

    return res.send(400);
});

export default router;
