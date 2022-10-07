import { Sequelize, DataTypes } from 'sequelize';
export const sequelize = new Sequelize('kanyim', 'root', '.Kvrag7C2yFinXJ', {
    dialect: 'mysql',
    host: 'localhost'
});
//models
export const User = sequelize.define('user', {
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
});
export const Task = sequelize.define('task', {
    taskId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
User.hasMany(Task, {
    as: 'tasks'
});
Task.belongsTo(User, {
    as: 'user'
});
