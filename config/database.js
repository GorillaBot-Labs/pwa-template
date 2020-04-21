module.exports = {
    "development": {
        "username": "postgres",
        "password": "",
        "database": "pwa_template",
        "host": "127.0.0.1",
        "dialect": "postgres",
        "logging": false
    },
    "test": {
        "username": "postgres",
        "password": "",
        "database": "pwa_template_test",
        "host": "127.0.0.1",
        "dialect": "postgres",
        "logging": false
    },
    "production": {
        "url": process.env.DATABSASE_URL,
        "dialect": "postgres",
        "logging": false
    }
}
