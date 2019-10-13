module.exports = {
    dialect: 'postgres',
    host: process.env.HOST_DB || 'localhost',
    username: process.env.USERNAME_DB || 'jeanfernandes',
    password: process.env.PASSWD_DB || 'admin',
    database: 'goBarber',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}