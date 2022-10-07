// import { sequelize } from './../server/server.init';
// import { DataTypes } from "sequelize";

// const primaryKeyConstraints = {
//   type: DataTypes.UUID,
//   allowNull: false,
//   primaryKey: true
// }

// export const User = sequelize.define('User', {
//     userId: primaryKeyConstraints,
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING
//     }
// })

// export const Task = sequelize.define('Task', {
//   taskId: primaryKeyConstraints,
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   status: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   created_at: {
//     type:DataTypes.DATEONLY,
//     allowNull: false
//   }
// })

// User.hasMany(Task, {foreignKey: 'memberId'})
// Task.belongsTo(User)


