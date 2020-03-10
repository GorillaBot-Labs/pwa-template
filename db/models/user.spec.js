import {models} from '../../db';

const { User } = models;

it('should create a user model', async () => {
    const user = await User.create({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        password: 'password'
    });

    expect(user).toEqual(expect.objectContaining({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
    }));
});

it('should be unique email', async () => {
    expect.hasAssertions();

    await User.create({ email: 'john.doe@gmail.com', password: 'password' });

    try {
        await User.create({ email: 'john.doe@gmail.com', password: 'password' });
    } catch (error) {
        expect(error.name).toEqual("SequelizeUniqueConstraintError");
        expect(error.fields).toEqual({ email: "john.doe@gmail.com" });
        expect(error.errors[0].message).toEqual("email must be unique");
        expect(error.message).toEqual("Validation error");
        expect(await User.count()).toEqual(1);
    }
});

it('should validate a password', async () => {
    const user = await User.create({ email: 'john.doe@gmail.com', password: 'password' });
    const isValid = await user.validatePassword('password');

    expect(isValid).toEqual(true);
});

it('should validate an incorrect password', async () => {
    const user = await User.create({ email: 'john.doe@gmail.com', password: 'password' });
    const isValid = await user.validatePassword('fake');

    expect(isValid).toEqual(false);
});