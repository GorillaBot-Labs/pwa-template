import db from './database';

const env = process.env.NODE_ENV || 'development';

export default {
    db: db[env],
};