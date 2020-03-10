import bcrypt from 'bcrypt';
import {PASSWORD_SALT} from "../../backend/constants";

export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            field: "first_name",
        },
        lastName: {
            type: DataTypes.STRING,
            field: "last_name",
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        }
    }, {
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    });

    User.prototype.validatePassword = async function (password) {
        return bcrypt.compare(password, this.password);
    };

    User.associate = function (models) {
        // associations can be defined here
    };

    return User;
};
