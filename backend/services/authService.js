import {models} from '../../db';

const { User } = models;

const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });

    if (!user) {
        return null;
    }

    const isValid = await user.validatePassword(password);
    if (!isValid) {
        return null;
    }

    return user;
};

export default {
    login,
};